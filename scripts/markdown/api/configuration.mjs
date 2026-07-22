import { writeFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import { major } from 'semver';
import { sources, getPackageFile, outputDir } from './utils.mjs';

const definitionName = ref =>
  ref?.startsWith('#/definitions/') ? ref.slice('#/definitions/'.length) : '';

const collapse = text => text?.replace(/\s+/g, ' ').trim();

const trimImports = text =>
  collapse(text.replace(/import\((?:"[^"]*"|'[^']*')\)\./g, ''));

const literal = value =>
  typeof value === 'string' ? JSON.stringify(value) : String(value);

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** Quote object keys that are not valid identifiers (e.g. `asset/inline`). */
const propertyKey = name => (IDENTIFIER.test(name) ? name : `'${name}'`);

/** Option path in JS access notation: `module.generator['asset/inline']`. */
const formatPath = segments =>
  segments
    .map((segment, index) => {
      if (!IDENTIFIER.test(segment)) return `['${segment}']`;
      return index ? `.${segment}` : segment;
    })
    .join('');

const isStructural = schema =>
  schema.type === 'object' || Boolean(schema.properties);

/**
 * Render a schema as the type text used inside a doc-kit `{...}` annotation.
 * Named definitions stay names (the type map links them to the generated API
 * type pages), `tsType` schemas keep their TypeScript text verbatim, and
 * anonymous objects collapse to `object`.
 */
const summarize = (schema, definitions, stack = new Set()) => {
  if (!schema) return 'unknown';

  const ref = definitionName(schema.$ref);
  if (ref) {
    const target = definitions[ref];
    // Objects keep their linkable name; unions, enums, and scalars read better
    // inlined. Cycles (for example RuleSetCondition) fall back to the name.
    if (!target || stack.has(ref) || isStructural(target)) return ref;
    return summarize(target, definitions, new Set(stack).add(ref));
  }

  if (schema.tsType) return trimImports(schema.tsType);

  if (schema.enum) {
    return [...new Set(schema.enum.map(literal))].join(' | ');
  }

  if (schema.instanceof) return schema.instanceof;

  const alternatives = schema.anyOf ?? schema.oneOf;
  if (alternatives) {
    let parts = [
      ...new Set(
        alternatives.map(alternative =>
          summarize(alternative, definitions, stack)
        )
      ),
    ];
    if (parts.includes('true') && parts.includes('false')) {
      parts = parts
        .map(part => (part === 'true' ? 'boolean' : part))
        .filter(part => part !== 'false');
    }
    return parts.join(' | ');
  }

  if (schema.type === 'array') {
    const item =
      schema.items && !Array.isArray(schema.items)
        ? summarize(schema.items, definitions, stack)
        : 'any';
    return item.includes(' ') ? `(${item})[]` : `${item}[]`;
  }

  if (isStructural(schema) || schema.additionalProperties) return 'object';
  if (schema.type === 'integer') return 'number';
  if (Array.isArray(schema.type)) return schema.type.join(' | ');
  if (schema.type) return schema.type;

  return 'unknown';
};

/** Collect every object-with-properties shape an option can resolve to. */
const expandableObjects = (schema, definitions, stack = new Set()) => {
  const ref = definitionName(schema.$ref);
  if (ref) {
    const target = definitions[ref];
    if (!target || stack.has(ref)) return [];
    return expandableObjects(target, definitions, new Set(stack).add(ref));
  }

  if (schema.properties) return [schema];

  const alternatives = schema.anyOf ?? schema.oneOf;
  if (alternatives) {
    return alternatives.flatMap(alternative =>
      expandableObjects(alternative, definitions, stack)
    );
  }

  return [];
};

/**
 * Property whose single-value enum distinguishes every shape of a multi-shape
 * option — for example `cache`'s `type`: "memory" vs "filesystem".
 */
const discriminatorOf = shapes => {
  if (shapes.length < 2) return null;
  return (
    Object.keys(shapes[0].properties).find(name => {
      const values = shapes.map(shape => shape.properties[name]?.enum);
      return (
        values.every(value => value?.length === 1) &&
        new Set(values.map(value => literal(value[0]))).size === shapes.length
      );
    }) ?? null
  );
};

const resolveSchema = (schema, definitions, stack = new Set()) => {
  const ref = definitionName(schema?.$ref);
  if (!ref || !definitions[ref] || stack.has(ref)) return schema;
  return resolveSchema(definitions[ref], definitions, new Set(stack).add(ref));
};

/**
 * Rank how illustrative an example built from this schema would be — lower is
 * better. Objects with required properties and string enums carry real values,
 * free strings still read naturally, and bare objects or arrays teach the
 * least.
 */
const concreteness = (schema, definitions, stack = new Set()) => {
  if (!schema) return 7;

  const ref = definitionName(schema.$ref);
  if (ref) {
    if (!definitions[ref] || stack.has(ref)) return 7;
    return concreteness(definitions[ref], definitions, new Set(stack).add(ref));
  }

  const alternatives = schema.anyOf ?? schema.oneOf;
  if (alternatives) {
    return Math.min(
      ...alternatives.map(alternative =>
        concreteness(alternative, definitions, stack)
      )
    );
  }

  if (isStructural(schema) && schema.required?.length) return 0;
  if (schema.enum?.some(value => typeof value === 'string')) return 0;
  if (schema.type === 'string') return 1;
  if (schema.enum) return 2;
  if (schema.type === 'boolean') return 3;
  if (schema.type === 'number' || schema.type === 'integer') return 4;
  if (schema.type === 'array') return 5;
  return 6;
};

/** Tie-breaker between equally illustrative shapes: prefer the richer one. */
const propertyCount = (schema, definitions) =>
  Object.keys(resolveSchema(schema, definitions)?.properties ?? {}).length;

/**
 * Derive a placeholder value for an option from its schema: real literals for
 * enums, neutral placeholders per type otherwise. Multi-shape options use the
 * alternative whose example is most illustrative (see `concreteness`).
 */
const exampleValue = (schema, definitions, stack = new Set()) => {
  if (!schema) return 'undefined';

  const ref = definitionName(schema.$ref);
  if (ref) {
    const target = definitions[ref];
    if (!target || stack.has(ref)) return '{}';
    return exampleValue(target, definitions, new Set(stack).add(ref));
  }

  if (schema.enum) {
    return literal(
      schema.enum.find(value => typeof value === 'string') ?? schema.enum[0]
    );
  }
  if (schema.instanceof === 'Function' || schema.tsType?.includes('=>')) {
    return '() => {}';
  }

  const alternatives = schema.anyOf ?? schema.oneOf;
  if (alternatives) {
    const preferred = alternatives.reduce((best, alternative) => {
      const rank = concreteness(alternative, definitions, stack);
      const bestRank = concreteness(best, definitions, stack);
      if (rank !== bestRank) return rank < bestRank ? alternative : best;
      return propertyCount(alternative, definitions) >
        propertyCount(best, definitions)
        ? alternative
        : best;
    });
    return exampleValue(preferred, definitions, stack);
  }

  if (schema.type === 'array') return '[]';
  if (isStructural(schema) || schema.additionalProperties) {
    const entries = (schema.required ?? [])
      .filter(name => schema.properties?.[name])
      .map(
        name =>
          `${propertyKey(name)}: ${exampleValue(schema.properties[name], definitions, stack)}`
      );
    return entries.length ? `{ ${entries.join(', ')} }` : '{}';
  }
  if (schema.type === 'boolean') return 'true';
  if (schema.type === 'number' || schema.type === 'integer') return '0';
  if (schema.type === 'string') return "'...'";

  return 'undefined';
};

/**
 * Render a minimal config snippet placing the option at its nesting path.
 * `extras` are sibling entries required for the option to apply — typically
 * the discriminator of its shape, like `type: "filesystem"`.
 */
const renderExample = (segments, schema, definitions, extras = []) => {
  const indent = depth => '  '.repeat(depth + 1);
  const lines = ['```js', 'export default {'];

  segments.forEach((segment, index) => {
    const last = index === segments.length - 1;
    if (last) {
      for (const extra of extras) lines.push(`${indent(index)}${extra},`);
    }
    lines.push(
      last
        ? `${indent(index)}${propertyKey(segment)}: ${exampleValue(schema, definitions)},`
        : `${indent(index)}${propertyKey(segment)}: {`
    );
  });

  for (let index = segments.length - 2; index >= 0; index--) {
    lines.push(`${indent(index)}},`);
  }

  lines.push('};', '```');
  return lines;
};

const descriptionOf = (schema, definitions) => {
  if (schema.description) return collapse(schema.description);

  const ref = definitionName(schema.$ref);
  return ref ? collapse(definitions[ref]?.description) : undefined;
};

const isDeprecated = (schema, definitions) =>
  Boolean(
    schema.deprecated ?? definitions[definitionName(schema.$ref)]?.deprecated
  );

const addedInVersion = (schema, definitions) =>
  schema.added ?? definitions[definitionName(schema.$ref)]?.added;

const defaultOf = (schema, definitions) =>
  schema.default ?? definitions[definitionName(schema.$ref)]?.default;

const propertyBullet = (name, schema, definitions) => {
  const description = descriptionOf(schema, definitions);
  const type = summarize(schema, definitions);
  const added = addedInVersion(schema, definitions);
  const defaultValue = defaultOf(schema, definitions);
  const notes = [
    added ? `**Added in: v${added}**` : '',
    isDeprecated(schema, definitions) ? '**Deprecated.**' : '',
    description ?? '',
    defaultValue !== undefined
      ? `**Default:** \`${JSON.stringify(defaultValue)}\``
      : '',
  ]
    .filter(Boolean)
    .join(' ');
  return `  * \`${name}\` {${type}}${notes ? ` - ${notes}` : ''}`;
};

const renderOption = (path, schema, definitions, depth, exampleExtras = []) => {
  const lines = [`${'#'.repeat(depth + 2)} \`${formatPath(path)}\``, ''];

  const added = addedInVersion(schema, definitions);
  if (added) {
    lines.push('<!-- YAML', `added: v${added}`, '-->', '');
  }

  if (isDeprecated(schema, definitions)) {
    lines.push('> Stability: 0 - Deprecated', '');
  }

  const description = descriptionOf(schema, definitions);
  if (description) lines.push(description, '');

  lines.push(`* Type: {${summarize(schema, definitions)}}`);

  const defaultValue = defaultOf(schema, definitions);
  if (defaultValue !== undefined) {
    lines.push(`* Default: \`${JSON.stringify(defaultValue)}\``);
  }

  const shapes = expandableObjects(schema, definitions);
  const discriminator = discriminatorOf(shapes);

  // Union of every shape's properties. A property shared by several shapes (a
  // discriminator like `cache.type`) documents the union of its variants;
  // shape-specific ones are labelled with their discriminator value and their
  // example carries it (for example `type: "filesystem"`).
  const entries = new Map();
  for (const shape of shapes) {
    for (const [name, child] of Object.entries(shape.properties)) {
      if (!entries.has(name)) entries.set(name, { children: [], owners: [] });
      const entry = entries.get(name);
      entry.children.push(child);
      entry.owners.push(shape);
    }
  }

  const properties = [...entries].map(([name, { children, owners }]) => {
    const [child, ...variants] = children;
    const ownValues = owners.map(owner =>
      literal(owner.properties[discriminator]?.enum?.[0])
    );
    const partial =
      discriminator && name !== discriminator && owners.length < shapes.length;

    const note = partial
      ? `Only used when \`${discriminator}\` is set to ${ownValues
          .map(value => `\`${value}\``)
          .join(' or ')}.`
      : '';
    const merged =
      variants.length || note
        ? {
            description: [descriptionOf(child, definitions), note]
              .filter(Boolean)
              .join(' '),
            deprecated: isDeprecated(child, definitions),
            anyOf: [child, ...variants],
          }
        : child;
    const extras = partial ? [`${discriminator}: ${ownValues[0]}`] : [];

    return [name, merged, extras];
  });

  if (depth < 2) {
    lines.push('', ...renderExample(path, schema, definitions, exampleExtras));
    lines.push('');
    for (const [name, child, extras] of properties) {
      lines.push(
        ...renderOption([...path, name], child, definitions, depth + 1, extras)
      );
    }
  } else {
    // Sub-option details nest under the type annotation.
    for (const [name, child] of properties) {
      lines.push(propertyBullet(name, child, definitions));
    }
    lines.push('', ...renderExample(path, schema, definitions, exampleExtras));
    lines.push('');
  }

  return lines;
};

const generate = async packageDir => {
  const { version } = await getPackageFile(packageDir);
  const schema = await getPackageFile(
    packageDir,
    'schemas/WebpackOptions.json'
  );

  const lines = [
    '---',
    'source: https://github.com/webpack/webpack/edit/main/schemas/WebpackOptions.json',
    '---',
    '',
    '# Configuration Options',
    '',
    'webpack is configured with an options object, usually exported from a `webpack.config.js` file. ' +
      'Every build validates that object against the options schema ' +
      '([`schemas/WebpackOptions.json`](https://github.com/webpack/webpack/blob/main/schemas/WebpackOptions.json)), ' +
      'so unknown or malformed options fail with a descriptive error. ' +
      'This page is generated from that schema and lists every supported option; ' +
      'named types link to their full definitions in the API documentation.',
    '',
  ];

  for (const [name, child] of Object.entries(schema.properties)) {
    lines.push(...renderOption([name], child, schema.definitions, 0));
  }

  await writeFile(
    join(outputDir, `v${major(version)}.x`, 'options.md'),
    lines.join('\n'),
    'utf8'
  );
};

for (const source of sources) {
  await generate(source);
}

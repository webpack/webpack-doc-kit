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

/**
 * Find the single object-with-properties schema an option resolves to, so its
 * sub-options can be documented in place. Options offering several object
 * shapes (for example `cache`) are left to their linked type pages.
 */
const expandableObject = (schema, definitions, stack = new Set()) => {
  const ref = definitionName(schema.$ref);
  if (ref) {
    const target = definitions[ref];
    if (!target || stack.has(ref)) return null;
    return expandableObject(target, definitions, new Set(stack).add(ref));
  }

  if (schema.properties) return schema;

  const alternatives = schema.anyOf ?? schema.oneOf;
  if (alternatives) {
    const objects = alternatives
      .map(alternative => expandableObject(alternative, definitions, stack))
      .filter(Boolean);
    return objects.length === 1 ? objects[0] : null;
  }

  return null;
};

const descriptionOf = (schema, definitions) => {
  if (schema.description) return collapse(schema.description);

  const ref = definitionName(schema.$ref);
  return ref ? collapse(definitions[ref]?.description) : undefined;
};

const propertyBullet = (name, schema, definitions) => {
  const description = descriptionOf(schema, definitions);
  const type = summarize(schema, definitions);
  return `  * \`${name}\` {${type}}${description ? ` - ${description}` : ''}`;
};

const renderOption = (path, schema, definitions, depth) => {
  const lines = [`${'#'.repeat(depth + 2)} \`${path}\``, ''];

  const description = descriptionOf(schema, definitions);
  if (description) lines.push(description, '');

  lines.push(`* Type: {${summarize(schema, definitions)}}`);

  const objectSchema = expandableObject(schema, definitions);
  const properties = Object.entries(objectSchema?.properties ?? {});

  if (depth === 0) {
    lines.push('');
    for (const [name, child] of properties) {
      lines.push(...renderOption(`${path}.${name}`, child, definitions, 1));
    }
  } else {
    // Sub-option details nest under the type annotation.
    for (const [name, child] of properties) {
      lines.push(propertyBullet(name, child, definitions));
    }
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
    lines.push(...renderOption(name, child, schema.definitions, 0));
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

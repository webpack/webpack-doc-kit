import { ReflectionKind } from 'typedoc';

// Heading text is also anchor input. Keep all programmatic names formatted here
// so the Markdown theme and router cannot drift into different slugs.
const KIND_PREFIX = {
  [ReflectionKind.Class]: 'Class',
  [ReflectionKind.Interface]: 'Interface',
  [ReflectionKind.Enum]: 'Enum',
  [ReflectionKind.TypeAlias]: 'Type',
  [ReflectionKind.Namespace]: 'Namespace',
  [ReflectionKind.Accessor]: 'Accessor',
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: 'Static method',
};

const escapeCode = value => String(value).replace(/`/g, '\\`');

export const fullName = model => {
  const name = model.getFullName?.() ?? model.name;
  let root = model;

  while (root.parent) root = root.parent;

  // TypeDoc omits the project name from nested full names. The generated docs
  // treat the project as the public webpack namespace, so add it back whenever
  // TypeDoc has not already included it.
  if (!root.name || name === root.name || name.startsWith(`${root.name}.`)) {
    return name;
  }

  return `${root.name}.${name}`;
};

export const formatParams = (params = []) =>
  params
    .map(({ name, flags }, i) => {
      const paramName = flags?.isRest ? `...${name}` : name;
      return flags?.isOptional || flags?.isRest
        ? i
          ? `[, ${paramName}]`
          : `[${paramName}]`
        : i
          ? `, ${paramName}`
          : paramName;
    })
    .join('');

export const signatureExpression = (model, params = []) =>
  `${fullName(model)}(${formatParams(params)})`;

export const callableSignatures = model =>
  model.signatures ?? model.type?.declaration?.signatures ?? [];

export const getMemberPrefix = model => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : '';
};

export const getMemberTitle = model => {
  const prefix = getMemberPrefix(model);
  const params = callableSignatures(model)[0]?.parameters;
  const name = escapeCode(fullName(model));

  if (params) {
    return `${prefix}\`${escapeCode(signatureExpression(model, params))}\``;
  }

  return `${prefix}\`${name}\``;
};

export const getPageTitle = model => {
  const title = model.kindOf?.(ReflectionKind.Class)
    ? `Class: \`${escapeCode(fullName(model))}\``
    : `\`${escapeCode(fullName(model))}\``;

  return title;
};

import { ReflectionKind } from 'typedoc';
import { getPublicName } from '../processor/metadata.mjs';

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

const hasQualifiedParent = model => {
  let parent = model.parent;

  while (parent) {
    if (parent.kindOf?.(ReflectionKind.Class | ReflectionKind.Namespace)) {
      return true;
    }

    if (parent.kindOf?.(ReflectionKind.Project)) {
      return false;
    }

    parent = parent.parent;
  }

  return false;
};

const memberName = (model, { local = false } = {}) => {
  return local || hasQualifiedParent(model) ? model.name : fullName(model);
};

export const fullName = model => {
  const publicName = getPublicName(model);
  if (publicName) return publicName;

  const name = model.getFullName?.() ?? model.name;
  let root = model;

  while (root.parent) root = root.parent;

  if (model === root) {
    return name;
  }

  // TypeDoc omits the project name from nested full names. The generated docs
  // treat the project as the public webpack namespace, so add it back whenever
  // TypeDoc has not already included it.
  if (!root.name || name.startsWith(`${root.name}.`)) {
    return name;
  }

  return `${root.name}.${name}`;
};

export const formatParams = (params = []) =>
  params
    .map(({ name, flags }, i) => {
      const paramName = flags?.isRest ? `...${name}` : name;
      if (flags?.isRest) return i ? `, ${paramName}` : paramName;

      return flags?.isOptional
        ? i
          ? `[, ${paramName}]`
          : `[${paramName}]`
        : i
          ? `, ${paramName}`
          : paramName;
    })
    .join('');

export const signatureExpression = (
  model,
  params = [],
  name = fullName(model)
) => `${name}(${formatParams(params)})`;

export const callableSignatures = model =>
  model.signatures ?? model.type?.declaration?.signatures ?? [];

export const getConstructorTitle = (model, signature = model.signatures?.[0]) =>
  `\`new ${escapeCode(model.parent.name)}(${formatParams(signature?.parameters ?? [])})\``;

export const getMemberPrefix = model => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : '';
};

export const getMemberTitle = (model, options) => {
  const prefix = getMemberPrefix(model);
  const params = model.parameters ?? callableSignatures(model)[0]?.parameters;
  const name = escapeCode(memberName(model, options));

  if (params) {
    return `${prefix}\`${escapeCode(signatureExpression(model, params, name))}\``;
  }

  return `${prefix}\`${name}\``;
};

export const getPageTitle = model => {
  const title = model.kindOf?.(ReflectionKind.Class)
    ? `Class: \`${escapeCode(fullName(model))}\``
    : `\`${escapeCode(fullName(model))}\``;

  return title;
};

import { ReflectionKind } from 'typedoc';
import { formatParams } from './formatting.mjs';

const KIND_PREFIX = {
  [ReflectionKind.Class]: 'Class',
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: 'Static method',
};

/**
 * @param {import('typedoc').Reflection} model
 */
export function getMemberPrefix(model) {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : '';
}

/**
 * @param {import('typedoc').DeclarationReflection} model
 */
export function getMemberTitle(model) {
  const prefix = getMemberPrefix(model);
  const params = model.signatures?.[0]?.parameters;

  if (!params) {
    return `${prefix}\`${model.name}\``;
  }

  return `${prefix}\`${model.name}(${formatParams(params)})\``;
}

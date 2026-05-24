import { ReflectionKind } from 'typedoc';
import { isTypePage } from './metadata.mjs';

const TYPE_MAP_KINDS =
  ReflectionKind.Class |
  ReflectionKind.Interface |
  ReflectionKind.TypeAlias |
  ReflectionKind.Enum;

const isTypeMapTarget = target =>
  !isTypePage(target) && target.kindOf?.(TYPE_MAP_KINDS);

/**
 * Build the annotation resolver map from the router's final public URLs.
 *
 * @param {import('typedoc-plugin-markdown').Router} router
 */
export const createTypeMap = router => {
  const typeMap = new Map();

  for (const target of router.getLinkTargets()) {
    if (!isTypeMapTarget(target)) continue;

    const { name } = target;
    if (!typeMap.has(name)) {
      typeMap.set(name, router.getAnchoredURL(target));
    }
  }

  return Object.fromEntries(typeMap);
};

import { ReflectionKind } from 'typedoc';

const HOST_KINDS = ReflectionKind.Class | ReflectionKind.Namespace;

const collectReferences = (type, out, depth = 0) => {
  if (!type || depth > 30) return;

  const next = [];

  switch (type.type) {
    case 'reference':
      if (type.reflection) out.add(type.reflection.id);
      next.push(...(type.typeArguments ?? []));
      break;
    case 'union':
    case 'intersection':
      next.push(...(type.types ?? []));
      break;
    case 'array':
    case 'optional':
    case 'rest':
      next.push(type.elementType);
      break;
    case 'tuple':
      next.push(...(type.elements ?? []));
      break;
    case 'namedTupleMember':
      next.push(type.element);
      break;
    case 'indexedAccess':
      next.push(type.objectType, type.indexType);
      break;
    case 'conditional':
      next.push(
        type.checkType,
        type.extendsType,
        type.trueType,
        type.falseType
      );
      break;
    case 'predicate':
      next.push(type.targetType);
      break;
    case 'query':
      next.push(type.queryType);
      break;
    case 'mapped':
      next.push(type.parameterType, type.templateType, type.nameType);
      break;
    case 'templateLiteral':
      next.push(...(type.tail ?? []).map(([tailType]) => tailType));
      break;
    case 'typeOperator':
      next.push(type.target);
      break;
    default:
      break;
  }

  for (const child of next) collectReferences(child, out, depth + 1);
};

// The page that hosts a referring reflection: the nearest class or namespace,
// a root structural type (resolved transitively), or the project itself.
// Project-level referrers still count as owners so types used by root exports
// never look single-owned, but the project is never a co-location target.
const hostFor = (reflection, structuralIds) => {
  let current = reflection;

  while (current) {
    if (current.kindOf?.(HOST_KINDS)) return current;
    if (structuralIds.has(current.id)) return current;
    if (current.isProject?.()) return current;
    current = current.parent;
  }

  return undefined;
};

/**
 * Map each root structural type to the single class or namespace page that
 * references it, when exactly one exists.
 */
export const soleOwnerPages = (project, structuralTypes) => {
  const structuralIds = new Set(structuralTypes.map(type => type.id));
  const owners = new Map();
  const structuralReferrers = new Map();

  for (const type of structuralTypes) {
    owners.set(type.id, new Set());
    structuralReferrers.set(type.id, new Set());
  }

  for (const reflection of Object.values(project.reflections)) {
    const references = new Set();

    collectReferences(reflection.type, references);
    collectReferences(reflection.default, references);
    for (const extended of reflection.extendedTypes ?? []) {
      collectReferences(extended, references);
    }
    for (const implemented of reflection.implementedTypes ?? []) {
      collectReferences(implemented, references);
    }

    if (!references.size) continue;

    const host = hostFor(reflection, structuralIds);
    if (!host) continue;

    for (const id of references) {
      if (id === host.id || !owners.has(id)) continue;

      if (structuralIds.has(host.id)) {
        structuralReferrers.get(id).add(host.id);
      } else {
        owners.get(id).add(host);
      }
    }
  }

  let changed = true;
  while (changed) {
    changed = false;

    for (const [id, referrerIds] of structuralReferrers) {
      const ownHosts = owners.get(id);

      for (const referrerId of referrerIds) {
        for (const host of owners.get(referrerId)) {
          if (!ownHosts.has(host)) {
            ownHosts.add(host);
            changed = true;
          }
        }
      }
    }
  }

  const soleOwners = new Map();

  for (const type of structuralTypes) {
    const [owner, ...rest] = owners.get(type.id);
    if (owner && !rest.length && owner.kindOf?.(HOST_KINDS)) {
      soleOwners.set(type, owner);
    }
  }

  return soleOwners;
};

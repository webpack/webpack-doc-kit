import { basename, extname } from 'node:path';
import { ANONYMOUS_REF_NAMES, EXCLUDED_FILENAMES } from '../../constants.mjs';

/**
 * @param {import('typedoc').ReferenceType} type
 */
function resolveAnonymousReferenceName(type) {
  if (!ANONYMOUS_REF_NAMES.includes(type.name)) {
    return type.name;
  }

  if (type.name === 'exports' && type.package) {
    return type.package;
  }

  if (type._target?.qualifiedName) {
    const lastPart = type._target.qualifiedName.split('.').at(-1);

    if (lastPart) {
      return lastPart;
    }
  }

  const packagePath = type._target?.packagePath ?? type._target?.fileName;

  if (packagePath) {
    const fileName = basename(packagePath, extname(packagePath));

    if (fileName && !EXCLUDED_FILENAMES.includes(fileName)) {
      return fileName;
    }
  }

  return type.package ?? type.name;
}

/**
 * @param {import('typedoc').SomeType | undefined} type
 * @returns {string}
 */
export function resolveTypeLabel(type) {
  if (!type) {
    return 'unknown';
  }

  switch (type.type) {
    case 'intrinsic':
      return type.name ?? 'unknown';

    case 'reference': {
      const args = type.typeArguments?.length
        ? `<${type.typeArguments.map(resolveTypeLabel).join(', ')}>`
        : '';

      return `${resolveAnonymousReferenceName(type)}${args}`;
    }

    case 'literal':
      if (type.value === null) {
        return 'null';
      }

      return typeof type.value === 'string'
        ? JSON.stringify(type.value)
        : String(type.value);

    case 'array':
      return `${resolveTypeLabel(type.elementType)}[]`;

    case 'tuple':
      return `[${(type.elements ?? []).map(resolveTypeLabel).join(', ')}]`;

    case 'union':
      return (type.types ?? []).map(resolveTypeLabel).join('|');

    case 'intersection':
      return (type.types ?? []).map(resolveTypeLabel).join(' & ');

    case 'optional':
      return resolveTypeLabel(type.elementType);

    case 'indexedAccess':
      return `${resolveTypeLabel(type.objectType)}[${resolveTypeLabel(type.indexType)}]`;

    case 'query':
      return resolveTypeLabel(type.queryType);

    case 'typeOperator':
      return type.operator
        ? `${type.operator} ${resolveTypeLabel(type.target)}`
        : resolveTypeLabel(type.target);

    case 'conditional':
      return `${resolveTypeLabel(type.checkType)} extends ${resolveTypeLabel(type.extendsType)} ? ${resolveTypeLabel(type.trueType)} : ${resolveTypeLabel(type.falseType)}`;

    case 'named-tuple-member':
      return resolveTypeLabel(type.element);

    case 'reflection':
      return type.declaration?.signatures?.length ? 'Function' : 'object';

    case 'predicate':
      return 'boolean';

    case 'inferred':
      return 'unknown';

    case 'template-literal':
      return 'string';

    case 'unknown':
    default:
      return type.name ?? 'unknown';
  }
}

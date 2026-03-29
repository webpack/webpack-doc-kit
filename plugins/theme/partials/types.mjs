const union = (arr, sep = '|') =>
  arr?.length ? arr.map(resolve).join(sep) : 'unknown';

const resolve = type => {
  if (!type) return 'unknown';

  switch (type.type) {
    case 'intrinsic':
    case 'reference': {
      const args = type.typeArguments?.length
        ? `<${type.typeArguments.map(resolve).join(', ')}>`
        : '';
      return type.name + args;
    }

    case 'literal':
      return typeof type.value === 'string'
        ? JSON.stringify(type.value)
        : String(type.value);

    case 'array':
      return resolve(type.elementType) + '[]';

    case 'tuple':
      return `Tuple<${union(type.elements, ', ')}>`;

    case 'union':
      return union(type.types);

    case 'intersection':
      return union(type.types, '&');

    case 'optional':
    case 'indexedAccess':
      return resolve(type.elementType ?? type.objectType);

    case 'query':
      return resolve(type.queryType);

    case 'typeOperator':
      return resolve(type.target);

    case 'conditional':
      return `${resolve(type.trueType)}|${resolve(type.falseType)}`;

    case 'named-tuple-member':
      return resolve(type.element);

    case 'reflection':
      return 'object';

    case 'inferred':
    case 'unknown':
      return 'unknown';

    default:
      return type.name ?? 'unknown';
  }
};

export const someType = model => `{${resolve(model)}}`;

export const arrayType = someType,
  conditionalType = someType,
  indexAccessType = someType,
  inferredType = someType,
  intersectionType = someType,
  intrinsicType = someType,
  literalType = someType,
  namedTupleType = someType,
  optionalType = someType,
  queryType = someType,
  referenceType = someType,
  reflectionType = someType,
  tupleType = someType,
  typeOperatorType = someType,
  unionType = someType,
  unknownType = someType;

export const declarationType = () => '{object}';
export const functionType = () => '{Function}';

const union = (arr, sep = '|') =>
  arr?.length ? arr.map(resolve).join(sep) : 'unknown';

const stringifyParameters = params =>
  params?.map(param => `${param.name}: ${resolve(param.type)}`).join(', ') ??
  '';

const stringifySignature = signature => {
  const params = stringifyParameters(signature?.parameters);
  const returns = resolve(signature?.type);
  return `(${params}) => ${returns}`;
};

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
    case 'intersection':
      return union(type.types);

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
      if (type.declaration?.signatures?.length) {
        return stringifySignature(type.declaration.signatures[0]);
      }

      if (type.declaration?.children?.length) {
        const preview = type.declaration.children
          .slice(0, 5)
          .map(child => `${child.name}: ${resolve(child.type)}`)
          .join('; ');

        const suffix = type.declaration.children.length > 5 ? '; ...' : '';
        return `{ ${preview}${suffix} }`;
      }

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

export const declarationType = someType;
export const functionType = model => `{${stringifySignature(model)}}`;

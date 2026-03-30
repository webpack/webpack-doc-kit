const joinResolved = (arr, sep = ' | ') =>
  arr?.length ? arr.map(resolve).join(sep) : 'unknown';

const resolveTypeParameters = typeParameters => {
  if (!typeParameters?.length) return '';

  const params = typeParameters.map(param => {
    const constraint = param.type ? ` extends ${resolve(param.type)}` : '';
    const defaultType = param.default ? ` = ${resolve(param.default)}` : '';
    return `${param.name}${constraint}${defaultType}`;
  });

  return `<${params.join(', ')}>`;
};

const resolveParameter = param => {
  const rest = param.flags?.isRest ? '...' : '';
  const optional = param.flags?.isOptional ? '?' : '';
  const parameterType = param.type ? resolve(param.type) : 'unknown';
  return `${rest}${param.name}${optional}: ${parameterType}`;
};

const resolveSignature = signature => {
  const typeParams = resolveTypeParameters(signature.typeParameters);
  const parameters =
    signature.parameters?.map(resolveParameter).join(', ') ?? '';
  const returnType = signature.type ? resolve(signature.type) : 'void';
  return `${typeParams}(${parameters}) => ${returnType}`;
};

const resolveDeclaration = declaration => {
  if (!declaration) return 'object';

  if (declaration.signatures?.length) {
    return declaration.signatures.map(resolveSignature).join(' | ');
  }

  const entries = [];

  declaration.children?.forEach(child => {
    const optional = child.flags?.isOptional ? '?' : '';
    const childType = child.type ? resolve(child.type) : 'unknown';
    entries.push(`${child.name}${optional}: ${childType}`);
  });

  declaration.indexSignatures?.forEach(indexSignature => {
    const key = indexSignature.parameters?.[0];
    const keyType = key?.type ? resolve(key.type) : 'string';
    const valueType = indexSignature.type
      ? resolve(indexSignature.type)
      : 'unknown';
    entries.push(`[${key?.name ?? 'key'}: ${keyType}]: ${valueType}`);
  });

  return entries.length ? `{ ${entries.join('; ')} }` : 'object';
};

const resolve = type => {
  if (!type) return 'unknown';

  switch (type.type) {
    case 'intrinsic':
      return type.name;

    case 'reference': {
      const args = type.typeArguments?.length
        ? `<${type.typeArguments.map(resolve).join(', ')}>`
        : '';
      return `${type.name}${args}`;
    }

    case 'typeParameter':
      return type.name;

    case 'literal':
      return typeof type.value === 'string'
        ? JSON.stringify(type.value)
        : String(type.value);

    case 'array':
      return `${resolve(type.elementType)}[]`;

    case 'tuple':
      return `[${joinResolved(type.elements, ', ')}]`;

    case 'union':
      return joinResolved(type.types, ' | ');

    case 'intersection':
      return joinResolved(type.types, ' & ');

    case 'optional':
      return `${resolve(type.elementType)}?`;

    case 'rest':
      return `...${resolve(type.elementType)}`;

    case 'indexedAccess':
      return `${resolve(type.objectType)}[${resolve(type.indexType)}]`;

    case 'query':
      return `typeof ${resolve(type.queryType)}`;

    case 'typeOperator':
      return `${type.operator} ${resolve(type.target)}`;

    case 'conditional':
      return `${resolve(type.checkType)} extends ${resolve(type.extendsType)} ? ${resolve(type.trueType)} : ${resolve(type.falseType)}`;

    case 'named-tuple-member': {
      const optional = type.isOptional ? '?' : '';
      return `${type.name}${optional}: ${resolve(type.element)}`;
    }

    case 'reflection':
      return resolveDeclaration(type.declaration);

    case 'templateLiteral': {
      const spans = type.tail?.map((span, index) => {
        const head = type.head?.[index] ?? '';
        return `${head}${'${'}${resolve(span.type)}}${span.literal}`;
      });
      return `\`${type.head?.[0] ?? ''}${spans?.join('') ?? ''}\``;
    }

    case 'mapped': {
      const keyType = type.parameterType
        ? resolve(type.parameterType)
        : 'string';
      const valueType = type.templateType
        ? resolve(type.templateType)
        : 'unknown';
      const optional =
        type.optionalModifier === '+'
          ? '?'
          : type.optionalModifier === '-'
            ? '-?'
            : '';
      return `{ [${type.parameter} in ${keyType}]${optional}: ${valueType} }`;
    }

    case 'predicate': {
      const predicateType = type.targetType
        ? resolve(type.targetType)
        : 'unknown';
      return type.asserts
        ? `asserts ${type.name} is ${predicateType}`
        : `${type.name} is ${predicateType}`;
    }

    case 'inferred':
      return type.name ?? 'unknown';

    case 'unknown':
      return 'unknown';

    default:
      return type.name ?? 'unknown';
  }
};

export const someType = model => `{${resolve(model)}}`;

export const arrayType = someType,
  conditionalType = someType,
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

export const indexAccessType = someType;
export const indexedAccessType = someType;

export const declarationType = model => `{${resolveDeclaration(model)}}`;
export const functionType = model => `{${resolveSignature(model)}}`;

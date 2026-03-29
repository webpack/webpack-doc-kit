const union = (arr, sep = '|') =>
  arr?.length ? arr.map(resolve).join(sep) : 'unknown';

/**
 * Resolves a parameter list into a formatted string.
 * @param {Array} params - Array of parameter reflections.
 * @returns {string} Formatted parameter string.
 */
const resolveParams = (params = []) =>
  params
    .map(p => {
      const rest = p.flags?.isRest ? '...' : '';
      const opt = p.flags?.isOptional ? '?' : '';
      return `${rest}${p.name}${opt}: ${resolve(p.type)}`;
    })
    .join(', ');

/**
 * Resolves a TypeDoc type model into a readable type string.
 * @param {import('typedoc').SomeType} type - The TypeDoc type model.
 * @returns {string} A human-readable type string.
 */
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
      return resolveReflection(type);

    case 'inferred':
    case 'unknown':
      return 'unknown';

    default:
      return type.name ?? 'unknown';
  }
};

/**
 * Resolves a reflection type into a readable string by inspecting
 * its declaration's signatures (functions) or children (object shapes).
 * @param {import('typedoc').ReflectionType} type - The reflection type.
 * @returns {string} A human-readable representation.
 */
const resolveReflection = type => {
  const decl = type.declaration;
  if (!decl) return 'object';

  // Function signature: (...params) => ReturnType
  if (decl.signatures?.length) {
    const sig = decl.signatures[0];
    const params = resolveParams(sig.parameters);
    const ret = resolve(sig.type);
    return `(${params}) => ${ret}`;
  }

  // Object shape with known properties: { key: Type; ... }
  if (decl.children?.length) {
    // Limit displayed properties to avoid extremely long lines
    const maxProps = 5;
    const props = decl.children.slice(0, maxProps).map(child => {
      const opt = child.flags?.isOptional ? '?' : '';
      return `${child.name}${opt}: ${resolve(child.type)}`;
    });

    if (decl.children.length > maxProps) {
      props.push('...');
    }

    return `{ ${props.join('; ')} }`;
  }

  // Index signature: { [key: KeyType]: ValueType }
  if (decl.indexSignatures?.length) {
    const idx = decl.indexSignatures[0];
    const key = idx.parameters?.[0];
    const keyStr = key ? `${key.name}: ${resolve(key.type)}` : 'key: string';
    return `{ [${keyStr}]: ${resolve(idx.type)} }`;
  }
  // TypeLiteral (kind 65536) with no members = empty object literal `{}`
  // This is genuinely an empty type in the source TypeScript (e.g., `options = {}`)
  // Display as 'Object' to distinguish from unknown cases
  return 'Object';
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
  tupleType = someType,
  typeOperatorType = someType,
  unionType = someType,
  unknownType = someType;

/**
 * Resolves a reflection type (used as a partial override).
 * Inspects the model to determine if it's a function or object shape.
 * @param {import('typedoc').ReflectionType} model - The reflection type model.
 * @returns {string} Formatted type string in doc-kit notation.
 */
export const reflectionType = model => `{${resolveReflection(model)}}`;

/**
 * Resolves a declaration type by inspecting its signatures, children, and
 * index signatures instead of returning a hardcoded '{object}'.
 * @param {import('typedoc').DeclarationReflection} model - The declaration reflection.
 * @returns {string} Formatted type string in doc-kit notation.
 */
export const declarationType = model => {
  if (!model) return '{object}';

  // Has function signatures: render as function type
  if (model.signatures?.length) {
    const parts = model.signatures.map(sig => {
      const params = resolveParams(sig.parameters);
      const ret = resolve(sig.type);
      return `(${params}) => ${ret}`;
    });
    return `{${parts.join(' | ')}}`;
  }

  // Has children: render as object with property types
  if (model.children?.length) {
    const maxProps = 5;
    const props = model.children.slice(0, maxProps).map(child => {
      const opt = child.flags?.isOptional ? '?' : '';
      return `${child.name}${opt}: ${resolve(child.type)}`;
    });

    if (model.children.length > maxProps) {
      props.push('...');
    }

    return `{${props.join('; ')}}`;
  }

  // Has index signatures
  if (model.indexSignatures?.length) {
    const idx = model.indexSignatures[0];
    const key = idx.parameters?.[0];
    const keyStr = key ? `${key.name}: ${resolve(key.type)}` : 'key: string';
    return `{[${keyStr}]: ${resolve(idx.type)}}`;
  }

  return '{object}';
};

/**
 * Resolves a function type by rendering actual parameter names, types,
 * and return types from the SignatureReflection array.
 * @param {import('typedoc').SignatureReflection[]} model - Array of signatures.
 * @returns {string} Formatted function type string in doc-kit notation.
 */
export const functionType = (model = []) => {
  if (!model.length) return '{Function}';

  const parts = model.map(sig => {
    const params = resolveParams(sig.parameters);
    const ret = resolve(sig.type);
    return `(${params}) => ${ret}`;
  });

  return `{${parts.join(' | ')}}`;
};

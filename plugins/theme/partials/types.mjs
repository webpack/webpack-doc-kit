const resolve = (type) => {
  if (!type) return "unknown";

  switch (type.type) {
    case "intrinsic":
      return type.name;

    case "reference":
      if (type.typeArguments?.length) {
        return `${type.name}<${type.typeArguments.map(resolve).join(", ")}>`;
      }
      return type.name;

    case "literal":
      return typeof type.value === "string"
        ? JSON.stringify(type.value)
        : String(type.value);

    case "array":
      return `${resolve(type.elementType)}[]`;

    case "tuple":
      return `[${type.elements?.map(resolve).join(", ") ?? ""}]`;

    case "named-tuple-member":
      return type.name
        ? `${type.name}${type.isOptional ? "?" : ""}: ${resolve(type.element)}`
        : resolve(type.element);

    case "union":
      return type.types?.map(resolve).join(" | ") ?? "unknown";

    case "intersection":
      return type.types?.map(resolve).join(" & ") ?? "unknown";

    case "optional":
      return `${resolve(type.elementType)}?`;

    case "indexedAccess":
      return `${resolve(type.objectType)}[${resolve(type.indexType)}]`;

    case "query":
      return `typeof ${resolve(type.queryType)}`;

    case "typeOperator":
      return type.operator
        ? `${type.operator} ${resolve(type.target)}`
        : resolve(type.target);

    case "conditional":
      return `${resolve(type.checkType)} extends ${resolve(type.extendsType)} ? ${resolve(type.trueType)} : ${resolve(type.falseType)}`;

    case "reflection": {
      const decl = type.declaration;
      if (decl?.signatures?.length) {
        const sig = decl.signatures[0];
        const params = (sig.parameters ?? [])
          .map((p) => `${p.name}: ${resolve(p.type)}`)
          .join(", ");
        return `(${params}) => ${sig.type ? resolve(sig.type) : "void"}`;
      }
      if (decl?.children?.length) {
        const props = decl.children
          .map((c) => `${c.name}${c.flags?.isOptional ? "?" : ""}: ${resolve(c.type)}`)
          .join("; ");
        return `{ ${props} }`;
      }
      return "object";
    }

    case "predicate":
      return type.targetType
        ? `${type.name} is ${resolve(type.targetType)}`
        : `${type.name} is unknown`;

    case "rest":
      return `...${resolve(type.elementType)}`;

    case "inferred":
      return type.name ? `infer ${type.name}` : "unknown";

    case "template-literal":
    case "mapped":
      return "object";

    case "unknown":
      return type.name ?? "unknown";

    default:
      return type.name ?? "unknown";
  }
};

export const someType = (model) => `{${resolve(model)}}`;

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

export const declarationType = () => "{object}";
export const functionType = () => "{Function}";

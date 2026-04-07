import { resolveTypeLabel } from '../utils/types.mjs';

export const someType = model => `{${resolveTypeLabel(model)}}`;

// typedoc-plugin-markdown dispatches partials by TypeDoc type discriminant.
// This theme renders all types uniformly as a {Label} via someType().
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

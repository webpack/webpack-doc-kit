/**
 * Recursively visit every inline declaration embedded in a TypeDoc type tree.
 * Only `reflection` nodes produce a visitor call; structural types (array,
 * union, conditional, …) are traversed transparently.
 *
 * @param {import('typedoc').SomeType | undefined} type
 * @param {(declaration: import('typedoc').DeclarationReflection) => void} visitor
 */
export function visitTypeDeclarations(type, visitor) {
  if (!type) {
    return;
  }

  switch (type.type) {
    case 'reflection':
      if (type.declaration) {
        visitor(type.declaration);
      }
      return;

    case 'array':
      visitTypeDeclarations(type.elementType, visitor);
      return;

    case 'conditional':
      visitTypeDeclarations(type.checkType, visitor);
      visitTypeDeclarations(type.extendsType, visitor);
      visitTypeDeclarations(type.trueType, visitor);
      visitTypeDeclarations(type.falseType, visitor);
      return;

    case 'indexedAccess':
      visitTypeDeclarations(type.objectType, visitor);
      visitTypeDeclarations(type.indexType, visitor);
      return;

    case 'intersection':
    case 'union':
      type.types?.forEach(innerType =>
        visitTypeDeclarations(innerType, visitor)
      );
      return;

    case 'named-tuple-member':
      visitTypeDeclarations(type.element, visitor);
      return;

    case 'optional':
      visitTypeDeclarations(type.elementType, visitor);
      return;

    case 'query':
      visitTypeDeclarations(type.queryType, visitor);
      return;

    case 'reference':
      type.typeArguments?.forEach(innerType =>
        visitTypeDeclarations(innerType, visitor)
      );
      return;

    case 'tuple':
      type.elements?.forEach(innerType =>
        visitTypeDeclarations(innerType, visitor)
      );
      return;

    case 'typeOperator':
      visitTypeDeclarations(type.target, visitor);
      return;

    default:
      return;
  }
}

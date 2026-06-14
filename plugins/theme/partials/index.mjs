import { getTypePageTitle, isTypePage } from '../../processor/metadata.mjs';
import {
  ArrayType,
  i18n,
  IntersectionType,
  ReflectionKind,
  ReflectionType,
  UnionType,
} from 'typedoc';
import {
  callableSignatures,
  getConstructorTitle,
  getMemberTitle,
  getPageTitle,
} from '../../shared/titles.mjs';
import * as typePartials from './types.mjs';

const heading = (level, title) => `${'#'.repeat(level)} ${title}`;

// These partials deliberately trade TypeDoc's default blockquote signatures for
// doc-kit headings and typed lists. The router uses the same title helpers, so
// rendered anchors and type-map URLs stay in sync.
const inheritedComment = (model, options) =>
  options.multipleSignatures
    ? model.comment
    : model.comment || model.parent?.comment;

const declarationType = model =>
  model.type ??
  model.getSignature?.type ??
  model.setSignature?.parameters?.[0]?.type;

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default ctx => {
  return {
    ...ctx.partials,
    ...typePartials,

    pageTitle() {
      const model = ctx.page.model;
      const typePageTitle = getTypePageTitle(model);
      if (typePageTitle) return typePageTitle;
      if (model.getFullName) return getPageTitle(model);
      return ctx.partials.pageTitle();
    },

    signature(model, options) {
      const comment = inheritedComment(model, options);
      const stability = ctx.helpers.stabilityBlockquote(comment);

      return [
        stability,
        stability && '',
        model.parameters?.length &&
          ctx.partials.parametersList(model.parameters, {
            headingLevel: options.headingLevel,
          }),
        ctx.helpers.typedListItem({
          label: 'Returns',
          type: model.type ?? 'void',
          comment: model.comment?.getTag('@returns'),
        }),
        '',
        comment &&
          ctx.partials.comment(comment, {
            headingLevel: options.headingLevel,
            showTags: false,
          }),
        ctx.helpers.examples(comment, options),
      ]
        .filter(x => typeof x === 'string' || Boolean(x))
        .join('\n');
    },

    declaration(model, options) {
      const opts = { headingLevel: 2, nested: false, ...options };
      const signatures = callableSignatures(model);

      if (signatures.length) {
        return signatures
          .map(signature =>
            ctx.partials.signature(signature, {
              headingLevel: opts.headingLevel,
              multipleSignatures: signatures.length > 1,
            })
          )
          .join('\n\n');
      }

      const comment = model.comment;
      const stability = ctx.helpers.stabilityBlockquote(comment);
      const md = [
        stability,
        stability && '',
        ctx.partials.declarationTitle(model),
      ];

      if (comment) {
        md.push(
          '',
          ctx.partials.comment(comment, {
            headingLevel: opts.headingLevel,
            showSummary: true,
            showTags: false,
          })
        );
      }

      let typeDeclaration = model.type?.declaration;
      if (
        model.type instanceof ArrayType &&
        model.type.elementType instanceof ReflectionType
      ) {
        typeDeclaration = model.type.elementType.declaration;
      }

      if (model.type instanceof IntersectionType) {
        for (const intersectionType of model.type.types ?? []) {
          if (
            intersectionType instanceof ReflectionType &&
            intersectionType.declaration.children &&
            !intersectionType.declaration.signatures
          ) {
            md.push(heading(opts.headingLevel, i18n.theme_type_declaration()));
            md.push(
              ctx.partials.typeDeclaration(intersectionType.declaration, {
                headingLevel: opts.headingLevel,
              })
            );
          }
        }
      }

      const hasUnionDetails =
        model.type instanceof UnionType &&
        ctx.helpers.hasUsefulTypeDetails(model.type);
      if (hasUnionDetails) {
        md.push(heading(opts.headingLevel, i18n.theme_union_members()));
        md.push(ctx.partials.typeDeclarationUnionContainer(model, opts));
      } else if (typeDeclaration) {
        const useHeading =
          typeDeclaration.children?.length &&
          (model.kind !== ReflectionKind.Property ||
            ctx.helpers.useTableFormat('properties'));
        if (useHeading) {
          md.push(heading(opts.headingLevel, i18n.theme_type_declaration()));
        }
        md.push(
          ctx.partials.typeDeclarationContainer(model, typeDeclaration, opts)
        );
      }

      md.push(ctx.helpers.examples(comment, opts));
      md.push(
        ctx.partials.inheritance(model, { headingLevel: opts.headingLevel })
      );

      return md.filter(x => typeof x === 'string' || Boolean(x)).join('\n\n');
    },

    declarationTitle(model) {
      return ctx.helpers.typedListItem({
        label: 'Type',
        type: declarationType(model) ?? 'unknown',
      });
    },

    indexSignature(model) {
      const params = model.parameters ?? [];
      const name = params.length
        ? `[${params
            .map(param => `${param.name}: ${ctx.partials.someType(param.type)}`)
            .join(', ')}]`
        : 'index';

      return ctx.helpers.typedListItem({
        name,
        type: model.type,
        comment: model.comment,
      });
    },

    memberWithGroups(model, options) {
      const md = [];
      const stability = ctx.helpers.stabilityBlockquote(model.comment);

      if (stability) md.push(stability);

      if (model.kind === ReflectionKind.TypeAlias) {
        md.push(ctx.partials.declarationTitle(model));
      }

      if (model.comment) {
        md.push(
          ctx.partials.comment(model.comment, {
            headingLevel: options.headingLevel,
            showTags: false,
          })
        );
      }

      if (model.typeHierarchy?.next && !model.typeHierarchy.isTarget) {
        md.push(
          ctx.helpers.typedListItem({
            label: 'Extends',
            type: model.typeHierarchy.types[0],
          })
        );
      }

      if (model.typeParameters?.length) {
        md.push(
          heading(
            options.headingLevel,
            ReflectionKind.pluralString(ReflectionKind.TypeParameter)
          )
        );
        md.push(
          ctx.partials.typeParametersList(model.typeParameters, {
            headingLevel: options.headingLevel,
          })
        );
      }

      if (model.implementedTypes?.length) {
        md.push(heading(options.headingLevel, i18n.theme_implements()));
        md.push(
          model.implementedTypes
            .map(type => `* ${ctx.partials.someType(type)}`)
            .join('\n')
        );
      }

      if (model.kind === ReflectionKind.Class && model.categories?.length) {
        model.groups
          ?.filter(group => group.title === i18n.kind_plural_constructor())
          .forEach(group => {
            md.push(
              heading(options.headingLevel, i18n.kind_plural_constructor())
            );
            group.children.forEach(child => {
              md.push(
                ctx.partials.constructor(child, {
                  headingLevel: options.headingLevel + 1,
                })
              );
            });
          });
      }

      if (model.signatures?.length) {
        const multipleSignatures = model.signatures.length > 1;
        model.signatures.forEach(signature => {
          if (multipleSignatures) {
            md.push(heading(options.headingLevel, i18n.kind_call_signature()));
          }
          md.push(
            ctx.partials.signature(signature, {
              headingLevel: multipleSignatures
                ? options.headingLevel + 1
                : options.headingLevel,
              multipleSignatures,
            })
          );
        });
      }

      if (model.indexSignatures?.length) {
        md.push(heading(options.headingLevel, i18n.theme_indexable()));
        model.indexSignatures.forEach(indexSignature => {
          md.push(
            ctx.partials.indexSignature(indexSignature, {
              headingLevel: options.headingLevel + 1,
            })
          );
        });
      }

      md.push(ctx.partials.body(model, { headingLevel: options.headingLevel }));
      return md.filter(x => typeof x === 'string' || Boolean(x)).join('\n\n');
    },

    constructor(model, options) {
      const md = [];
      const heading = '#'.repeat(options.headingLevel);

      model.signatures?.forEach(signature => {
        md.push(`${heading} ${getConstructorTitle(model, signature)}`);
        md.push(
          ctx.partials.signature(signature, {
            headingLevel: options.headingLevel + 1,
            hideTypeParameters: true,
          })
        );
      });
      return md.join('\n\n');
    },

    memberTitle: model =>
      getMemberTitle(model, { local: isTypePage(ctx.page.model) }),
    parametersList: ctx.helpers.typedList,
    typeDeclarationList: ctx.helpers.typedList,
    propertiesTable: ctx.helpers.typedList,

    typeParametersList: () => '',
  };
};

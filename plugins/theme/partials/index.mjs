import { ReflectionKind } from 'typedoc';
import * as typePartials from './types.mjs';
import { getMemberTitle } from '../utils/members.mjs';
import { formatHeading, formatParams } from '../utils/formatting.mjs';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default ctx => ({
  ...ctx.partials,
  ...typePartials,

  declarationTitle(model) {
    const declarationType = ctx.helpers.getDeclarationType(model);
    const type =
      declarationType ||
      (model.kind === ReflectionKind.TypeAlias ? model.type : undefined);
    const description =
      model.flags?.isOptional && !model.defaultValue ? 'Optional.' : undefined;

    if (!type && !description && !model.defaultValue) {
      return '';
    }

    return ctx.helpers.typedListItem({
      label: 'Type',
      type,
      description,
      defaultValue: model.defaultValue,
    });
  },

  signature(model, options) {
    const comment = options.multipleSignatures
      ? model.comment
      : model.comment || model.parent?.comment;
    const stability = ctx.helpers.stabilityBlockquote(comment);

    return [
      stability,
      stability && '',
      model.typeParameters?.length &&
        (() => {
          const content = ctx.partials.typeParametersList(
            model.typeParameters,
            {
              headingLevel: options.headingLevel,
            }
          );

          return content?.trim()
            ? `${formatHeading(options.headingLevel, ReflectionKind.pluralString(ReflectionKind.TypeParameter))}\n\n${content}`
            : '';
        })(),
      model.parameters?.length &&
        `${formatHeading(options.headingLevel, ReflectionKind.pluralString(ReflectionKind.Parameter))}\n\n${ctx.partials.parametersList(
          model.parameters,
          {
            headingLevel: options.headingLevel,
          }
        )}`,
      ctx.helpers.returnsItem(model),
      comment &&
        ctx.partials.comment(comment, {
          headingLevel: options.headingLevel,
          showTags: false,
        }),
      ctx.helpers.examples(comment, options),
    ]
      .filter(block =>
        typeof block === 'string' ? block.trim() : Boolean(block)
      )
      .join('\n\n');
  },

  constructor(model, options) {
    const md = [];
    const headingPrefix = '#'.repeat(options.headingLevel);

    model.signatures?.forEach(signature => {
      const paramsString = formatParams(signature.parameters ?? []);

      md.push(`${headingPrefix} \`new ${model.parent.name}(${paramsString})\``);
      md.push(
        ctx.partials.signature(signature, {
          headingLevel: options.headingLevel + 1,
        })
      );
    });

    return md.join('\n\n');
  },

  hierarchy(model) {
    if (model.next && !model.isTarget) {
      const parent = model.types
        .map(hierarchyType =>
          ctx.helpers.getHierarchyType(hierarchyType, {
            isTarget: false,
          })
        )
        .join('.');

      return ctx.helpers.typedListItem({
        label: 'Extends',
        type: parent,
      });
    }

    return '';
  },

  // Suppress the base theme's type-parameter table; the signature partial renders these inline.
  typeParametersList: () => '',

  memberTitle: getMemberTitle,

  parametersList: ctx.helpers.typedList,
  typeDeclarationList: ctx.helpers.typedList,
  propertiesTable: ctx.helpers.typedList,
});

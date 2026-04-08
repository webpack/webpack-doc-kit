import { ReflectionKind } from 'typedoc';
import * as typePartials from './types.mjs';

const KIND_PREFIX = {
  [ReflectionKind.Class]: 'Class',
  [ReflectionKind.Interface]: 'Interface',
  [ReflectionKind.Enum]: 'Enum',
  [ReflectionKind.TypeAlias]: 'Type',
  [ReflectionKind.Namespace]: 'Namespace',
  [ReflectionKind.Accessor]: 'Accessor',
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: 'Static method',
};

const formatParams = (params = []) =>
  params
    .map(({ name, flags }, i) =>
      flags?.isOptional
        ? i
          ? `[, ${name}]`
          : `[${name}]`
        : i
          ? `, ${name}`
          : name
    )
    .join('');

export const getMemberPrefix = model => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : '';
};

export const getMemberTitle = model => {
  const prefix = getMemberPrefix(model);
  const params = model.signatures?.[0]?.parameters;

  if (!params) {
    return `${prefix}\`${model.name}\``;
  }

  return `${prefix}\`${model.name}(${formatParams(params)})\``;
};

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default ctx => ({
  ...ctx.partials,
  ...typePartials,

  signature(model, options) {
    const comment = options.multipleSignatures
      ? model.comment
      : model.comment || model.parent?.comment;

    const stability = ctx.helpers.stabilityBlockquote(comment);

    return [
      stability,
      stability && '',
      model.typeParameters?.length &&
        ctx.partials.typeParametersList(model.typeParameters, {
          headingLevel: options.headingLevel,
        }),
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

  constructor(model, options) {
    const md = [];
    const heading = '#'.repeat(options.headingLevel);

    model.signatures?.forEach(signature => {
      const paramsString = formatParams(signature.parameters ?? []);

      md.push(`${heading} \`new ${model.parent.name}(${paramsString})\``);
      md.push(
        ctx.partials.signature(signature, {
          headingLevel: options.headingLevel + 1,
        })
      );
    });
    return md.join('\n\n');
  },

  typeParametersList: () => '',

  memberTitle: getMemberTitle,
  parametersList: ctx.helpers.typedList,
  typeDeclarationList: ctx.helpers.typedList,
  propertiesTable: ctx.helpers.typedList,
});

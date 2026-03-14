/**
 * @typedef {object} TypedListEntry
 * @property {string} [label]
 * @property {string} [name]
 * @property {import("typedoc").SomeType | string} [type]
 * @property {import("typedoc").Comment | import("typedoc").CommentTag} [comment]
 */

const formatStability = (ctx, level, tag) => {
  const message = tag.content?.length
    ? ctx.helpers.getCommentParts(tag.content).trim()
    : '';
  return message
    ? `> Stability: ${level}: ${message}`
    : `> Stability: ${level}`;
};

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['helpers']}
 */
export default ctx => ({
  ...ctx.helpers,

  typedListItem({ label, name, type, comment }) {
    const namePart = label ? ` ${label}:` : name ? ` \`${name}\`` : '';

    const typePart = type
      ? ` ${typeof type === 'string' ? type : ctx.partials.someType(type)}`
      : '';

    const descPart = comment
      ? ` ${ctx.helpers.getCommentParts(comment.summary ?? comment.content)}`
      : '';

    return `*${namePart}${typePart}${descPart}`;
  },

  typedList(entries) {
    return entries.map(ctx.helpers.typedListItem).join('\n');
  },

  examples(comment, { headingLevel }) {
    const examples =
      comment?.blockTags?.filter(t => t.tag === '@example') ?? [];
    if (!examples.length) return null;

    const prefix = '#'.repeat(headingLevel + 1);
    const single = examples.length === 1;
    return examples
      .map((tag, i) => {
        const body = ctx.helpers.getCommentParts(tag.content).trim();
        return (
          body && `${prefix} Example${single ? '' : ` ${i + 1}`}\n\n${body}`
        );
      })
      .filter(Boolean)
      .join('\n\n');
  },

  stabilityBlockquote(comment) {
    if (!comment) return null;

    const deprecated = comment.blockTags?.find(t => t.tag === '@deprecated');
    if (deprecated) return formatStability(ctx, '0 - Deprecated', deprecated);

    if (
      comment.modifierTags?.has('@experimental') ||
      comment.modifierTags?.has('@beta')
    ) {
      return '> Stability: 1 - Experimental';
    }

    const legacy = comment.blockTags?.find(t => t.tag === '@legacy');
    if (legacy) return formatStability(ctx, '3 - Legacy', legacy);

    return null;
  },
});

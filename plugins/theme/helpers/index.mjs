import {
  formatTypedListNameSegment,
  formatStability,
} from '../utils/formatting.mjs';
import { VOID_TYPE_LABEL, TYPE_LABEL, INDENT_UNIT } from '../../constants.mjs';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['helpers']}
 */
export default ctx => ({
  ...ctx.helpers,

  /**
   * Produce a single `* Returns: {Type}` bullet for a signature's return type.
   * Falls back to `void` when the signature has no explicit return type.
   */
  returnsItem(sig, depth = 0) {
    return ctx.helpers.typedListItem(
      {
        label: 'Returns',
        type: sig.type ?? VOID_TYPE_LABEL,
        comment: sig.comment?.getTag('@returns'),
      },
      depth
    );
  },

  /**
   * Expand a reflection declaration (function or object) into a flat array of
   * typed-list strings at the given indentation depth.  Called by
   * `typedListItem` when a parameter's type is a reflection.
   */
  innerTypedList(declaration, depth) {
    // Object literal
    if (declaration.children?.length)
      return declaration.children.map(child =>
        ctx.helpers.typedListItem(child, depth)
      );

    // Callable
    if (declaration.signatures?.length)
      return declaration.signatures.flatMap(sig => [
        ...(sig.parameters ?? []).map(param =>
          ctx.helpers.typedListItem(param, depth)
        ),
        ctx.helpers.returnsItem(sig, depth),
      ]);

    return [];
  },

  /**
   * Render one entry as a markdown list item:
   *
   *   `* \`name?\` {Type} Description text.`
   *
   * When the entry's type is a `reflection` (function / object literal), the
   * item is always followed by an indented sub-list produced by
   * `innerTypedList`.  This is necessary because the inline type label
   * (`{Function}` / `{object}`) conveys no signature detail on its own.
   *
   * @param {TypedListEntry} entry
   * @param {number} depth  Nesting depth (controls leading indentation)
   * @returns {string}
   */
  typedListItem(
    { label, name, type, comment, description, defaultValue, flags },
    depth = 0
  ) {
    const indent = INDENT_UNIT.repeat(depth);

    // Name segment: label wins over name; name carries rest/optional modifiers
    const namePart = formatTypedListNameSegment(label, name, flags);

    // Type segment: TypeDoc type objects go through someType(); plain strings
    // (e.g. the 'void' fallback in returnsItem) are used as-is
    const typePart = type
      ? ` ${typeof type === 'string' ? type : ctx.partials.someType(type)}`
      : '';

    // Description segment: handles both Comment and CommentTag shapes
    const descPart = comment
      ? ` ${ctx.helpers.getCommentParts(comment.summary ?? comment.content).trim()}`
      : description
        ? ` ${description}`
        : '';
    const defaultPart =
      defaultValue &&
      defaultValue !== '...' &&
      defaultValue !== name &&
      defaultValue !== 'undefined'
        ? ` **Default:** \`${defaultValue}\`.`
        : '';

    const line = `${indent}*${namePart}${typePart}${descPart}${defaultPart}`;

    // Reflection types (`Function`, `object`) carry no inline signature detail,
    // so always expand them into a sub-list showing the full shape.
    if (
      type &&
      typeof type !== 'string' &&
      type.type === 'reflection' &&
      label !== TYPE_LABEL
    ) {
      const decl = type.declaration;
      if (decl) {
        const subItems = ctx.helpers.innerTypedList(decl, depth + 1);
        if (subItems.length) return [line, ...subItems].join('\n');
      }
    }

    return line;
  },

  /** Render an array of entries as a newline-joined list. */
  typedList(entries) {
    return entries.map(entry => ctx.helpers.typedListItem(entry)).join('\n');
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

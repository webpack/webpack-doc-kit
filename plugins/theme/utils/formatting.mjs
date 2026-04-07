import { MAX_HEADING_LEVEL } from '../../constants.mjs';

export const formatHeading = (level, text) =>
  `${'#'.repeat(Math.min(level, MAX_HEADING_LEVEL))} ${text}`;
export const heading = formatHeading;

/**
 * @typedef {object} TypedListEntry
 * @property {string} [label]
 * @property {string} [name]
 * @property {import("typedoc").SomeType | string} [type]
 * @property {import("typedoc").Comment | import("typedoc").CommentTag} [comment]
 * @property {string} [description]
 * @property {string} [defaultValue]
 * @property {import("typedoc").ReflectionFlags} [flags]
 */

export const formatStability = (ctx, level, tag) => {
  const message = tag.content?.length
    ? ctx.helpers.getCommentParts(tag.content).trim()
    : '';
  return message
    ? `> Stability: ${level}: ${message}`
    : `> Stability: ${level}`;
};

/**
 * Build the name segment of a typed-list bullet:
 *  - A `label` (e.g. "Returns") becomes ` Returns:`
 *  - A parameter `name` becomes ` \`name\`` with optional `?` / `...` prefix
 *
 * @param {string|undefined} label
 * @param {string|undefined} name
 * @param {import('typedoc').ReflectionFlags|undefined} flags
 * @returns {string}
 */
export const formatTypedListNameSegment = (label, name, flags) => {
  if (label) return ` ${label}:`;
  if (!name) return '';
  const rest = flags?.isRest ? '...' : '';
  return ` \`${rest}${name}\``;
};

/**
 * @param {Array<import('typedoc').ParameterReflection>} [params=[]]
 */
export function formatParams(params = []) {
  return params
    .map(({ name, flags }, index) =>
      flags?.isOptional
        ? index
          ? `[, ${name}]`
          : `[${name}]`
        : index
          ? `, ${name}`
          : name
    )
    .join('');
}

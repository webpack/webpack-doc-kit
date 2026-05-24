/**
 * @typedef {object} SourceMetadata
 * @property {string} sourcePath Absolute source file path.
 * @property {string} sourceRelativePath Path relative to webpack/lib.
 * @property {string} fileBase Source file name without extension.
 * @property {string | undefined} anchorName Preferred page anchor for members
 * whose public name differs from the source file name.
 * @property {string | undefined} publicPath Public webpack export path.
 */

/**
 * @typedef {object} TypePageMetadata
 * @property {string} baseName Router base name for the synthetic page.
 * @property {string} title Rendered page title.
 */

const sourceMetadata = new WeakMap();
const typePageMetadata = new WeakMap();
const publicNames = new WeakMap();

/**
 * Attach source-file metadata discovered from webpack/lib to a reflection.
 *
 * @param {import('typedoc').Reflection} reflection
 * @param {SourceMetadata} metadata
 */
export const setSourceMetadata = (reflection, metadata) => {
  sourceMetadata.set(reflection, metadata);
};

/**
 * @param {import('typedoc').Reflection} reflection
 * @returns {SourceMetadata | undefined}
 */
export const getSourceMetadata = reflection => sourceMetadata.get(reflection);

/**
 * Synthetic type pages are not TypeDoc source declarations, so their routing
 * and title metadata lives beside other processor-owned overlays.
 *
 * @param {import('typedoc').Reflection} reflection
 * @param {TypePageMetadata} metadata
 */
export const setTypePageMetadata = (reflection, metadata) => {
  typePageMetadata.set(reflection, metadata);
};

/**
 * @param {import('typedoc').Reflection} reflection
 * @returns {string | undefined}
 */
export const getTypePageTitle = reflection =>
  typePageMetadata.get(reflection)?.title;

/** @param {import('typedoc').Reflection} reflection */
export const isTypePage = reflection => typePageMetadata.has(reflection);

/**
 * Some declaration-file shapes need processor-owned public names that differ
 * from TypeDoc's internal reflection names.
 *
 * @param {import('typedoc').Reflection} reflection
 * @param {string} name
 */
export const setPublicName = (reflection, name) => {
  publicNames.set(reflection, name);
};

/**
 * @param {import('typedoc').Reflection} reflection
 * @returns {string | undefined}
 */
export const getPublicName = reflection => publicNames.get(reflection);

// Cleanup for Markdown fetched from other repos (READMEs, governance docs).

const LEADING_HTML = /^\s*<div[\s\S]*?<\/div>\n*/i;
const BADGES =
  /^(\[!\[[^\]]*\](?:\[[^\]]*\]|\([^)]*\))\]\s*(?:\[[^\]]*\]|\([^)]*\))\s*)+$/gm;
const EXTRA_BLANK_LINES = /\n{3,}/g;
const BOILERPLATE = /^#{1,6}\s*(?:Contributing|License)\b.*$/im;
const RELATIVE_LINK =
  /(\]\(|\]:\s*)(?![a-z][\w+.-]*:)(?!\/)(?!#)(?:\.{1,2}\/)?([^)\s#]+)/g;

// Drop the leading <div> logo banner.
export const stripLeadingHtml = content => content.replace(LEADING_HTML, '');

// Drop badge-only lines.
export const stripBadges = content =>
  content.replace(BADGES, '').replace(EXTRA_BLANK_LINES, '\n\n');

// Cut the trailing Contributing/License sections (and anything after) off the end.
export const stripBoilerplate = content => {
  const match = content.match(BOILERPLATE);
  return match ? `${content.slice(0, match.index).trimEnd()}\n` : content;
};

// Rewrite relative links via resolve(); skips full URLs, root-relative and anchors.
export const rewriteRelativeLinks = (content, resolve) =>
  content.replace(RELATIVE_LINK, (match, prefix, target) => {
    const url = resolve(target);
    return url ? `${prefix}${url}` : match;
  });

const STEPS = [stripLeadingHtml, stripBadges, stripBoilerplate];

// Run the full cleanup pipeline.
const cleanupMarkdown = (content, resolve) => {
  const result = STEPS.reduce((acc, step) => step(acc), content);
  return resolve ? rewriteRelativeLinks(result, resolve) : result;
};

export default cleanupMarkdown;

// Cleanup for Markdown fetched from other repos (READMEs, governance docs).

// Drop the leading <div> logo banner.
export const stripLeadingHtml = content =>
  content.replace(/^\s*<div[\s\S]*?<\/div>\n*/i, '');

// Drop badge-only lines.
export const stripBadges = content =>
  content
    .replace(
      /^(\[!\[[^\]]*\](?:\[[^\]]*\]|\([^)]*\))\]\s*(?:\[[^\]]*\]|\([^)]*\))\s*)+$/gm,
      ''
    )
    .replace(/\n{3,}/g, '\n\n');

// Cut the trailing Contributing/License sections (and anything after) off the end.
export const stripBoilerplate = content => {
  const match = content.match(/^#{1,6}\s*(?:Contributing|License)\b.*$/im);
  return match ? `${content.slice(0, match.index).trimEnd()}\n` : content;
};

// Rewrite relative links via resolve(); skips full URLs, root-relative and anchors.
export const rewriteRelativeLinks = (content, resolve) =>
  content.replace(
    /(\]\(|\]:\s*)(?![a-z][\w+.-]*:)(?!\/)(?!#)(?:\.{1,2}\/)?([^)\s#]+)/g,
    (match, prefix, target) => {
      const url = resolve(target);
      return url ? `${prefix}${url}` : match;
    }
  );

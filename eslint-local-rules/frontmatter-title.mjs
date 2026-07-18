import matter from 'gray-matter';

export default {
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: {
      mismatch: 'Frontmatter title "{{fm}}" does not match H1 "{{h1}}".',
      missingFrontmatterTitle: 'Missing frontmatter title.',
      missingH1Title: 'Missing H1 title.',
    },
  },

  create(context) {
    const { sourceCode } = context;
    let h1Node = null;

    return {
      heading(node) {
        if (node.depth === 1 && !h1Node) h1Node = node;
      },

      'root:exit'() {
        const fmTitle = matter(sourceCode.text).data.title;
        const h1Title = h1Node
          ? sourceCode.getText(h1Node).replace(/^#\s+/, '').trim()
          : null;

        if (!fmTitle && !h1Title) return;

        if (fmTitle && h1Title && fmTitle !== h1Title) {
          context.report({
            node: h1Node,
            messageId: 'mismatch',
            data: { fm: fmTitle, h1: h1Title },
            fix(fixer) {
              const match = /^title:.*$/m.exec(sourceCode.text);
              if (match) {
                return fixer.replaceTextRange(
                  [match.index, match.index + match[0].length],
                  `title: ${h1Title}`
                );
              }
            },
          });
        } else if (!fmTitle && h1Title) {
          context.report({
            node: h1Node,
            messageId: 'missingFrontmatterTitle',
            fix(fixer) {
              const hasFrontmatter = sourceCode.text.startsWith('---');
              if (hasFrontmatter) {
                const match = /^---\r?\n/.exec(sourceCode.text);
                if (match) {
                  return fixer.insertTextAfterRange(
                    [0, match[0].length],
                    `title: ${h1Title}\n`
                  );
                }
              } else {
                return fixer.insertTextBeforeRange(
                  [0, 0],
                  `---\ntitle: ${h1Title}\n---\n\n`
                );
              }
            },
          });
        } else if (!h1Title) {
          // Missing H1, should put it manually.
          context.report({
            loc: { line: 1, column: 0 },
            messageId: 'missingH1Title',
          });
        }
      },
    };
  },
};

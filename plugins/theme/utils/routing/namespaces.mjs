import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TYPES_DTS_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  '..',
  '..',
  'webpack',
  'types.d.ts'
);

/**
 * Parses a `types.d.ts` source string and returns a map of namespace name →
 * array of exported member names.
 *
 * @param {string} source
 * @returns {Map<string, string[]>}
 */
function parseNamespaceExports(source) {
  const namespaceExports = new Map();
  const namespacePattern = /export namespace (\w+)\s*\{/g;
  let match;

  while ((match = namespacePattern.exec(source))) {
    const [, name] = match;
    let depth = 1;
    let index = namespacePattern.lastIndex;

    while (depth > 0 && index < source.length) {
      const char = source[index];

      if (char === '{') {
        depth += 1;
      } else if (char === '}') {
        depth -= 1;
      }

      index += 1;
    }

    const block = source.slice(namespacePattern.lastIndex, index - 1);
    const members = new Set();

    for (const exportMatch of block.matchAll(/export\s+\{([^}]+)\};/g)) {
      exportMatch[1]
        .split(',')
        .map(part => part.trim())
        .filter(Boolean)
        .forEach(part => members.add(part.replace(/\s+as\s+.+$/, '')));
    }

    for (const innerMatch of block.matchAll(
      /export\s+(?:let|const|function|class|interface|type|enum|namespace)\s+([A-Za-z0-9_$]+)/g
    )) {
      members.add(innerMatch[1]);
    }

    namespaceExports.set(name, [...members]);
  }

  return namespaceExports;
}

/** Namespace → member names, parsed eagerly from webpack's types.d.ts. */
export const NAMESPACE_EXPORTS = parseNamespaceExports(
  readFileSync(TYPES_DTS_PATH, 'utf8')
);

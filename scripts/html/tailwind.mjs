import { dirname } from 'node:path';
import { compile } from '@tailwindcss/node';
import { readFileSync } from 'node:fs';

export default () => {
  const cache = new Map();
  return async id => {
    let css = cache.get(id);
    if (css) return css;

    // This has to be synchronous, since lightningcss,
    // at the moment, can only handle one file-read at
    // a time.
    const code = readFileSync(id, 'utf8');

    // Skip Tailwind compilation for node_modules, pass content through as-is
    if (/node_modules/.test(id)) {
      cache.set(id, code);
      return code;
    }

    const compiler = await compile(code, {
      base: dirname(id),
      onDependency: () => {},
    });
    css = compiler.build([]);
    cache.set(id, css);

    return css;
  };
};

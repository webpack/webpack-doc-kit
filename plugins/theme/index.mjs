import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown';
import helpers from './helpers/index.mjs';
import partials from './partials/index.mjs';

import { DocKitRouter } from './router.mjs';

export class DocKitTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new DocKitThemeContext(this, page, this.application.options);
  }
}

export class DocKitThemeContext extends MarkdownThemeContext {
  helpers = helpers(this);

  partials = partials(this);

  templates = {
    ...this.templates,
  };
}

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('doc-kit', DocKitTheme);
  app.renderer.defineRouter('doc-kit', DocKitRouter);
}

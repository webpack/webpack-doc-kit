import { Application } from "typedoc";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { major } from "semver";

const webpackDir = join(import.meta.dirname, "webpack");

if (!existsSync(webpackDir)) {
  console.error(
    `[webpack-doc-kit] Missing sibling webpack checkout at ${webpackDir}\n` +
      `  git clone https://github.com/webpack/webpack.git ../webpack\n` +
      `  cd ../webpack && git checkout $(cat ../webpack-doc-kit/HEAD_COMMIT)`,
  );
  process.exit(1);
}

const { default: webpack } = await import("./webpack/package.json", {
  with: { type: "json" },
});

const app = await Application.bootstrapWithPlugins({
  entryPoints: [join(webpackDir, "types.d.ts")],
  out: `pages/v${major(webpack.version)}.x`,

  plugin: [
    "typedoc-plugin-markdown",
    "./plugins/processor.mjs",
    "./plugins/theme/index.mjs",
  ],
  theme: "doc-kit",

  hideGroupHeadings: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  disableSources: true,

  router: "module",
  entryFileName: "index",

  tsconfig: "tsconfig.json",
});

const project = await app.convert();

if (!project) {
  console.error("[webpack-doc-kit] TypeDoc failed to convert the project.");
  process.exit(1);
}

await app.generateOutputs(project);

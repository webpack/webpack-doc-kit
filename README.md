# webpack-doc-kit

Automated TypeScript API documentation generator for [webpack](https://github.com/webpack/webpack). Extracts type definitions from webpack's `types.d.ts` and produces Markdown and HTML documentation, deployed to GitHub Pages.

## How It Works

1. **TypeDoc** reads webpack's TypeScript type definitions
2. Custom plugins process the output (namespace merging, type mapping, themed rendering)
3. **@node-core/doc-kit** converts Markdown to HTML
4. GitHub Actions deploys the result to GitHub Pages

### Webpack Versions

Generation expects a `versions.json` file at the project root with the webpack release tags to generate, for example:

```json
["v5.1.0"]
```

Each tag is fetched from the webpack npm package and generated into `pages/api/v[Major].x`. Creating or updating `versions.json` is handled outside this project.

## Project Structure

```
├── scripts/
│   ├── prepare/              # Fetches every webpack release listed in versions.json
│   ├── markdown/             # TypeDoc → Markdown for a single webpack source path
│   ├── html/                 # doc-kit HTML generation
│   └── vercel/               # Vercel install/build entry points
├── plugins/
│   ├── processor/            # Namespace merging + type-map generation
│   └── theme/                # Custom doc-kit theme
├── versions.json             # Webpack release tags to generate
├── .github/workflows/
│   └── ci.yml                # Lint + format check
└── package.json
```

The pipeline is split into three stages: `prepare` fetches each webpack tag into `.cache/webpack/<version>/`, `markdown` is invoked once per source directory to emit Markdown under `pages/api/v<major>.x`, and `html` runs doc-kit over the result.

## Scripts

| Script                 | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run prep`         | Fetch every webpack tag in `versions.json` into `.cache/webpack/` |
| `npm run build:md`     | Generate Markdown for every prepared webpack source               |
| `npm run build:html`   | Convert Markdown to HTML                                          |
| `npm run build`        | Full pipeline: prepare → Markdown → HTML                          |
| `npm run lint`         | Run ESLint                                                        |
| `npm run format:check` | Check Prettier formatting                                         |

To generate Markdown for a single webpack source, invoke the processor directly:

```sh
node scripts/markdown/index.mjs .cache/webpack/v5.107.1
```

## Contributing

When making changes to documentation generation (plugins, `scripts/markdown/index.mjs`, `tsconfig.json`), ensure the docs can still be generated successfully. CI will verify this on every pull request.

## License

See the [webpack project](https://github.com/webpack/webpack) for license details.

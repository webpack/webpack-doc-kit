# webpack-doc-kit

Automated TypeScript API documentation generator for [webpack](https://github.com/webpack/webpack). Extracts type definitions from webpack's `types.d.ts` and produces Markdown and HTML documentation, deployed to GitHub Pages.

## How It Works

1. **TypeDoc** reads webpack's TypeScript type definitions
2. Custom plugins process the output (namespace merging, type mapping, themed rendering)
3. **@node-core/doc-kit** converts Markdown to HTML
4. GitHub Actions deploys the result to GitHub Pages

### Webpack Version Tracking

The `HEAD_COMMIT` file pins the exact webpack/webpack commit used for doc generation. A scheduled GitHub Action runs every 24 hours to:

1. Fetch the latest webpack `main` branch HEAD
2. Update `HEAD_COMMIT`
3. Regenerate documentation
4. Push the changes to this repository

This ensures documentation stays in sync with upstream webpack without manual intervention.

## Project Structure

```
├── generate-md.mjs          # TypeDoc entry point
├── plugins/
│   ├── processor.mjs         # Namespace merging + type-map generation
│   └── theme/                # Custom doc-kit theme
├── HEAD_COMMIT               # Pinned webpack commit SHA
├── .github/workflows/
│   ├── ci.yml                # Lint + doc generation check
│   ├── deploy.yml            # Build HTML + deploy to GitHub Pages
│   └── sync.yml              # Daily webpack sync
└── package.json
```

## Scripts

| Script                      | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| `npm run generate-docs`     | Generate Markdown from webpack types                              |
| `npm run build-html`        | Convert Markdown to HTML                                          |
| `npm run build`             | Generate docs + build HTML                                        |
| `npm run bootstrap:webpack` | Clone/update local webpack source at `HEAD_COMMIT`                |
| `npm run docs:quickstart`   | Run bootstrap + markdown generation + HTML build with smart skips |
| `npm run docs:doctor`       | Run quickstart pipeline in verbose mode                           |
| `npm run lint`              | Run ESLint                                                        |
| `npm run format:check`      | Check Prettier formatting                                         |

## Local Quickstart

Install dependencies:

```bash
npm install
```

Bootstrap local webpack source to the commit pinned in `HEAD_COMMIT`:

```bash
npm run bootstrap:webpack
```

Generate markdown docs:

```bash
npm run generate-docs
```

Build HTML output:

```bash
npm run build-html
```

Or run everything in one command:

```bash
npm run docs:quickstart
```

Useful flags for the quickstart runner:

- `--force` reruns every step
- `--verbose` prints detailed diagnostics
- `--no-html` skips the HTML build

Example:

```bash
node scripts/docs-pipeline.mjs --force --verbose
```

## Troubleshooting

### Missing webpack folder

If `npm run generate-docs` fails with "Webpack source not found", run:

```bash
npm run bootstrap:webpack
```

### Wrong webpack commit

If local webpack is out of sync with `HEAD_COMMIT`, run:

```bash
npm run bootstrap:webpack
```

This updates `./webpack` and checks out the exact pinned commit.

### Stale output

If you need to regenerate everything regardless of skip checks:

```bash
node scripts/docs-pipeline.mjs --force
```

## Contributor Workflow

1. Bootstrap webpack source:

```bash
npm run bootstrap:webpack
```

2. Regenerate markdown docs:

```bash
npm run generate-docs
```

3. Build HTML output:

```bash
npm run build-html
```

Output locations:

- Markdown: `pages/vX.x/`
- Type map: `pages/vX.x/type-map.json`
- HTML site: `out/`

## Contributing

When making changes to documentation generation (plugins, `generate-md.mjs`, `tsconfig.json`), ensure the docs can still be generated successfully. CI will verify this on every pull request.

## License

See the [webpack project](https://github.com/webpack/webpack) for license details.

# webpack-doc-kit

Automated TypeScript API documentation generator for webpack that extracts type definitions from types.d.ts and generates structured Markdown and HTML documentation, which is automatically deployed to GitHub Pages.

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

| Script                  | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run generate-docs` | Generate Markdown from webpack types |
| `npm run build-html`    | Convert Markdown to HTML             |
| `npm run build`         | Generate docs + build HTML           |
| `npm run lint`          | Run ESLint                           |
| `npm run format:check`  | Check Prettier formatting            |

## Contributing

1. Any changes to documentation generation (e.g., plugins, generate-md.mjs, tsconfig.json) must not break the build process.
2. Ensure that documentation can still be generated successfully after modifications.
3. The CI pipeline automatically validates documentation generation on every pull request.
4. Pull requests will fail if the documentation build process is broken.
5. Contributors should test changes locally before submitting a PR to avoid CI failures.

## License

See the [webpack project](https://github.com/webpack/webpack) for license details.

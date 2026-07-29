# Contributing to webpack.js.org

Welcome, and thank you for helping improve webpack's documentation! This repository holds the hand-written content and the build tooling behind [webpack.js.org](https://webpack.js.org).

We hope this guide helps you find the right kind of contribution and get productive quickly, however, you should also check out other guide-like resources in this repository:

- The [Writer's Guide](pages/guides/contributing/writers-guide.md)
- The [README](README.md)
- webpack's [AI policy](https://github.com/webpack/governance/blob/main/AI_POLICY.md)

## Does your change belong here?

The website assembles content from several sources, so the first step is confirming you are in the right place:

| You want to change…                                        | Go to…                                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| Guides, blog posts, or other hand-written pages (`pages/`) | **This repository**                                          |
| The build tooling, API doc generation, or site theme       | **This repository**                                          |
| Generated API reference pages (`/docs/api/`)               | [webpack/webpack](https://github.com/webpack/webpack)        |
| Loader or plugin reference pages                           | The README of that loader or plugin's repository             |
| The Markdown-to-HTML engine itself                         | [nodejs/doc-kit](https://github.com/nodejs/doc-kit)          |
| webpack's actual behavior                                  | [webpack/webpack](https://github.com/webpack/webpack/issues) |

When in doubt, [ask in the webpack Discord](https://discord.com/invite/webpack) and we will point you in the right direction.

## Writing and improving documentation

**Read the [Writer's Guide](pages/guides/contributing/writers-guide.md).**

If you want to write something but don't know what, look through [open issues](https://github.com/webpack/webpack.js.org/issues) labeled `documentation`, or start a discussion proposing the topic before investing significant writing time.

## Working on the tooling

The generator code lives in `scripts/` (pipeline stages) and `plugins/` (TypeDoc processing and the doc-kit theme). Start with the [README](README.md) — it explains the three-stage pipeline (prepare → Markdown → HTML) and what each script does.

The site is built on [@node-core/doc-kit](https://github.com/nodejs/doc-kit). Improvements to the engine itself (Markdown parsing, core rendering) belong upstream; the theme and plugins in this repository customize it for webpack.

## Local development

You need the latest LTS release of [Node.js](https://nodejs.org) (CI uses `lts/*`) and npm.

```sh
git clone https://github.com/<your-username>/webpack.js.org.git
cd webpack.js.org
npm ci
npm run build
```

In the above example, `npm run build` runs the whole pipeline (it downloads the webpack releases in `versions.json` and generates their API docs), so it takes a few minutes. After that, if you are only editing hand-written pages, regenerate just the HTML:

```sh
npm run build:html
```

The site is written to `out/` with absolute URLs that expect `http://localhost:3000`, so serve it on that port:

```sh
npx serve out -l 3000 # Port 3000 is default, but it never hurts to be explicit.
```

## Opening a pull request

1. Create a branch on your fork, and try to keep each pull request focused on one change.
2. Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages (`feat:`, `fix:`, `docs:`, `chore:`…).
3. A pre-commit hook formats and lints staged files. You can run the same checks yourself with `npm run lint` and `npm run format:check`.
4. If you used AI tooling, read and follow the [AI policy](https://github.com/webpack/governance/blob/main/AI_POLICY.md).
5. A maintainer will review your pull request after it is opened.

## Code of Conduct

This project follows the [OpenJS Foundation Code of Conduct](https://code-of-conduct.openjsf.org). Be kind, be patient, and assume good intent.

## Licensing

Code in this repository is licensed under [MIT](LICENSE). Documentation content in `pages/` is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). By contributing, you agree that your contributions are licensed under these terms.

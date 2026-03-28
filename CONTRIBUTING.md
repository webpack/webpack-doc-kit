# Contributing to webpack-doc-kit

This repository generates webpack’s TypeScript API documentation (Markdown and HTML) from [webpack/webpack](https://github.com/webpack/webpack) `types.d.ts`, using TypeDoc, custom plugins, and [@node-core/doc-kit](https://github.com/nodejs/node-core-utils/tree/main/packages/doc-kit).

Upstream source of truth: **https://github.com/webpack/webpack-doc-kit**. Open pull requests against that repository unless you are intentionally working in a fork.

## Prerequisites

- Node.js (LTS; CI uses `lts/*`)
- Git

## Local setup

### 1. Clone and install

```bash
git clone https://github.com/webpack/webpack-doc-kit.git
cd webpack-doc-kit
npm ci
```

If you are using a fork, add the upstream remote so you can stay in sync:

```bash
git remote add upstream https://github.com/webpack/webpack-doc-kit.git
```

### 2. Add the webpack sources

The `webpack/` directory is **not** committed; it is listed in `.gitignore`. Generation expects a checkout of **webpack/webpack** at the commit pinned in `HEAD_COMMIT` (same as CI).

**Bash / Git Bash:**

```bash
git clone https://github.com/webpack/webpack.git webpack
git -C webpack checkout "$(cat HEAD_COMMIT)"
```

**PowerShell:**

```powershell
git clone https://github.com/webpack/webpack.git webpack
git -C webpack checkout (Get-Content HEAD_COMMIT -Raw).Trim()
```

### 3. Generate docs and build HTML

```bash
npm run generate-docs   # TypeDoc → pages/
npm run build-html      # doc-kit → out/
```

Full pipeline:

```bash
npm run build
```

### 4. Quality checks (same as CI)

```bash
npm run lint
npm run format:check
```

## Before you open a PR

1. Run `npm run lint` and `npm run format:check`.
2. If you changed anything that affects generated output, run `npm run generate-docs` and commit the updated `pages/` tree when appropriate. CI fails if `pages/` is out of date compared to the pinned webpack commit.
3. Keep changes focused: `generate-md.mjs`, `plugins/`, themes under `plugins/theme/`, `doc-kit.config.mjs`, and `tsconfig.json` are the usual touch points.

## Google Summer of Code (webpack, 2026)

webpack participates in GSoC. This repo is part of the webpack organization and is relevant if your interests include **API documentation**, **TypeDoc/doc-kit tooling**, or **docs infrastructure**.

**Official onboarding (read this first):**

- Repository: [webpack/gsoc](https://github.com/webpack/gsoc)
- Project ideas and rules for proposals are published in the doc linked from that README (ideas outside the published list are not accepted).
- Community: [webpack Discord](https://discord.gg/PebpZRPfJp) (also linked from the GSoC repo).

**Typical GSoC requirement:** one **merged** contribution to the webpack ecosystem before you apply. The [webpack/gsoc README](https://github.com/webpack/gsoc/blob/main/README.md) lists core entry repos (`webpack`, `webpack-cli`, `webpack.js.org`). A merged PR **here** (upstream `webpack/webpack-doc-kit`) is aligned with documentation tooling; if your idea is tied to another repo, confirm with mentors on Discord.

**Practical first steps:**

1. Follow **Local setup** above and ensure `npm run build` succeeds.
2. Read [webpack’s CONTRIBUTING guide](https://github.com/webpack/webpack/blob/main/CONTRIBUTING.md) for general ecosystem conventions.
3. Look for `good first issue` / `help wanted` in [webpack-doc-kit issues](https://github.com/webpack/webpack-doc-kit/issues) and related webpack repos.

## License

Licensing follows the [webpack project](https://github.com/webpack/webpack); see upstream repositories for details.

---
title: Version Support
---

# Version Support

webpack follows a **current + maintenance** support model:

- **Current** — The latest major release line. Receives new features, bug fixes, and security fixes.
- **Maintenance** — The single major release line immediately preceding the current one. Receives bug fixes and security fixes only. A version enters maintenance as soon as the next major version is released.
- **End-of-Life (EOL)** — Everything older than the maintenance line. When a new major version is released, the version previously in maintenance becomes EOL.

## Support Table

| Major Version                                                 | Minimum Node.js Version | Release Date  | Status          | EOL Date      |
| ------------------------------------------------------------- | ----------------------- | ------------- | --------------- | ------------- |
| [**v5.x**](https://github.com/webpack/webpack)                | v10.13.0                | October 2020  | **Current**     | —             |
| [**v4.x**](https://github.com/webpack/webpack/tree/webpack-4) | v6.11.5                 | February 2018 | **Maintenance** | —             |
| **v3.x**                                                      | v4.3.0                  | June 2017     | EOL             | February 2018 |
| **v2.x**                                                      | v4.3.0                  | January 2017  | EOL             | June 2017     |
| **v1.x**                                                      | v0.6.0                  | February 2014 | EOL             | January 2017  |

A version in **Maintenance** remains there until the next major version of webpack is released, at which point it becomes EOL and the outgoing Current version takes its place. For example, when webpack 6 is released, v5.x will move to Maintenance and v4.x will reach EOL.

## EOL Policy

EOL versions of webpack are unsupported. The webpack team does **not** plan to address, patch, or release fixes for any issues found in EOL versions — including security vulnerabilities.

In rare circumstances, at its sole discretion, the team _may_ choose to backport a fix for a critical security vulnerability to an EOL version. This is an exception, not a policy: **do not rely on it, and do not plan around or for it.** If you are running an EOL version, the only supported remediation for any issue is upgrading to a supported release line or rely on third-party commercial support providers.

Issues and pull requests filed against EOL versions will be closed.

## Release Schedule

webpack does not publish release timelines. There is **no ETA** for:

- The release date of any future major version (including webpack 6), or
- The date on which the current version will transition to Maintenance.

Rather, major versions ship when they are ready.

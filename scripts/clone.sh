#!/usr/bin/env bash
set -euo pipefail

WEBPACK_DIR="webpack"
WEBPACK_REPO="https://github.com/webpack/webpack.git"
REF="$(cat HEAD_COMMIT)"

rm -rf "$WEBPACK_DIR"
git clone "$WEBPACK_REPO" "$WEBPACK_DIR"
git -C "$WEBPACK_DIR" checkout --detach "$REF"

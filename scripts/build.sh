#!/usr/bin/env bash
set -euo pipefail

mkdir -p out
npm run generate-docs
npm run build-html

# Contribution Documentation for Issue #243

## Issue Details

- **Issue Number:** #243
- **Title:** `page(branding): should force light/dark. bg on icon`
- **URL:** https://github.com/webpack/webpack-doc-kit/issues/243

## Description & Problem

On the webpack branding page (`pages/about/branding.md`), logos intended for light backgrounds and dark backgrounds (as well as icons and stickers) were previously rendered directly onto the page theme background without explicit container background styling.

- When viewing the website in **dark mode**, the "Light backgrounds" column (which contains logos with dark blue text) had a dark page background, making the dark text unreadable.
- When viewing the website in **light mode**, the "Dark backgrounds" column (which contains logos with white text) had a light page background, making the white text unreadable.

## Changes Made

1. Modified `pages/about/branding.md`:
   - Wrapped horizontal and stacked logos intended for light backgrounds in a container with a forced light background (`#ffffff` / `bg-white`).
   - Wrapped horizontal and stacked logos intended for dark backgrounds in a container with a forced dark background (`#2b3a42` / `bg-[#2b3a42]` - using webpack's official Outer Space brand color).
   - Wrapped the webpack icon and hex sticker in corresponding forced light/dark background containers for consistent contrast and visual fidelity across all theme modes.

## Verification

- Verified code formatting with `npm run format:check`.
- Ran linters with `npm run lint`.
- Executed unit tests with `npm test`.

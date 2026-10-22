# Repository Guidelines

## Project Structure & Module Organization

This repository currently has an `docs/MASTER-PROMPT.md`, the AdNinja website brief. Application code, tests, and assets have not been added. The planned Next.js layout puts routes in `src/app/`, shared components in `src/components/`, store links and release status in `src/config/product.ts`, and static assets in `public/`. Keep supporting design, privacy, and deployment documents in `docs/`. Update `Readme.md` as the structure takes shape.

## Build, Test, and Development Commands

No package manifest or runnable scripts exist yet. Use `git diff --check` to catch whitespace errors and `git status --short` to review changed files. Once the project is scaffolded, document exact commands for development, formatting, linting, strict type checking, tests, link checks, dependency auditing, and production builds in `Readme.md`. Run applicable checks before reporting work as complete.

## Coding Style & Naming Conventions

The scaffold uses React, strict TypeScript, and plain CSS; the brief proposes Tailwind CSS for later evaluation. ESLint and Prettier configuration is committed. Use two-space indentation, `PascalCase` component names, `camelCase` variables and functions, and lowercase route folders such as `src/app/how-it-works/`. Prefer semantic HTML, keyboard access, visible focus, and reduced-motion support.

## Testing Guidelines

There is no test framework or coverage target yet. Add focused unit or component tests with new behavior, named after the feature they cover (for example, `faq.test.tsx`). Prioritize navigation, downloads, browser availability, theme persistence, routes, metadata, and accessibility. The brief excludes Playwright. Record manual desktop and mobile checks accurately; do not claim unperformed testing.

## Commit & Pull Request Guidelines

There is no Git history establishing a commit convention. Use short, imperative subjects such as `Add FAQ page`. Pull requests should summarize the purpose and files changed, link related issues when available, report verification, and include screenshots for visible changes.

## Security & Product Claims

Never commit secrets; use `.env.example` with placeholders. Verify feature, browser support, privacy, license, and download claims against extension artifacts before publishing. Do not invent store URLs, ratings, or testimonials. Keep unverified facts clearly marked as launch blockers. Do not deploy or connect external services without explicit approval.

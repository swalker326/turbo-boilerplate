# React Hook Form Sandbox - Dev Guide

## Commands
- Build: `pnpm build`
- Dev: `pnpm dev`
- Typecheck: `pnpm typecheck`
- Lint/Format: `pnpm check`
- Format only: `pnpm -F <package> format`
- Run tests: `pnpm -F ui test`
- Run single test: `pnpm -F ui test -- -t 'test name'`

## Code Style
- Use Biome for linting/formatting with configured rules
- Indentation: Spaces (not tabs)
- Quotes: Single quotes for strings
- Imports: Organize with Biome (auto-sorted)
- Component structure: Follow shadcn/UI conventions
- Types: Use explicit TypeScript types, prefer interfaces for objects
- CSS: Tailwind with component variants via cva
- Naming: PascalCase for components, camelCase for functions/variables
- React style: Functional components with hooks
- Error handling: Appropriate try/catch in async functions

## Project Structure
- Monorepo with Turborepo
- UI package exports reusable components
- Host app uses TanStack Router and React Hook Form
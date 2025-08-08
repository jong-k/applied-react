# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Linting
pnpm lint

# Preview production build
pnpm preview

# Check i18n consistency
pnpm check:i18n
```

## Architecture Overview

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **State Management**: Zustand with persistence and devtools
- **Styling**: Tailwind CSS v4
- **Internationalization**: i18next + react-i18next
- **HTTP Client**: Axios with request scheduling

### Project Structure

**Feature-First Architecture**:
- `src/features/`: Feature modules with co-located components, types, stores, and API
  - `quotes/`: Quotes functionality with API integration and rate limiting demo
  - `todos/`: Todo list with Zustand state management
  - `i18n/`: Internationalization configuration and components
- `src/pages/`: Page-level route components (thin wrappers)
- `src/shared/`: Shared utilities, types, and API configuration
- `src/components/`: Reusable UI components
- `src/stores/`: Global application state only
- `scripts/`: Utility scripts (i18n validation)

### Key Patterns

**Feature Organization**: Each feature is self-contained with its own components, types, stores, and API functions. Features export their public interface through an `index.ts` file.

**State Management**: Uses Zustand with `devtools` and `persist` middleware. Feature-specific stores live within their feature folder, global stores in `src/stores/`.

**Internationalization**: Korean (ko) is the fallback language. Translation files located in `src/features/i18n/locales/`. Use the `check:i18n` script to validate consistency.

**API Layer**: Shared Axios instance with built-in request scheduling (500ms delay) to prevent API rate limiting. Located in `src/shared/api/axios.ts`.

**Import Strategy**: Features export clean interfaces. Pages import from feature barrel exports for maintainable dependencies.

## Development Notes

- TypeScript configuration uses project references with separate configs for app and node environments
- ESLint configured with React Hooks rules and Prettier integration
- Uses pnpm for package management
- Korean language support is primary, with English as secondary

## Project Purpose

- This is a practice project to implement various React concepts including:
  - Internationalization (i18n)
  - API rate limiting
  - Exploring popular libraries like Zustand
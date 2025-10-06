# Contributing to eslint-plugin-esthetic-imports

Thank you for your interest in contributing! Here are some guidelines to help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

## Development Workflow

### Running Tests

```bash
# Run tests once
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with UI
bun run test:ui
```

### Building

```bash
# Build once
bun run build

# Build in watch mode
bun run dev
```

### Testing Your Changes

After making changes:

1. Run the test suite: `bun run test`
2. Build the project: `bun run build`
3. Test the built plugin with ESLint in a separate directory

## Code Style

- Use TypeScript
- Follow existing code patterns
- Ensure all tests pass before submitting a PR

## Submitting Changes

1. Create a new branch for your feature/fix
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass
5. Update documentation if needed
6. Submit a pull request

## Adding New Rules

1. Create a new file in `src/rules/`
2. Export the rule from `src/rules/index.ts`
3. Add tests in `tests/rules/`
4. Update README with rule documentation

## Questions?

Feel free to open an issue for any questions or concerns.

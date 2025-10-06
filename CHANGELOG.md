# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-01-03

### Added
- Initial release of eslint-plugin-esthetic-imports
- `sort-imports-by-length` rule for sorting imports by line length
- Support for both ASC and DESC ordering
- Auto-fix capability
- Comprehensive test suite with vitest (12 tests)
- Build system using tsup for dual ESM/CJS distribution
- TypeScript type declarations
- GitHub Actions CI/CD workflows
- Documentation and examples

### Fixed
- ESLintUtils import issue
- TypeScript module resolution

### Changed
- Migrated from bun test to vitest for better compatibility
- Simplified plugin export structure

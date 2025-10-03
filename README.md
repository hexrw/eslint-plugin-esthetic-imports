# eslint-plugin-esthetic-imports

[![npm version](https://img.shields.io/npm/v/eslint-plugin-esthetic-imports.svg)](https://www.npmjs.com/package/eslint-plugin-esthetic-imports)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An ESLint plugin for sorting imports by line length for better aesthetics. Make your import statements visually appealing and easy to scan!

## Installation

```bash
# Using npm
npm install --save-dev eslint-plugin-esthetic-imports

# Using yarn
yarn add --dev eslint-plugin-esthetic-imports

# Using pnpm
pnpm add -D eslint-plugin-esthetic-imports

# Using bun
bun add -d eslint-plugin-esthetic-imports
```

## Usage

Add `eslint-plugin-esthetic-imports` to your ESLint configuration:

### ESLint Flat Config (eslint.config.js)

```javascript
import estheticImports from "eslint-plugin-esthetic-imports"

export default [
    {
        plugins: {
            "esthetic-imports": estheticImports,
        },
        rules: {
            "esthetic-imports/sort-imports-by-length": ["error", { order: "DESC" }],
        },
    },
]
```

### Legacy ESLint Config (.eslintrc.js)

```javascript
module.exports = {
    plugins: ["esthetic-imports"],
    rules: {
        "esthetic-imports/sort-imports-by-length": ["error", { order: "DESC" }],
    },
}
```

## Rules

### `sort-imports-by-length`

Sorts import statements by their line length to create a visually appealing gradient effect.

#### Options

- `order`: `"ASC"` | `"DESC"` (default: `"DESC"`)
  - `"ASC"`: Shortest imports first
  - `"DESC"`: Longest imports first

#### Examples

**❌ Incorrect (with default DESC order)**

```javascript
import a from "a"
import medium from "medium-name"
import veryLongName from "very-long-package-name"
```

**✅ Correct (with default DESC order)**

```javascript
import veryLongName from "very-long-package-name"
import medium from "medium-name"
import a from "a"
```

**✅ Correct (with ASC order)**

```javascript
import a from "a"
import medium from "medium-name"
import veryLongName from "very-long-package-name"
```

## Development

This project is built with [Bun](https://bun.sh).

### Setup

```bash
bun install
```

### Build

```bash
bun run build
```

### Test

```bash
# Run tests
bun run test

# Watch mode
bun run test:watch

# With UI
bun run test:ui
```

### Development Mode

```bash
bun run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Petr Kolonicz](https://github.com/hexrw)


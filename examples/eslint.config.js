import estheticImports from "eslint-plugin-esthetic-imports"

export default [
    {
        files: ["**/*.js"],
        plugins: {
            "esthetic-imports": estheticImports,
        },
        rules: {
            "esthetic-imports/sort-imports-by-length": ["error", { order: "DESC" }],
        },
    },
]

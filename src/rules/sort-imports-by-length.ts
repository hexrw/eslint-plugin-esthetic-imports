import { TSESTree } from "@typescript-eslint/types"
export { ESLintUtils } from "@typescript-eslint/utils"

type Options = [{ order?: "ASC" | "DESC" }]

const createRule = ESLintUtils.RuleCreator(
    name => `https://github.com/hexrw/eslint-plugin-esthetic-imports/blob/main/rules.md#${name}`
)

export const sortImportsByLength = createRule<Options>({
    name: "sort-imports-by-length",
    meta: {
        docs: {
            description: "Sort imports by line length (ASC or DESC)",
            recommended: false,
        },
        type: "suggestion",
        fixable: "code",
        schema: [
            {
                type: "object",
                properties: {
                    order: { type: "string", enum: ["ASC", "DESC"], default: "DESC" },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            sorted: "Imports should be sorted by line length ({{order}})",
        },
    },
    defaultOptions: [{}],
    create(context, [options]) {
        const order = options.order ?? "DESC"
        return {
            Program(node) {
                const imps = node.body.filter(n => n.type === "ImportDeclaration") as TSESTree.ImportDeclaration[]
                if (imps.length <= 1) return

                const src = context.getSourceCode()
                const arr = imps.map(n => ({ node: n, text: src.getText(n) }))
                const sorted = [...arr].sort((a, b) =>
                    order === "ASC" ? a.text.length - b.text.length : b.text.length - a.text.length
                )
                const ok = arr.every((v, i) => v === sorted[i])
                if (ok) return

                context.report({
                    node: imps[0],
                    messageId: "sorted",
                    data: { order },
                    fix(fixer) {
                        return imps.map((n, i) => fixer.replaceText(n, sorted[i].text))
                    },
                })
            },
        }
    },
})

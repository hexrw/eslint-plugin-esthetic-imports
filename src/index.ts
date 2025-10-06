import type { RuleModule } from "@typescript-eslint/utils/ts-eslint"
import { rules } from "./rules"

type RuleKey = keyof typeof rules

const plugin = {
    meta: { name: "eslint-plugin-esthetic-imports", version: "0.1.0" },
    rules,
}

export default plugin

import { RuleModule } from "@typescript-eslint/utils/dist/ts-eslint"
import { rules } from "./rules"

type RuleKey = keyof typeof rules
interface Plugin extends Omit<import("eslint").Plugin, "rules"> {
    rules: Record<RuleKey, RuleModule<any, any>>
}

const plugin: Plugin = {
    meta: { name: "eslint-plugin-esthetic-imports", version: "0.1.0" },
    rules,
}
export default plugin

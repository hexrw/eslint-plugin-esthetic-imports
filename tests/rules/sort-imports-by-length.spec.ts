import { RuleTester } from "@typescript-eslint/rule-tester"
import { sortImportsByLength } from "../../src/rules/sort-imports-by-length"

const tester = new RuleTester()

tester.run("sort-imports-by-length", sortImportsByLength, {
    valid: [
        {
            code: `
import a from "a";
import longName from "very-long-package-name";
`,
            options: [{ order: "ASC" }],
        },
    ],
    invalid: [
        {
            code: `
import a from "a";
import longName from "very-long-package-name";
`,
            output: `
import longName from "very-long-package-name";
import a from "a";
`,
            errors: [{ messageId: "sorted", data: { order: "DESC" } }],
        },
    ],
})

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
        {
            code: `
import longName from "very-long-package-name";
import a from "a";
`,
            options: [{ order: "DESC" }],
        },
        {
            code: `
import longName from "very-long-package-name";
import medium from "medium-name";
import a from "a";
`,
            options: [{ order: "DESC" }],
        },
        {
            code: `
import a from "a";
import medium from "medium-name";
import longName from "very-long-package-name";
`,
            options: [{ order: "ASC" }],
        },
        {
            code: `import single from "single";`,
        },
        {
            code: ``,
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
        {
            code: `
import longName from "very-long-package-name";
import a from "a";
`,
            output: `
import a from "a";
import longName from "very-long-package-name";
`,
            options: [{ order: "ASC" }],
            errors: [{ messageId: "sorted", data: { order: "ASC" } }],
        },
        {
            code: `
import a from "a";
import medium from "medium-name";
import longName from "very-long-package-name";
`,
            output: `
import longName from "very-long-package-name";
import medium from "medium-name";
import a from "a";
`,
            options: [{ order: "DESC" }],
            errors: [{ messageId: "sorted", data: { order: "DESC" } }],
        },
        {
            code: `
import medium from "medium-name";
import a from "a";
import longName from "very-long-package-name";
`,
            output: `
import longName from "very-long-package-name";
import medium from "medium-name";
import a from "a";
`,
            errors: [{ messageId: "sorted", data: { order: "DESC" } }],
        },
    ],
})


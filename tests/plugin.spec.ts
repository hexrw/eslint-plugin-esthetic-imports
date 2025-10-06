import { describe, it, expect } from "vitest"
import plugin from "../src/index"

describe("Plugin integration", () => {
    it("should export the plugin with correct structure", () => {
        expect(plugin).toBeDefined()
        expect(plugin.meta).toBeDefined()
        expect(plugin.meta.name).toBe("eslint-plugin-esthetic-imports")
        expect(plugin.meta.version).toBe("0.1.0")
        expect(plugin.rules).toBeDefined()
    })

    it("should have the sort-imports-by-length rule", () => {
        expect(plugin.rules["sort-imports-by-length"]).toBeDefined()
        expect(plugin.rules["sort-imports-by-length"].meta).toBeDefined()
        expect(plugin.rules["sort-imports-by-length"].meta.fixable).toBe("code")
    })
})

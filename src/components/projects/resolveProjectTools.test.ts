import { describe, expect, it } from "vitest"
import { resolveProjectTools } from "./resolveProjectTools"

describe("resolveProjectTools", () => {
  it("returns canonical tools in project source order", () => {
    const resolved = resolveProjectTools({
      slug: "sample-project",
      tools: ["django", "python", "postgresql"],
    })

    expect(resolved.map(({ id }) => id)).toEqual(["django", "python", "postgresql"])
    expect(resolved.map(({ label }) => label)).toEqual(["Django", "Python", "PostgreSQL"])
  })

  it("rejects unknown tool ids with project context", () => {
    expect(() =>
      resolveProjectTools({
        slug: "sample-project",
        tools: ["python", "unknown-tool"],
      }),
    ).toThrow('Project "sample-project" references unknown tool "unknown-tool"')
  })
})

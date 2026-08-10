import * as React from "react"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { type Tool } from "../../data/tool/types"
import { ToolGrid } from "./ToolGrid"

const tools: readonly Tool[] = [
  {
    id: "cplusplus",
    label: "C++",
    icon: "/icons/cplusplus.svg",
  },
  {
    id: "python",
    label: "Python",
    icon: "/icons/python.svg",
  },
  {
    id: "aws",
    label: "AWS",
    icon: "/icons/aws.svg",
  },
]

describe("ToolGrid", () => {
  it("renders every tool as an accessible list item", () => {
    render(<ToolGrid aria-label="Tools" tools={tools} />)

    const list = screen.getByRole("list", { name: "Tools" })
    const items = within(list).getAllByRole("listitem")

    expect(list).toHaveAttribute("role", "list")
    expect(items).toHaveLength(tools.length)
    tools.forEach((tool, index) => {
      expect(within(items[index]).getByRole("img", { name: tool.label })).toHaveAttribute("src", tool.icon)
    })
  })

  it("preserves the source order", () => {
    render(<ToolGrid aria-label="Tools" tools={tools} />)

    expect(screen.getAllByRole("img").map((image) => image.getAttribute("alt"))).toEqual(
      tools.map(({ label }) => label),
    )
  })

  it("forwards native attributes and custom classes to the list", () => {
    render(<ToolGrid aria-label="Selected tools" className="ring-1" data-testid="tool-grid" tools={tools} />)

    const list = screen.getByTestId("tool-grid")
    expect(list).toHaveAttribute("aria-label", "Selected tools")
    expect(list).toHaveClass("ring-1")
  })

  it("supports an empty tool collection", () => {
    render(<ToolGrid aria-label="Tools" tools={[]} />)

    expect(screen.getByRole("list", { name: "Tools" })).toBeEmptyDOMElement()
  })
})

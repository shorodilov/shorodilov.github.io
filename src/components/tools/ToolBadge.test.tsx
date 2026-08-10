import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ToolBadge } from "./ToolBadge"

const icon = "/icons/cplusplus.svg"

describe("ToolBadge", () => {
    it("renders a fixed-size tool icon with an accessible name", () => {
        render(<ToolBadge icon={icon} label="C++" />)

        const image = screen.getByRole("img", { name: "C++" })
        expect(image).toHaveAttribute("src", icon)
        expect(image).toHaveAttribute("width", "36")
        expect(image).toHaveAttribute("height", "36")
    })

    it("forwards native attributes and custom classes to its container", () => {
        render(<ToolBadge className="ring-1" data-testid="tool-badge" icon={icon} label="C++" title="C++" />)

        const badge = screen.getByTestId("tool-badge")
        expect(badge).toHaveAttribute("title", "C++")
        expect(badge).toHaveClass("ring-1")
    })

    it("can hide its icon semantics when composed beside a visible label", () => {
        render(<ToolBadge aria-hidden="true" data-testid="tool-badge" icon={icon} label="C++" />)

        expect(screen.getByTestId("tool-badge")).toHaveAttribute("aria-hidden", "true")
        expect(screen.queryByRole("img", { name: "C++" })).not.toBeInTheDocument()
    })
})

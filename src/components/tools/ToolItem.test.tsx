import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ToolItem } from "./ToolItem"

const icon = "/icons/cplusplus.svg"

const renderToolItem = (props: React.ComponentProps<typeof ToolItem>) =>
    render(
        <ul>
            <ToolItem {...props} />
        </ul>,
    )

describe("ToolItem", () => {
    it("renders a visible tool label and its icon", () => {
        renderToolItem({ icon, label: "C++" })

        expect(screen.getByRole("listitem")).toHaveTextContent("C++")
        expect(screen.getByAltText("C++")).toHaveAttribute("src", icon)
    })

    it("hides duplicate icon semantics beside the visible label", () => {
        renderToolItem({ icon, label: "C++" })

        expect(screen.queryByRole("img", { name: "C++" })).not.toBeInTheDocument()
        expect(screen.getByAltText("C++").parentElement).toHaveAttribute("aria-hidden", "true")
    })

    it("forwards native attributes and custom classes to the list item", () => {
        renderToolItem({ className: "ring-1", icon, label: "C++", title: "C++ tool" })

        const item = screen.getByRole("listitem")
        expect(item).toHaveAttribute("title", "C++ tool")
        expect(item).toHaveClass("ring-1")
    })
})

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { Button } from "./Button"

describe("Button", () => {
    it("renders a safe native button and handles activation", async () => {
        const user = userEvent.setup()
        const onClick = vi.fn()

        render(<Button onClick={onClick}>Contact me</Button>)

        const button = screen.getByRole("button", { name: "Contact me" })
        expect(button).toHaveAttribute("type", "button")

        await user.click(button)

        expect(onClick).toHaveBeenCalledOnce()
    })

    it("preserves an explicit form button type", () => {
        render(<Button type="submit">Submit</Button>)

        expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit")
    })

    it("does not handle activation when disabled", async () => {
        const user = userEvent.setup()
        const onClick = vi.fn()

        render(
            <Button disabled onClick={onClick}>
                Contact me
            </Button>,
        )

        const button = screen.getByRole("button", { name: "Contact me" })
        expect(button).toBeDisabled()

        await user.click(button)

        expect(onClick).not.toHaveBeenCalled()
    })

    it("supports an accessible icon-only action", () => {
        render(
            <Button aria-label="Send email" variant="icon">
                <span aria-hidden="true">@</span>
            </Button>,
        )

        expect(screen.getByRole("button", { name: "Send email" })).toBeVisible()
    })
})

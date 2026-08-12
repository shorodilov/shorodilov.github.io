import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ProfileActions } from "./ProfileActions"

const actionProps = {
  email: "serhii@example.com",
  github: "https://github.com/serhii",
  linkedin: "https://www.linkedin.com/in/serhii/",
}

describe("ProfileActions", () => {
  it("renders the featured profile links with their destinations", () => {
    render(<ProfileActions {...actionProps} />)

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", actionProps.linkedin)
    expect(screen.getByRole("link", { name: "Send email" })).toHaveAttribute("href", `mailto:${actionProps.email}`)
    expect(screen.getByRole("link", { name: "GitHub profile" })).toHaveAttribute("href", actionProps.github)
  })

  it("keeps every icon-only action accessible", () => {
    render(<ProfileActions {...actionProps} variant="icons" />)

    expect(screen.getByRole("link", { name: "LinkedIn profile" })).toHaveAttribute("href", actionProps.linkedin)
    expect(screen.getByRole("link", { name: "Send email" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "GitHub profile" })).toBeInTheDocument()
    expect(screen.queryByText("LinkedIn")).not.toBeInTheDocument()
  })

  it("forwards native attributes and custom classes to the group", () => {
    render(<ProfileActions {...actionProps} className="mt-4" data-testid="profile-actions" />)

    expect(screen.getByTestId("profile-actions")).toHaveClass("mt-4")
  })
})

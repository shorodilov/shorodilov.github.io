import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ProfileIdentity } from "./ProfileIdentity"

const profile = {
    name: "Serhii Horodilov",
    role: "Software Engineer",
    summary: "I build immersive and user-friendly applications.",
}

describe("ProfileIdentity", () => {
    it("renders the profile identity content", () => {
        render(<ProfileIdentity {...profile} />)

        expect(screen.getByText(profile.name)).toBeInTheDocument()
        expect(screen.getByText(profile.role)).toBeInTheDocument()
        expect(screen.getByText(profile.summary)).toBeInTheDocument()
    })

    it("does not impose a document heading level", () => {
        render(<ProfileIdentity {...profile} />)

        expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    })

    it("forwards native attributes and custom classes", () => {
        render(
            <ProfileIdentity
                {...profile}
                aria-label="Profile summary"
                className="w-full"
                data-testid="profile-identity"
            />,
        )

        const identity = screen.getByTestId("profile-identity")
        expect(identity).toHaveAttribute("aria-label", "Profile summary")
        expect(identity).toHaveClass("w-full")
    })
})

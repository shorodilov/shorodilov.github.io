import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ProfileMeta } from "./ProfileMeta"

const metadata = {
    languages: ["English", "Ukrainian"],
    location: "Ukraine",
}

describe("ProfileMeta", () => {
    it("renders labeled profile metadata", () => {
        render(<ProfileMeta {...metadata} />)

        expect(screen.getByText("Location")).toBeInTheDocument()
        expect(screen.getByText(metadata.location)).toBeInTheDocument()
        expect(screen.getByText("Languages")).toBeInTheDocument()
        expect(screen.getByText("English, Ukrainian")).toBeInTheDocument()
    })

    it("preserves language source order", () => {
        render(<ProfileMeta languages={["Ukrainian", "English", "Polish"]} location="Ukraine" />)

        expect(screen.getByText("Ukrainian, English, Polish")).toBeInTheDocument()
    })

    it("keeps metadata icons decorative", () => {
        render(<ProfileMeta {...metadata} data-testid="profile-meta" />)

        const icons = screen.getByTestId("profile-meta").querySelectorAll("svg")
        expect(icons).toHaveLength(2)

        icons.forEach((icon) => {
            expect(icon).toHaveAttribute("aria-hidden", "true")
        })
    })

    it("forwards native attributes and custom classes", () => {
        render(
            <ProfileMeta
                {...metadata}
                aria-label="Profile metadata"
                className="w-full"
                data-testid="profile-meta"
            />,
        )

        const profileMeta = screen.getByTestId("profile-meta")
        expect(profileMeta).toHaveAttribute("aria-label", "Profile metadata")
        expect(profileMeta).toHaveClass("w-full")
    })
})

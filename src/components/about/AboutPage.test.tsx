import * as React from "react"
import { render, screen } from "@testing-library/react"
import { useMDXComponents } from "@mdx-js/react"
import { describe, expect, it } from "vitest"
import { AboutPage } from "./AboutPage"

const ProfileHeading = () => {
  const components = useMDXComponents()
  const Heading = components.h1 ?? "h1"

  return <Heading>Serhii Horodilov</Heading>
}

describe("AboutPage", () => {
  it("composes the shared page structure around About content", () => {
    render(
      <AboutPage>
        <p>Canonical About content</p>
      </AboutPage>,
    )

    expect(screen.getByRole("heading", { level: 1, name: "About" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Back to homepage" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("main")).toHaveTextContent("Canonical About content")
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute("data-theme", "dark")
  })

  it("keeps the GitHub profile heading out of the page body", () => {
    render(
      <AboutPage>
        <ProfileHeading />
        <p>Profile narrative</p>
      </AboutPage>,
    )

    expect(screen.queryByRole("heading", { name: "Serhii Horodilov" })).not.toBeInTheDocument()
    expect(screen.getByText("Profile narrative")).toBeInTheDocument()
  })
})

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PageFooter } from "./PageFooter"

describe("PageFooter", () => {
  it("renders the shared copyright presentation", () => {
    render(<PageFooter aria-label="Portfolio footer" className="site-footer" data-footer="portfolio" />)

    const footer = screen.getByRole("contentinfo", { name: "Portfolio footer" })
    expect(footer).toHaveTextContent(`© ${new Date().getFullYear()} Copyright`)
    expect(footer).toHaveAttribute("data-footer", "portfolio")
    expect(footer).toHaveClass("site-footer")
  })
})

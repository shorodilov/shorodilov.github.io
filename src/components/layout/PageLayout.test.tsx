import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PageLayout } from "./PageLayout"

describe("PageLayout", () => {
  it("renders content and forwards native attributes", () => {
    render(
      <PageLayout className="custom-layout" data-layout="portfolio" data-testid="page-layout">
        Portfolio content
      </PageLayout>,
    )

    const layout = screen.getByTestId("page-layout")
    expect(layout).toHaveTextContent("Portfolio content")
    expect(layout).toHaveAttribute("data-layout", "portfolio")
    expect(layout).toHaveClass("custom-layout")
  })
})

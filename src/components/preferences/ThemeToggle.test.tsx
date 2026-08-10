import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ThemeToggle, type ColorTheme } from "./ThemeToggle"

describe("ThemeToggle", () => {
  it("exposes the current theme as a labeled radio group", () => {
    render(<ThemeToggle data-control="theme" onThemeChange={vi.fn()} theme="dark" />)

    const group = screen.getByRole("group", { name: "Color theme" })
    const light = screen.getByRole("radio", { name: "Light" })
    const dark = screen.getByRole("radio", { name: "Dark" })

    expect(group).toHaveAttribute("data-control", "theme")
    expect(light).not.toBeChecked()
    expect(dark).toBeChecked()
    expect(group.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2)
  })

  it("requests a theme change when an option is selected", async () => {
    const user = userEvent.setup()
    const onThemeChange = vi.fn()

    render(<ThemeToggle onThemeChange={onThemeChange} theme="dark" />)

    await user.click(screen.getByText("Light"))

    expect(onThemeChange).toHaveBeenCalledOnce()
    expect(onThemeChange).toHaveBeenCalledWith("light")
  })

  it("supports native keyboard selection in controlled usage", async () => {
    const user = userEvent.setup()

    const ControlledThemeToggle = () => {
      const [theme, setTheme] = React.useState<ColorTheme>("dark")

      return <ThemeToggle onThemeChange={setTheme} theme={theme} />
    }

    render(<ControlledThemeToggle />)

    const light = screen.getByRole("radio", { name: "Light" })
    const dark = screen.getByRole("radio", { name: "Dark" })

    await user.tab()
    expect(dark).toHaveFocus()

    await user.keyboard("{ArrowLeft}")

    expect(light).toHaveFocus()
    expect(light).toBeChecked()
  })

  it("keeps compact options accessible without visible labels", () => {
    render(<ThemeToggle onThemeChange={vi.fn()} theme="light" variant="compact" />)

    expect(screen.getByRole("radio", { name: "Light" })).toBeChecked()
    expect(screen.getByRole("radio", { name: "Dark" })).not.toBeChecked()
    expect(screen.getByText("Light")).toHaveClass("sr-only")
    expect(screen.getByText("Dark")).toHaveClass("sr-only")
  })

  it("prevents theme changes when disabled", async () => {
    const user = userEvent.setup()
    const onThemeChange = vi.fn()

    render(<ThemeToggle disabled onThemeChange={onThemeChange} theme="dark" />)

    expect(screen.getByRole("group", { name: "Color theme" })).toBeDisabled()
    expect(screen.getByRole("radio", { name: "Light" })).toBeDisabled()
    expect(screen.getByRole("radio", { name: "Dark" })).toBeDisabled()

    await user.click(screen.getByText("Light"))

    expect(onThemeChange).not.toHaveBeenCalled()
  })
})

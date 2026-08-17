import * as React from "react"
import type { ColorTheme } from "./ThemeToggle"

const useDocumentLayoutEffect = typeof document === "undefined" ? React.useEffect : React.useLayoutEffect

export const useDocumentTheme = (theme: ColorTheme) => {
  useDocumentLayoutEffect(() => {
    const root = document.documentElement
    const previousTheme = root.dataset.theme

    root.dataset.theme = theme

    return () => {
      if (previousTheme === undefined) {
        delete root.dataset.theme
      } else {
        root.dataset.theme = previousTheme
      }
    }
  }, [theme])
}

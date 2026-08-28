import * as React from "react"
import clsx from "clsx"

export interface PageFooterProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {}

export const PageFooter = ({ className, ...props }: PageFooterProps) => (
  <footer className={clsx("text-center type-caption text-foreground-muted", className)} {...props}>
    © {new Date().getFullYear()} Copyright
  </footer>
)

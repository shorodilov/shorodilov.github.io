import * as React from "react"
import clsx from "clsx"

export interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageShell = ({ children, className, ...props }: PageShellProps) => (
  <div
    className={clsx(
      "mx-auto min-h-dvh w-full max-w-page overflow-hidden rounded-shell bg-background text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

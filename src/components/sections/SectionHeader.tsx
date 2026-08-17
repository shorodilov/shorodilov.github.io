import * as React from "react"
import clsx from "clsx"

export type SectionHeaderSize = "compact" | "responsive"
export type SectionHeaderTone = "default" | "muted"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  action?: React.ReactNode
  children: React.ReactNode
  headingId?: string
  size?: SectionHeaderSize
  tone?: SectionHeaderTone
}

export const SectionHeader = ({
  action,
  children,
  className,
  headingId,
  size = "responsive",
  tone = "default",
  ...props
}: SectionHeaderProps) => (
  <header className={clsx("flex w-full items-center justify-between gap-4", className)} {...props}>
    <h2
      className={clsx(
        "m-0 min-w-0 flex-1",
        size === "compact" ? "type-heading-4-caps" : "type-heading-4-caps md:type-heading-2-caps",
        tone === "muted" && "text-foreground-muted",
      )}
      id={headingId}
    >
      {children}
    </h2>
    {action != null && <div className="shrink-0">{action}</div>}
  </header>
)

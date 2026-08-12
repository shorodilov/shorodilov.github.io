import * as React from "react"
import clsx from "clsx"

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  leading?: React.ReactNode
  title?: React.ReactNode
  trailing?: React.ReactNode
}

export const PageHeader = ({ className, leading, title, trailing, ...props }: PageHeaderProps) => (
  <header
    className={clsx(
      "grid h-20 w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-page-gutter md:h-[5.75rem]",
      className,
    )}
    {...props}
  >
    <div className="min-w-0 justify-self-start">{leading}</div>
    {title != null ? (
      <h1 className="m-0 min-w-0 text-center type-heading-4-caps md:type-heading-2-caps">{title}</h1>
    ) : (
      <div aria-hidden="true" />
    )}
    <div className="min-w-0 justify-self-end">{trailing}</div>
  </header>
)

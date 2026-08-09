import * as React from "react"
import clsx from "clsx"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
    action?: React.ReactNode
    children: React.ReactNode
    headingId?: string
}

export const SectionHeader = ({ action, children, className, headingId, ...props }: SectionHeaderProps) => (
    <header className={clsx("flex w-full items-center justify-between gap-4", className)} {...props}>
        <h2 className="type-heading-4-caps md:type-heading-2-caps m-0 min-w-0 flex-1" id={headingId}>
            {children}
        </h2>
        {action != null && <div className="shrink-0">{action}</div>}
    </header>
)

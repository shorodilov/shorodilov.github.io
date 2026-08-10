import * as React from "react"
import clsx from "clsx"
import { type Profile } from "../../data/profile"

export interface ProfileIdentityProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    name: Profile["name"]
    role: Profile["role"]
    summary: Profile["summary"]
}

export const ProfileIdentity = ({
    className,
    name,
    role,
    summary,
    ...props
}: ProfileIdentityProps) => (
    <div className={clsx("flex max-w-80 flex-col items-center text-center", className)} {...props}>
        <p className="type-heading-3 m-0 break-words text-accent">{name}</p>
        <span className="type-caption-caps bg-surface-raised text-foreground rounded-round mt-3 px-2 py-1">
            {role}
        </span>
        <p className="type-body text-foreground mt-4 mb-0">{summary}</p>
    </div>
)

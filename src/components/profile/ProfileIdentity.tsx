import * as React from "react"
import clsx from "clsx"
import { type Profile } from "../../data/profile"

export interface ProfileIdentityProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  name: Profile["name"]
  role: Profile["role"]
  summary: Profile["summary"]
}

export const ProfileIdentity = ({ className, name, role, summary, ...props }: ProfileIdentityProps) => (
  <div className={clsx("flex max-w-80 flex-col items-center text-center", className)} {...props}>
    <p className="m-0 type-heading-3 break-words text-accent">{name}</p>
    <span className="mt-3 rounded-round bg-surface-raised px-2 py-1 type-caption-caps text-foreground">{role}</span>
    <p className="mt-4 mb-0 type-body text-foreground">{summary}</p>
  </div>
)

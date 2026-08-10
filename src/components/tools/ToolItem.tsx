import * as React from "react"
import clsx from "clsx"
import { type Tool } from "../../data/tool/types"
import { ToolBadge } from "./ToolBadge"

export interface ToolItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "children"> {
  icon: Tool["icon"]
  label: Tool["label"]
}

export const ToolItem = ({ className, icon, label, ...props }: ToolItemProps) => (
  <li
    className={clsx(
      "flex min-h-18 w-full items-center gap-1 rounded-control bg-surface p-2 text-foreground",
      className,
    )}
    {...props}
  >
    <ToolBadge aria-hidden="true" icon={icon} label={label} />
    <span className="min-w-0 type-heading-2 break-words">{label}</span>
  </li>
)

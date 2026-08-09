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
            "bg-surface text-foreground rounded-control flex min-h-18 w-full items-center gap-1 p-2",
            className,
        )}
        {...props}
    >
        <ToolBadge aria-hidden="true" icon={icon} label={label} />
        <span className="type-heading-2 min-w-0 break-words">{label}</span>
    </li>
)

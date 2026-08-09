import * as React from "react"
import clsx from "clsx"
import { type Tool } from "../../data/tool/types"

export interface ToolBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    icon: Tool["icon"]
    label: Tool["label"]
}

export const ToolBadge = ({ className, icon, label, ...props }: ToolBadgeProps) => (
    <span
        className={clsx(
            "bg-surface rounded-control inline-flex size-14 shrink-0 items-center justify-center overflow-hidden",
            className,
        )}
        {...props}
    >
        <img alt={label} className="size-9 object-contain" height={36} src={icon} width={36} />
    </span>
)

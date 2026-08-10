import * as React from "react"
import clsx from "clsx"

export type ActionLinkVariant = "primary" | "icon" | "compact"

export interface ActionLinkProps extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "aria-disabled" | "href"
> {
    disabled?: boolean
    href: string
    variant?: ActionLinkVariant
}

const variantClassNames: Record<ActionLinkVariant, string> = {
    primary:
        "type-button min-h-11 gap-2 rounded-round bg-action-primary px-6 py-2.5 text-action-primary-foreground hover:bg-action-primary-hover focus-visible:bg-action-primary-focus aria-disabled:bg-action-primary-disabled aria-disabled:text-action-primary-disabled-foreground aria-disabled:hover:bg-action-primary-disabled",
    icon: "type-button size-11 rounded-round bg-action-secondary p-2.5 text-action-secondary-foreground hover:bg-action-secondary-hover focus-visible:bg-action-secondary-focus aria-disabled:bg-action-secondary-disabled aria-disabled:text-action-secondary-disabled-foreground aria-disabled:hover:bg-action-secondary-disabled",
    compact:
        "type-button-sm min-h-6.5 rounded-round bg-action-tertiary px-2.5 py-1 text-action-tertiary-foreground hover:bg-action-tertiary-hover focus-visible:bg-action-tertiary-focus aria-disabled:bg-action-tertiary-disabled aria-disabled:text-action-tertiary-disabled-foreground aria-disabled:hover:bg-action-tertiary-disabled",
}

const getSafeRel = (rel: string | undefined, target: string | undefined) => {
    if (target !== "_blank") {
        return rel
    }

const values = new Set((rel ?? "").split(/\s+/).filter(Boolean))
    values.add("noopener")
    values.add("noreferrer")

    return Array.from(values).join(" ")
}

export const ActionLink = ({
    children,
    className,
    disabled = false,
    href,
    onClick,
    rel,
    role,
    tabIndex,
    target,
    variant = "primary",
    ...props
}: ActionLinkProps) => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        if (disabled) {
            event.preventDefault()
            return
        }

        onClick?.(event)
    }

    return (
        <a
            aria-disabled={disabled || undefined}
            className={clsx(
                "focus-visible:outline-focus-ring inline-flex shrink-0 cursor-pointer items-center justify-center border-0 no-underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed motion-reduce:transition-none",
                variantClassNames[variant],
                className,
            )}
            href={disabled ? undefined : href}
            onClick={handleClick}
            rel={getSafeRel(rel, target)}
            role={disabled ? (role ?? "link") : role}
            tabIndex={disabled ? -1 : tabIndex}
            target={target}
            {...props}
        >
            {children}
        </a>
    )
}

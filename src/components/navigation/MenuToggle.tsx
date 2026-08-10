import * as React from "react"
import clsx from "clsx"

export interface MenuToggleProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-controls" | "aria-expanded" | "aria-label" | "children"
> {
  controls: string
  open: boolean
}

export const MenuToggle = ({ className, controls, open, type = "button", ...props }: MenuToggleProps) => (
  <button
    aria-controls={controls}
    aria-expanded={open}
    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
    className={clsx(
      "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-control border-0 bg-transparent p-2.5 text-foreground-muted transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none",
      className,
    )}
    type={type}
    {...props}
  >
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      {open ? (
        <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      )}
    </svg>
  </button>
)

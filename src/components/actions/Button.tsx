import * as React from "react"
import clsx from "clsx"

export type ButtonVariant = "primary" | "icon"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "min-h-11 gap-2 rounded-round bg-action-primary px-6 py-2.5 text-action-primary-foreground hover:bg-action-primary-hover focus-visible:bg-action-primary-focus disabled:bg-action-primary-disabled disabled:text-action-primary-disabled-foreground disabled:hover:bg-action-primary-disabled",
  icon: "size-11 rounded-round bg-action-secondary p-2.5 text-action-secondary-foreground hover:bg-action-secondary-hover focus-visible:bg-action-secondary-focus disabled:bg-action-secondary-disabled disabled:text-action-secondary-disabled-foreground disabled:hover:bg-action-secondary-disabled",
}

export const Button = ({ children, className, type = "button", variant = "primary", ...props }: ButtonProps) => (
  <button
    className={clsx(
      "inline-flex shrink-0 cursor-pointer items-center justify-center border-0 type-button transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-not-allowed motion-reduce:transition-none",
      variantClassNames[variant],
      className,
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
)

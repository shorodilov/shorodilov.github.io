import * as React from "react"
import clsx from "clsx"

export type ColorTheme = "light" | "dark"
export type ThemeToggleVariant = "labeled" | "compact"

export interface ThemeToggleProps extends Omit<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    "children" | "onChange"
> {
    onThemeChange: (theme: ColorTheme) => void
    theme: ColorTheme
    variant?: ThemeToggleVariant
}

const SunIcon = () => (
    <svg aria-hidden="true" className="size-4.5 shrink-0" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="currentColor" r="3.5" />
        <path
            d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
        />
    </svg>
)

const MoonIcon = () => (
    <svg aria-hidden="true" className="size-4.5 shrink-0" fill="none" viewBox="0 0 24 24">
        <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8a8.5 8.5 0 1 0 11.5 11.5Z" fill="currentColor" />
    </svg>
)

interface ThemeOption {
    Icon: React.ComponentType
    label: string
    value: ColorTheme
}

const themeOptions: ThemeOption[] = [
    { Icon: SunIcon, label: "Light", value: "light" },
    { Icon: MoonIcon, label: "Dark", value: "dark" },
]

export const ThemeToggle = ({
    className,
    disabled,
    onThemeChange,
    theme,
    variant = "labeled",
    ...props
}: ThemeToggleProps) => {
    const groupId = React.useId()

    return (
        <fieldset
            className={clsx(
                "bg-surface text-foreground rounded-round m-0 inline-flex w-fit min-w-0 border-0 p-1 disabled:opacity-50",
                className,
            )}
            disabled={disabled}
            {...props}
        >
            <legend className="sr-only">Color theme</legend>
            {themeOptions.map(({ Icon, label, value }) => {
                const optionId = `${groupId}-${value}`
                const selected = theme === value

                return (
                    <div className="relative" key={value}>
                        <input
                            checked={selected}
                            className="peer sr-only"
                            id={optionId}
                            name={`color-theme-${groupId}`}
                            onChange={() => onThemeChange(value)}
                            type="radio"
                            value={value}
                        />
                        <label
                            className={clsx(
                                "type-button-sm peer-focus-visible:outline-focus-ring rounded-round inline-flex h-7 shrink-0 cursor-pointer items-center justify-center transition-colors duration-150 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-disabled:cursor-not-allowed motion-reduce:transition-none",
                                variant === "compact" ? "w-10 px-2" : "gap-1.5 px-2.5",
                                selected
                                    ? "bg-control-selected"
                                    : "hover:bg-surface-raised peer-disabled:hover:bg-transparent",
                            )}
                            htmlFor={optionId}
                        >
                            <Icon />
                            <span className={variant === "compact" ? "sr-only" : undefined}>{label}</span>
                        </label>
                    </div>
                )
            })}
        </fieldset>
    )
}

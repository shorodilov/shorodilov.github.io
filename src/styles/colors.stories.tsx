import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"

interface ColorSwatchData {
    label: string
    source: string
    swatchClassName?: string
    swatchVariable?: string
    value?: string
}

const referenceColors: ColorSwatchData[] = [
    {
        label: "Green 100",
        source: "--ref-color-green-100",
        swatchVariable: "--ref-color-green-100",
        value: "#59B53D",
    },
    {
        label: "Green 200",
        source: "--ref-color-green-200",
        swatchVariable: "--ref-color-green-200",
        value: "#3E7F2B",
    },
    {
        label: "Green 300",
        source: "--ref-color-green-300",
        swatchVariable: "--ref-color-green-300",
        value: "#366E25",
    },
    {
        label: "Green 400",
        source: "--ref-color-green-400",
        swatchVariable: "--ref-color-green-400",
        value: "#3E4A36",
    },
    {
        label: "Green 500",
        source: "--ref-color-green-500",
        swatchVariable: "--ref-color-green-500",
        value: "#333F2A",
    },
    {
        label: "Dark 100",
        source: "--ref-color-dark-100",
        swatchVariable: "--ref-color-dark-100",
        value: "#161616",
    },
    {
        label: "Dark 200",
        source: "--ref-color-dark-200",
        swatchVariable: "--ref-color-dark-200",
        value: "#262626",
    },
    {
        label: "Dark 300",
        source: "--ref-color-dark-300",
        swatchVariable: "--ref-color-dark-300",
        value: "#2D2D2D",
    },
    {
        label: "Dark 400",
        source: "--ref-color-dark-400",
        swatchVariable: "--ref-color-dark-400",
        value: "#424242",
    },
    {
        label: "White",
        source: "--ref-color-white",
        swatchVariable: "--ref-color-white",
        value: "#FFFFFF",
    },
]

const semanticColors: ColorSwatchData[] = [
    { label: "Background", source: "bg-background", swatchClassName: "bg-background" },
    { label: "Surface", source: "bg-surface", swatchClassName: "bg-surface" },
    { label: "Raised surface", source: "bg-surface-raised", swatchClassName: "bg-surface-raised" },
    { label: "Foreground", source: "bg-foreground", swatchClassName: "bg-foreground" },
    {
        label: "Muted foreground",
        source: "bg-foreground-muted",
        swatchClassName: "bg-foreground-muted",
    },
    { label: "Border", source: "bg-border", swatchClassName: "bg-border" },
    { label: "Accent", source: "bg-accent", swatchClassName: "bg-accent" },
    { label: "Primary action", source: "bg-action-primary", swatchClassName: "bg-action-primary" },
    {
        label: "Primary action hover",
        source: "bg-action-primary-hover",
        swatchClassName: "bg-action-primary-hover",
    },
    {
        label: "Primary action focus",
        source: "bg-action-primary-focus",
        swatchClassName: "bg-action-primary-focus",
    },
    {
        label: "Primary action foreground",
        source: "bg-action-primary-foreground",
        swatchClassName: "bg-action-primary-foreground",
    },
    {
        label: "Primary action disabled",
        source: "bg-action-primary-disabled",
        swatchClassName: "bg-action-primary-disabled",
    },
    {
        label: "Disabled action foreground",
        source: "bg-action-primary-disabled-foreground",
        swatchClassName: "bg-action-primary-disabled-foreground",
    },
    { label: "Focus ring", source: "bg-focus-ring", swatchClassName: "bg-focus-ring" },
]

const ColorSwatch = ({ label, source, swatchClassName, swatchVariable, value }: ColorSwatchData) => (
    <article className="rounded-card border-border bg-surface overflow-hidden border">
        <div
            aria-hidden="true"
            className={`border-border h-24 border-b ${swatchClassName ?? ""}`}
            style={swatchVariable ? { backgroundColor: `var(${swatchVariable})` } : undefined}
        />
        <div className="space-y-1 p-4">
            <h3 className="type-button-sm text-foreground">{label}</h3>
            <p className="type-caption text-foreground-muted break-all">{source}</p>
            {value && <p className="type-caption text-foreground-muted">{value}</p>}
        </div>
    </article>
)

interface ColorSectionProps {
    description: string
    title: string
    tokens: ColorSwatchData[]
}

const ColorSection = ({ description, title, tokens }: ColorSectionProps) => (
    <section className="space-y-4">
        <header className="max-w-readable space-y-2">
            <h2 className="type-heading-2 text-foreground">{title}</h2>
            <p className="type-body text-foreground-muted">{description}</p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {tokens.map((token) => (
                <ColorSwatch key={token.source} {...token} />
            ))}
        </div>
    </section>
)

const Colors = () => (
    <main className="bg-background p-page-gutter text-foreground min-h-screen">
        <div className="max-w-page space-y-section mx-auto">
            <header className="max-w-readable space-y-2">
                <h1 className="type-heading-1-caps">Colors</h1>
                <p className="type-body text-foreground-muted">
                    Reference values remain stable. Semantic utilities respond to the selected Storybook theme and form
                    the public color contract used by the interface.
                </p>
            </header>

            <ColorSection
                description="Private, theme-independent values supplied by the design reference."
                title="Reference palette"
                tokens={referenceColors}
            />
            <ColorSection
                description="Public Tailwind color utilities. Change the toolbar theme to verify each role in light and dark contexts."
                title="Semantic utilities"
                tokens={semanticColors}
            />
        </div>
    </main>
)

const meta = {
    title: "Foundations/Colors",
    component: Colors,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}

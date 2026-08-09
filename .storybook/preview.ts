// Suppress potential type resolution errors for Storybook's webpack5 preview types
// @ts-expect-error -- Storybook type definitions may not be available in the current TS configuration
import { type Preview } from "@storybook/react-webpack5"
import "../src/styles/global.css"

type Theme = "light" | "dark"

const defaultTheme: Theme = "dark"
const isTheme = (value: unknown): value is Theme => value === "light" || value === "dark"

const preview: Preview = {
    decorators: [
        (Story, { globals }) => {
            if (typeof document !== "undefined") {
                const theme = isTheme(globals.theme) ? globals.theme : defaultTheme
                document.documentElement.dataset.theme = theme
            }

            return Story()
        },
    ],
    globalTypes: {
        theme: {
            description: "Color theme for all stories",
            toolbar: {
                icon: "circlehollow",
                title: "Theme",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: defaultTheme,
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}
// noinspection JSUnusedGlobalSymbols
export default preview

import * as React from "react"
import { type Preview } from "@storybook/react-webpack5"
import "../src/styles/global.css"

type Theme = "light" | "dark"

const defaultTheme: Theme = "dark"
const isTheme = (value: unknown): value is Theme => value === "light" || value === "dark"

const preview: Preview = {
    decorators: [
        (Story, { globals }) => {
            if (typeof document !== "undefined") {
                document.documentElement.dataset.theme = isTheme(globals.theme) ? globals.theme : defaultTheme
            }

            return React.createElement(Story)
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

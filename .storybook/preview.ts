// Suppress potential type resolution errors for Storybook's webpack5 preview types
// @ts-expect-error -- Storybook type definitions may not be available in the current TS configuration
import { type Preview } from "@storybook/react-webpack5"

const preview: Preview = {
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

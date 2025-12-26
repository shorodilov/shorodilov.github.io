// @ts-ignore
import { type StorybookConfig } from "@storybook/react-webpack5"
import * as os from "node:os"

// noinspection JSUnusedGlobalSymbols
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-a11y", "@storybook/addon-docs"],
    framework: "@storybook/react-webpack5",
    webpackFinal: async (config: any, { cache }: any) => {
        if (os.platform() === "win32") {
            // Disable Storybook cache on Windows to prevent EBUSY errors
            // The cache parameter is Storybook's internal cache system, not webpack's cache
            if (cache && typeof cache.set === "function") {
                cache.set = () => Promise.resolve()
            }
        }
        return config
    },
}
// noinspection JSUnusedGlobalSymbols
export default config

// @ts-ignore
import { type StorybookConfig } from "@storybook/react-webpack5"
import * as os from "node:os"

// noinspection JSUnusedGlobalSymbols
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-a11y", "@storybook/addon-docs"],
    framework: "@storybook/react-webpack5",
    webpackFinal: async (config: any) => {
        if (os.platform() === "win32") {
            // Use memory cache on Windows to prevent EBUSY errors while maintaining caching benefits
            config.cache = config.cache || {}
            config.cache.type = "memory"
        }
        return config
    },
}
// noinspection JSUnusedGlobalSymbols
export default config

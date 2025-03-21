import { defineConfig, type RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { withZephyr } from "zephyr-rspack-plugin";

const pluginZephyrRsbuild = (): RsbuildPlugin => ({
  name: "plugin-zephyr-rsbuild",
  async setup(api) {
    api.modifyRspackConfig(async (config, { mergeConfig }) => {
      const zeConfig = await withZephyr()(config);
      mergeConfig(zeConfig);
    });
  }
});

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(mfConfig),
    pluginZephyrRsbuild()
  ],
  server: {
    port: 3002
  }
});

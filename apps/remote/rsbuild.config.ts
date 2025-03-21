import { defineConfig, type RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { withZephyr } from "zephyr-rspack-plugin";

const pluginZephyrRsbuild = (): RsbuildPlugin => ({
  name: "plugin-zephyr-rsbuild",

  pre: ["rsbuild:module-federation-enhanced", "RspackModuleFederationPlugin"],
  setup(api) {
    api.onBeforeCreateCompiler(async ({ bundlerConfigs }) => {
      if (bundlerConfigs.length > 1) {
        console.warn("Zephyr only supports one bundler config");
        console.warn("We'll try it with the first confid and see what happens");
      }
      bundlerConfigs[0] = await withZephyr()(bundlerConfigs[0]);
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

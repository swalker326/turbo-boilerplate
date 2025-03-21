import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { mfConfig } from "./module-federation.config";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
  server: {
    port: 3001
  },
  // moduleFederation: {
  //   options: mfConfig
  // },
  tools: {
    rspack: {
      plugins: [
        process.env.RSDOCTOR === "true" && new RsdoctorRspackPlugin(),
        TanStackRouterRspack({ target: "react", autoCodeSplitting: true })
      ]
    }
  }
});

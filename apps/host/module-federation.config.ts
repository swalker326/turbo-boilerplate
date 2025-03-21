import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export const mfConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3002/remoteEntry.js"
  },
  dts: false,
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react
    },
    "react-dom": {
      eager: true,
      singleton: true,
      requiredVersion: dependencies["react-dom"]
    }
  }
};

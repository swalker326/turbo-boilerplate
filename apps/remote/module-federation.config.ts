import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

export const mfConfig: ModuleFederationOptions = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Route": "./src/remote-entry.tsx"
  },
  dts: true
};

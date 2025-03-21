import type { ModuleFederationConfig } from "@rsbuild/core";

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Route": "./src/remote-entry.tsx"
  }
};

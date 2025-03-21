import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

export const mfConfig: ModuleFederationOptions = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3002/remoteEntry.js"
  },
  dts: true,
};

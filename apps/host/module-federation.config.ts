import type { ModuleFederationConfig } from "@rsbuild/core";

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3002/remoteEntry.js"
  },

};

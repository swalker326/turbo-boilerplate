import React from "react";
import ReactDOM from "react-dom/client";
import RemoteEntry from "./remote-entry";
import "./index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RemoteEntry />
    </React.StrictMode>
  );
}

import React from "react";
import { createRoot } from "react-dom/client";

function Render() {
  const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<h1>Incomplete homepage</h1>);
}

Render();

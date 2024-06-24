import React from "react";
import { createRoot } from "react-dom/client";

function Render() {
  const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      <>
        <h1>CatchJS Homepage</h1>
        <hr/>
        <p>CatchJS is a WIP website for people to learn javascript.</p>
        <a href="studio">STUDIO</a>
      </>
    );
}

Render();

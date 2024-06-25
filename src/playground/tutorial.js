import React from "react";
import { createRoot } from "react-dom";
import TableOfContents from "../components/docs/tableOfContents";
import Tutorial from "../components/docs/tutorial";
import "./tutorial.css"

function Render() {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <>
      <Tutorial/>
    </>
  );
}

Render();

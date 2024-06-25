import React from "react";
import { createRoot } from "react-dom";
import TableOfContents from "../components/docs/tableOfContents";
import Tutorial from "../components/docs/tutorial";

function Render() {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <>
      <TableOfContents/>
      <Tutorial/>
    </>
  );
}

Render();

import React from 'react';
import { createRoot } from "react-dom/client";
import Gui from "../components/gui/gui";
import Runtime from "catch-runtime";

function Catch() {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<Gui/>);
}


Catch()

function DebugVars() {
  self.Runtime = Runtime;
}

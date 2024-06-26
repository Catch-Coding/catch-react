import React from 'react';
import { createRoot } from "react-dom/client";
import Gui from "../components/gui/gui";
import Runtime from "catch-runtime";

function Catch() {
    const sandbox = document.createElement("iframe");
    sandbox.id = "sandbox";
    sandbox.style.display = "none";
    document.body.appendChild(sandbox);
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<Gui runtime={new Runtime(sandbox)}/>);
}


Catch();

function DebugVars() {
  self.Runtime = Runtime;
}

DebugVars();

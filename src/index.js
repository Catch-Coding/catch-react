import { createRoot } from "react-dom/client";
import Hello from "./Hello";
import MenuBar from "./components/menu-bar/menu-bar"

function Catch() {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<MenuBar/>);
    root.render(<Hello/>);
}


Catch()
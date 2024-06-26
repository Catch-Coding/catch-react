/*
    gui.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */

import React, { useRef } from 'react';
import MenuBar from './../menu-bar/menu-bar.jsx';
import CodeArea from './../code-area/code-area.jsx';
import { fileOpen, fileSave } from "browser-fs-access";
import "./gui.css";

function newCallback() {};
function saveCallback() {};

function Gui({runtime}) {
    const codeAreaValue = useRef("");
    const setCodeAreaValue = useRef(()=>{}); // a function to overwrite the code area's value. will be used for opening a file.
    function runCallback() {
        console.log(runtime.sandboxRun(codeAreaValue.current));
    };
    async function openCallback() {
        // set value function is in setCodeAreaValue.current.
        const blob = await fileOpen({
            extensions: [".ctch", ".json"],
            description: "CatchJS Project File",
            startIn: "downloads"
        });
        const reader = new FileReader(blob);
        reader.onloadend = () => {
            let obj;
            try {
                obj = JSON.parse(reader.result);
            } catch(e) {
                alert("Invalid CatchJS Project File");
                return;
            }
            setCodeAreaValue.current(obj.code)
        };
        reader.readAsText(blob);
    };
    return (
        <div className={"gui"}>
            <div className={"gui-container"}>
                <MenuBar newCallback={newCallback} saveCallback={saveCallback} openCallback={openCallback} runCallback={runCallback}/>
            </div>
            <div className={"codeContainer"}>
                <CodeArea bindValue={codeAreaValue} setValue={setCodeAreaValue}/>
            </div>
        </div>
    );

}

export default Gui;

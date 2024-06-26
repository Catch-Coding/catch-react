/*
    gui.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */

import React, { useRef } from 'react';
import MenuBar from './../menu-bar/menu-bar.jsx';
import CodeArea from './../code-area/code-area.jsx';
import { fileOpen, fileSave, supported } from "browser-fs-access";
import "./gui.css";

function Gui({runtime}) {
    const codeAreaValue = useRef("");
    const setCodeAreaValue = useRef(()=>{}); // a function to overwrite the code area's value. will be used for opening a file.
    const pName = useRef("");
    const set_pName = useRef(()=>{})
    function runCallback() {
        console.log(runtime.sandboxRun(codeAreaValue.current));
    };
    async function openCallback() {
        // set value function is in setCodeAreaValue.current.
        const blob = await fileOpen({
            extensions: [".ctch", ".json"],
            description: "CatchJS Project File (.ctch, .json)",
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
            if (obj == null || typeof obj !== "object" || Array.isArray(obj)) {
                alert("Invalid CatchJS Project File");
                return;
            }
            setCodeAreaValue.current(obj.code || "");
            set_pName.current(obj.projectName || "");
        };
        reader.readAsText(blob);
    };
    async function saveCallback() {
        const blob = new Blob([JSON.stringify({version: "testingv1", code: codeAreaValue.current, projectName: pName.current})], {type:"application/json"});
        const options = {
            fileName: "ProjectFile.ctch",
            extensions: [".ctch", ".json"],
            startIn: "downloads",
            excludeAcceptAllOption: true
        }
        await fileSave(blob, options);
    }
    function newCallback() {
        setCodeAreaValue.current("");
        set_pName.current("");
    }
    return (
        <div className={"gui"}>
            <div className={"gui-container"}>
                <MenuBar newCallback={newCallback} saveCallback={saveCallback} openCallback={openCallback} runCallback={runCallback} bindName={pName} setName={set_pName}/>
            </div>
            <div className={"codeContainer"}>
                <CodeArea bindValue={codeAreaValue} setValue={setCodeAreaValue}/>
            </div>
        </div>
    );

}

export default Gui;

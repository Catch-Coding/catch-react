/*
    gui.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */

import React, { useRef } from 'react';
import MenuBar from './../menu-bar/menu-bar.jsx';
import CodeArea from './../code-area/code-area.jsx';
import "./gui.css";

function newCallback() {};
function saveCallback() {};
function openCallback() {};

function Gui({runtime}) {
    const codeAreaValue = useRef("");
    function runCallback() {};
    return (
        <div className={"gui"}>
            <div className={"gui-container"}>
                <MenuBar newCallback={newCallback} saveCallback={saveCallback} openCallback={openCallback} runCallback={runCallback}/>
            </div>
            <div className={"codeContainer"}>
                <CodeArea ref={codeAreaValue}/>
            </div>
        </div>
    );

}

export default Gui;

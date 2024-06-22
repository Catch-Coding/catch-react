/*
    gui.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */

import React from 'react';
import MenuBar from './../menu-bar/menu-bar.jsx';
import CodeArea from './../code-area/code-area.jsx';
import "./gui.css";

function Gui() {
    return (
        <div>
            <div className="gui-container">
                <MenuBar/>
            </div>
            <div className="codeContainer">
                <CodeArea/>
            </div>
        </div>

    );

}

export default Gui;
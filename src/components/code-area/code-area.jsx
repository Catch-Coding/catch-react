/*
    code-area.jsx
    written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */
import React from 'react';
import "./code-area.css";

function CodeArea() {
    return (
        <div id="codeAreaContainer">
            <textarea id="codeArea" placeholder="CatchJS code goes here." autocorrect="off"></textarea>
        </div>
    );
}

export default CodeArea;

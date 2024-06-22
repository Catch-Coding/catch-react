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
            <textarea id="codeArea" placeholder="Catch code goes here."></textarea>
        </div>
    );
}

export default CodeArea;
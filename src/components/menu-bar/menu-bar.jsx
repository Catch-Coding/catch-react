/*
    menu-bar.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3.
 */

import React from 'react';
import './menu-bar.css';
import LogoSvg from '../../images/logo.svg';

function MenuBar({newCallback, saveCallback, openCallback, runCallback}) {
    return (
        <nav className="menu-bar">
                <img src={LogoSvg}/>
                <input type="text" placeholder="Project Name"></input>
                <button onClick={newCallback}>New</button>
                <button onClick={saveCallback}>Save</button>
                <button onClick={openCallback}>Open</button>
                <button onClick={runCallback}>Run</button>
        </nav>
    );
}

export default MenuBar;

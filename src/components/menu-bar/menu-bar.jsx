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
                <button onclick={newCallback||()=>{}}>New</button>
                <button onclick={saveCallback||()=>{}}>Save</button>
                <button onclick={openCallback||()=>{}}>Open</button>
                <button onclick={runCallback||()=>{}}>Run</button>
        </nav>
    );
}

export default MenuBar;

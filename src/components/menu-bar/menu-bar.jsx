/*
    menu-bar.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3.
 */

import React from 'react';
import './menu-bar.css';
import LogoSvg from '../images/logo.svg';

function MenuBar() {
    return (
        <nav className="menu-bar">
                <img src={LogoSvg}/>
                <input type="text" placeholder="Project Name"></input>
                <button>New</button>
                <button>Save</button>
                <button>Open</button>
                <button>Run</button>
        </nav>
    );
}

export default MenuBar;

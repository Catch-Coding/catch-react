/*
    menu-bar.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3.
 */

import React from 'react';
import './menu-bar.css';

function MenuBar() {
    return (
        <nav className="menu-bar">
            <ul>
                <li><a href="#placeholder">New</a></li>
                <li><a href="#placeholder">Save</a></li>
                <li><a href="#placeholder">Open</a></li>
                <li><a href="#placeholder">Run</a></li>
            </ul>
        </nav>
    );
}

export default MenuBar;
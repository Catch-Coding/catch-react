/*
    menu-bar.jsx
    Written for Catch React by H3L
    LICENSED UNDER THE GPL V3.
 */

import React, { useState, useRef, useEffect } from 'react';
import './menu-bar.css';
import LogoSvg from '../../images/logo.svg';

function MenuBar({newCallback, saveCallback, openCallback, runCallback, bindName, setName}) {
    const [projectName, setProjectName] = useState("");
    const ref = useRef("");
    useEffect(()=>{
        setName.current = (newVal) => {
            ref.current = newVal;
            bindName.current = newVal;
            setProjectName(newVal);
        }
        return () => (setName.current = () => {});
    })
    return (
        <nav className="menu-bar">
                <img src={LogoSvg}/>
                <input type="text" value={projectName} placeholder="Project Name" onChange={(e)=>(ref.current = e.target.value, bindName.current = e.target.value, setProjectName(e.target.value))}></input>
                <button onClick={newCallback}>New</button>
                <button onClick={saveCallback}>Save</button>
                <button onClick={openCallback}>Open</button>
                <button onClick={runCallback}>Run</button>
        </nav>
    );
}

export default MenuBar;

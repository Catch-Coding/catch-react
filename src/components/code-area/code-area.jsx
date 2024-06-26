/*
    code-area.jsx
    written for Catch React by H3L
    LICENSED UNDER THE GPL V3
 */
import React, { useState, useEffect } from 'react';
import "./code-area.css";

function CodeArea(props) {
    const [value, setValue] = useState("");
    const { bindValue, setValue : overwriteRef } = props;
    useEffect(()=>{
      overwriteRef.current = (newVal) => {
        bindValue.current = newVal;
        setValue(newVal)
      }
      return () => {
        overwriteRef.current = () => {};
      }
    })
    return (
        <div id="codeAreaContainer">
            <textarea id="codeArea"  value={value} placeholder="CatchJS code goes here." autocorrect="off" onChange={(e)=>(console.log(props), bindValue.current = e.target.value)}></textarea>
        </div>
    );
}

export default CodeArea;

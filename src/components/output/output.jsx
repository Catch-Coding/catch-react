import React from "react";
// import "./output.css";

function logToOutput(log) {
  // converts to text to span elements
  // anything that starts with ERROR will become red, INFO will become blue, WARNING will become yellow, DEBUG will become purple
  return log.map((text, key)=>(
    <span className={text.startsWith("ERROR")?"error":text.startsWith("INFO")?"info":text.startsWith("WARNING")?"warning":text.startsWith("DEBUG")?"debug":""} key={key.toString()}>
      {text}
      <br/>
    </span>
  ))
}

export default function outputBox({log}) {
  return (<div id="output">{logToOutput(log)}</div>)
}

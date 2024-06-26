import React from "react";
import Code from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function JavaScript({l, children}) {
  return <Code language="javascript" showLineNumbers={l} style={dark}>{children}</Code>
}

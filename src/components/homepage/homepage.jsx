import React from "react";
import "./homepage.css";
import LogoSvg from "../../images/logo.svg";

export default function Homepage() {
  return (
    <>
      <nav>
        <img src={LogoSvg}/>
        <a href="studio">Studio</a>
        <a href="tutorial">Tutorials</a>
      </nav>
      <h1>CatchJS Homepage</h1>
      <hr/>
      <p>CatchJS is a WIP website that can help people learn JavaScript</p>
      <p>In the future, CatchJS will include docs, tutorials, and an advanced studio.</p>
      <p>Currently, the website only includes a non-functional studio and some tutorials.</p>
    </>
  )
}

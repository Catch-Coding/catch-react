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
        <a href="https://discord.gg/btr8nNaWgc">Official Discord Server</a>
      </nav>
      <h1>CatchJS Homepage</h1>
      <hr/>
      <p>CatchJS is a WIP website that can help people learn JavaScript</p>
      <p>In the future, CatchJS will include docs, tutorials, and an advanced studio.</p>
      <p>Currently, the website only includes a bare-bones studio and some tutorials.</p>
      <p>For now you can go to the <a href="studio">studio</a> or see <a href="tutorial">some tutorials</a>.</p>
    </>
  )
}

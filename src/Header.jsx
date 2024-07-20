import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Logo from "./logo512.png";


const version = React.version;
function NewDiv() {
  return (
    <>
      <div className="NewDiv">
        <img src= {Logo} alt="Test" width = "60px" />
        <h1>The current Version of React is {version}</h1>
      </div>
    </>
  );
}

export default NewDiv;

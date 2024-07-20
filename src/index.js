import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
import NewDiv from "./Header";
import LoginPage from "./Components/LoginPage";
//import "./App.css";
import NavBar from "./Components/Navbar";
import MainContent from "./Components/MainContent";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>
);

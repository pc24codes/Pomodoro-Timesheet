import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
import NewDiv from "./Header";
import LoginPage from "./Components/LoginPage";
import "./App.css";
import MainContent from "./Components/MainContent";

import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "./Components/DatePicker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainContent />
    <DatePicker hours="40" time="month" />
    <DatePicker hours="5" time="week" />
  </React.StrictMode>
);

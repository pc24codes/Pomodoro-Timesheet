import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";

//Component imports
import App from "./App";
import LoginPage from "./Components/LoginPage";

//CSS Import
import "./App.css";

//React-bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import RegulariseTime from "./Components/RegulariseTime";
import InputTime from "./Components/RegulariseTime";

//MUI import
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputTime />
  </React.StrictMode>
);

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

// //MUI import
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

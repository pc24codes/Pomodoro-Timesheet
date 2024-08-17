import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";

//Component imports
import App from "./App";
import LoginPage from "./Components/LoginPage";
import UnderMaintanence from "./Components/UnderMaintanenceCard";

//CSS Import
import "./App.css";

//React-bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import RegulariseTime from "./Components/RegulariseTime";
import InputTime from "./Components/RegulariseTime";

//React router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./Components/MainContent";
import { Navbar } from "react-bootstrap";

//MUI import
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <UnderMaintanence />,
  },
  {
    path: "/RegularisePunch-in",
    element: <RegulariseTime />,
  },
  {
    path: "/Home",
    element: <App />,
    errorElement: <UnderMaintanence />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "pending",
    element: <UnderMaintanence />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React, { useState } from "react";
import "./App.css";
import RegulariseTime from "./Components/RegulariseTime";
import NavBar from "./Components/Navbar";

import DatePicker from "./Components/InsightsCard";

import MainContent from "./Components/MainContent";
import UnderMaintanence from "./Components/UnderMaintanenceCard";

import LoginPage from "./Components/LoginPage";

export default function App() {
  // const [squares, setSquares] = useState(boxes);

  // function toggle() {
  //   console.log("clicked!");
  // }

  // const squareElements = squares.map((square) => (
  //   <Box key={square.id} on={square.on} handleClick={toggle} />
  // ));

  return (
    <div>
      {/* <UserAuthContextProvider>My App</UserAuthContextProvider> */}
      <NavBar />
      <MainContent />

      {/* <SimpleSignin /> */}
      {/* {<LoginPage />} */}
      {/* <UnderMaintanence /> */}
    </div>
  );
}

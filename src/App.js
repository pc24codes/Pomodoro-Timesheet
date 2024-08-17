import logo from "./logo.svg";
import "./App.css";
import RegulariseTime from "./Components/RegulariseTime";
import NavBar from "./Components/Navbar";

import DatePicker from "./Components/InsightsCard";

import MainContent from "./Components/MainContent";
import UnderMaintanence from "./Components/UnderMaintanenceCard";

export default function App() {
  return (
    <>
      {/* <UserAuthContextProvider>My App</UserAuthContextProvider> */}
      <NavBar />
      <MainContent />

      {/* <SimpleSignin /> */}

      {/* <UnderMaintanence /> */}
    </>
  );
}

import logo from "./logo.svg";
import "./App.css";
import DatePicker from "./Components/DatePicker";
import MainContent from "./Components/MainContent";

export default function App() {
  return (
    <>
      <MainContent />
      <div className="Hours-indicator-cards">
        <DatePicker hours="40" time="month" />

        <DatePicker hours="5" time="week" />
        <DatePicker hours="5" time="Today" />
      </div>
    </>
  );
}

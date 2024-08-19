import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import DatePicker from "./InsightsCard";

//React-Bootstrap imports
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

//Logic
import clockin from "../ClockInLogic";
import clockout from "../ClockOutLogic";

//Icons
import { CgCoffee } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { IoMdPower } from "react-icons/io";

export default function MainContent() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  let dateToday = `${month} ${date.getDate()}`;

  //Below methods to capture clock-in and clock-out time

  const [clockInTime, setClockInTime] = useState("");
  const [clockOutTime, setClockOutTime] = useState("");

  const handleClockInTime = () => {
    const currentTimeAtClockIn = new Date().toLocaleTimeString();
    setClockInTime(currentTimeAtClockIn);
  };

  const handleClockOutTime = () => {
    const currentClockOutTime = new Date().toLocaleTimeString();
    setClockOutTime(currentClockOutTime);
  };

  return (
    <>
      {/* This renders the navbar from components folder */}
      <Container fluid className="mt-4 mb-5">
        <Card>
          {/* <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first"></Nav>
          </Card.Header> */}

          <Card.Body>
            {/* Below line will get dynamic date  */}
            <Card.Title>{dateToday}</Card.Title>

            {/* The Clock-in Button*/}
            <Button
              disabled={!!clockInTime}
              onClick={handleClockInTime}
              variant="success"
              className="me-2"
              id="clock-in-btn"
            >
              <MdLogin className="me-2" />
              Clock in
            </Button>

            {/* The start break Button*/}
            <Button
              className="hover-overlay"
              variant="outline-light"
              style={{
                borderColor: "#7D2DEC",
                borderWidth: "2px",
                color: "#7D2DEC",
              }}
            >
              <CgCoffee className="me-1" />
              Start break
            </Button>

            {/* The Clock-out Button*/}
            <Button
              disabled={!!clockOutTime}
              onClick={handleClockOutTime}
              variant="danger"
              className="ms-2"
              id="clock-out-btn"
            >
              <IoMdPower className="me-1" />
              Clock out
            </Button>
          </Card.Body>
        </Card>
      </Container>

      {/* Below section is for the insights  */}
      <Container fluid>
        <Card>
          <Card.Body>Today's Clock-in</Card.Body>
          <Card.Body
            id="Clockin-time-el"
            className="font-weight-bold"
            style={{ fontWeight: "800" }}
          >
            {clockInTime}
          </Card.Body>
        </Card>
        <br></br>
        <Card>
          <Card.Body>Today's Clock-out</Card.Body>
          <Card.Body id="Clockout-time-el" style={{ fontWeight: "800" }}>
            {clockOutTime}
          </Card.Body>
        </Card>
        <br></br>
      </Container>
      <Container fuid>
        <div className="Hours-indicator-cards">
          <DatePicker hours="40" time="month" />
          <DatePicker hours="5" time="week" />
          <DatePicker hours="5" time="Payday" />
        </div>
      </Container>
    </>
  );
}

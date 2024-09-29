import React, { useEffect, useState } from "react";
import Greeting from "./Greeting";

//Bootstrap-react imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { Modal, Form } from "react-bootstrap";

//icons
import { FaHome, FaRupeeSign, FaSignOutAlt, FaYoutube } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdPunchClock,
  MdAccountCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavBar() {
  let userName = "User";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [name, setName] = useState("");

  const handleSave = () => {
    setShow(false); // Close the modal
    localStorage.setItem("userName", name); // Save name to local storage
  };
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
      setShow(false); // Don't show the modal if the name is already saved
    }
  }, []);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Please enter your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example: Ravi Kumar"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <div className="d-flex align-items-center">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />

              <Navbar.Brand className="ms-3 mt-1">
                <Greeting />
                {`${userName}👋!`}
              </Navbar.Brand>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tickster Timesheet
                  <Badge bg="secondary" className="ms-2">
                    ADMIN
                  </Badge>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/home">
                    <FaHome className="me-2" />
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} to="/pending">
                    <MdSpaceDashboard className="me-2" />
                    Dashboard
                  </Nav.Link>

                  <Nav.Link as={Link} to="/RegularisePunch-in">
                    <MdPunchClock className="me-2" />
                    Regularise punch-in
                  </Nav.Link>

                  <Nav.Link as={Link} to="/pending">
                    <MdAccountCircle className="me-2" />
                    My Profile
                  </Nav.Link>

                  <Nav.Link as={Link} to="/pending">
                    <FaRupeeSign className="me-2" />
                    Pricing
                  </Nav.Link>

                  <NavDropdown.Divider />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

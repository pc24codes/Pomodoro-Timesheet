import React from 'react';
import Greeting from './Greeting';

//Bootstrap-react imports
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge'

//icons
import {FaHome,FaRupeeSign,FaSignOutAlt, FaYoutube } from "react-icons/fa";
import { MdSpaceDashboard, MdPunchClock } from "react-icons/md";

export default function NavBar() 
{
    let user = "Parasuram";
    
    return(
        <>
      {[false].map((expand) => (
        
        <Navbar 
        key={expand} 
        expand={expand} 
        className="bg-body-tertiary mb-3">
          <Container fluid>
          <div 
            className="d-flex align-items-center">
            
            <Navbar.Toggle 
            aria-controls={`offcanvasNavbar-expand-${expand}`} 
            />
            
            <Navbar.Brand 
            className='ms-3 mt-1' >
              {`Hello ${user}! `}
            </Navbar.Brand>
          </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start">
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title 
                id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tickster Timesheet<Badge bg="secondary" className='ms-2'>ADMIN</Badge>
                </Offcanvas.Title>
             
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="action1">
                  <FaHome className='me-2'/>
                  Home
                  </Nav.Link>
                  
                  <Nav.Link href="#action2">
                  <MdSpaceDashboard className='me-2'/>
                  Dashboard
                  </Nav.Link>
                  
                  <Nav.Link href="#action3">
                  <MdPunchClock className='me-2'/>
                  Regularise punch-in
                  </Nav.Link>
                  
                  <Nav.Link href="#action4">
                  <FaRupeeSign className='me-2'/>
                  Pricing
                  </Nav.Link>
                  
                  <Nav.Link href="#action5">
                  <FaSignOutAlt 
                  className='me-2'/>
                  Signout
                  </Nav.Link>

                    <NavDropdown.Divider />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
         
    )
}


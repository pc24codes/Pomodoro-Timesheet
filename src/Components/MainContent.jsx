import React from 'react';
import Navbar from "./Navbar"
import "../App.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


export default function MainContent() {
    
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[date.getMonth()]
    
    let dateToday = `${month} ${date.getDate()}`;
    
    return(
        <>
        <Navbar/>
        <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Today</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>{dateToday}</Card.Title>
        <Button variant="success">Clock in</Button>
        <span>  </span>
        <Button variant="outline-dark">Start break</Button>
        <span>  </span>
        <Button variant="danger">Clock out</Button>
      </Card.Body>
    </Card>
        
        </>
    )
}
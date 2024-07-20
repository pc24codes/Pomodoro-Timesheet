import React from 'react';
import Navbar from "./Navbar"
import "../App.css"

//React-Bootstrap imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


//Icons
import { CgCoffee } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { IoMdPower } from "react-icons/io";


export default function MainContent() {
    
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[date.getMonth()]
    
    let dateToday = `${month} ${date.getDate()}`;
    
    return(
        <>
        {/* This renders the navbar from components folder */}
        <Navbar/> 
        <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
        </Nav>
      </Card.Header>
      <Card.Body>
        {/* Below line will get dynamic date  */}
        <Card.Title>{dateToday}</Card.Title>  
        <Button href="#" variant="success" className='me-2'><MdLogin className='me-2'/>Clock in</Button>

        <Button className ="hover-overlay" variant="outline-light" style={{borderColor:'#7D2DEC', borderWidth:'2px', color:'#7D2DEC'}}><CgCoffee className='me-1'/>Start break</Button>
        
        <Button variant="danger"className='ms-2'><IoMdPower className='me-1'/>Clock out</Button>
      </Card.Body>
    </Card>
        
        </>
    )
}
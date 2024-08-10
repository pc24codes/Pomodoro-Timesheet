import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form"; 
import TimeTable from './ClockedDates';
import NavBar from './Navbar';
import Stack  from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card'
import { Row, Col, Container,Button } from 'react-bootstrap';



export default function InputTime() {
    
    return(
        <>

        <NavBar/>
        <Container className="mt-4 mb-4">
      <Card>
        <Card.Body>
          <Card.Title as="h4" className='mb-4'>Regularise your timesheet</Card.Title>
          <Row>
            {/* Clock-in Section */}
            <Col md={6}>
              <Form.Group controlId="clockInTime">
                <Form.Label>Clock-in Time</Form.Label>
                <Row>
                  <Col className='mb-3'>
                    <Form.Control type="number" placeholder="Hours" min="0" max="23" />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="Minutes" min="0" max="59" />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>

          <hr /> {/* Horizontal Divider */}

          <Row>
            {/* Clock-out Section */}
            <Col md={6} className='mt-3'>
              <Form.Group controlId="clockOutTime">
                <Form.Label>Clock-out Time</Form.Label>
                <Row>
                  <Col>
                    <Form.Control type="number" placeholder="Hours" min="0" max="23" />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="Minutes" min="0" max="59" />
                  </Col>
                  <Col>
                    <Button variant="primary">Submit</Button>
                  </Col>                    


                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
<TimeTable/>

      </>
    )
}



// {<Stack direction='horizontal' gap={3}>
// <div className="p-2" id="Time-input-ele">
// <Form.Label htmlFor="inputHours">
// Clock-in Hours
// </Form.Label>

// <Form.Control
// type='number'
// id='inputHours'
// min='00'
// max='23'
// />
// <Form.Label htmlFor="inputMinutes">
// Clock-in Minutes
// </Form.Label>

// <Form.Control
// type='number'
// id='inputHours'
// min='00'
// max='59'
// />
// </div>
// </Stack>


// <Stack direction="horizontal" gap={3}>
// <div className="p-2" id="Time-input-ele">
// <Form.Label htmlFor="inputHours">
// Clock-out Hours
// </Form.Label>

// <Form.Control
// type='number'
// id='inputHours'
// min='00'
// max='23'
// />
// <Form.Label htmlFor="inputMinutes">
// Clock-out Minutes
// </Form.Label>

// <Form.Control
// type='number'
// id='inputHours'
// min='00'
// max='59'
// />
// </div>
// </Stack>



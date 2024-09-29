import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import TimeTable from "./ClockedDates";
import NavBar from "./Navbar";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { Row, Col, Container, Button } from "react-bootstrap";

export default function InputTime() {
  const [manualClockInTime, setManualClockInTime] = useState("09:00");
  const [manualClockOutTime, setManualClockOutTime] = useState("18:00");

  const handleManualClockInTime = () => {};

  const handleManualClockOutTime = () => {};

  return (
    <>
      <NavBar />
      <Container className="mt-5 mb-5">
        <Card>
          <Card.Body>
            <Card.Title as="h4" className="mb-4">
              Regularise your timesheet
            </Card.Title>
            <Row>
              {/* Clock-in Section */}
              <Col md={4}>
                <Form>
                  <Form.Group controlId="clockInTime">
                    <Form.Label>Clock-in Time*</Form.Label>
                    <Row>
                      <Col className="mb-4">
                        <Form.Control
                          type="text"
                          value={manualClockInTime}
                          onChange={handleManualClockInTime}
                        />
                      </Col>
                      <Col className="mb-3">
                        <Form.Control
                          type="Date"
                          size="md"
                          placeholder="Date*"
                          required
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <hr /> {/* Horizontal Divider */}
            <Row>
              {/* Clock-out Section */}
              <Col md={4} className="mt-3">
                <Form>
                  <Form.Group controlId="clockOutTime">
                    <Form.Label>Clock-out Time*</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Hours*"
                          value={manualClockOutTime}
                          onChange={handleManualClockOutTime}
                          required
                        />
                      </Col>
                      <Col>
                        <Button variant="primary">Submit</Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <TimeTable />
    </>
  );
}

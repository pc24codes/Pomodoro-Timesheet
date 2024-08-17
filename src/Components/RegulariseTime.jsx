import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import TimeTable from "./ClockedDates";
import NavBar from "./Navbar";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { Row, Col, Container, Button } from "react-bootstrap";

import CustomDatePicker from "./CustomDatePicker";

// function AddDate() {}

export default function InputTime() {
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
              <Col md={6}>
                <Form>
                  <Form.Group controlId="clockInTime">
                    <Form.Label>Clock-in Time</Form.Label>
                    <Row>
                      <Col className="mb-4">
                        <Form.Control
                          type="number"
                          placeholder="Hours*"
                          min="0"
                          max="23"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Minutes*"
                          min="0"
                          max="59"
                          required
                        />
                      </Col>
                      <Col className="mb-3">
                        <Form.Control
                          type="Date"
                          size="md"
                          placeholder="Date*"
                          min="0"
                          max="23"
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
              <Col md={6} className="mt-3">
                <Form>
                  <Form.Group controlId="clockOutTime">
                    <Form.Label>Clock-out Time</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Hours*"
                          min="0"
                          max="23"
                          required
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Minutes*"
                          min="0"
                          max="59"
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

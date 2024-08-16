import React from "react";
import { Table, Container, Button } from "react-bootstrap";

export default function TimeTable() {
  return (
    <>
      <Container fluid>
        <hr></hr>
        <h4 className="mb-3">
          Recent history
          <Button variant="link" className="ms-2" href="#printTheTimeSheet">
            Print recent history
          </Button>
        </h4>
        <Table striped hover variant="light">
          <thead>
            {" "}
            {/*heading*/}
            <tr>
              <th>Date</th>
              <th>Clocked-in at </th>
              <th>Clocked-out at</th>
              <th>Total Hours</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {" "}
              {/* 1st row*/}
              <td>25-01-2024</td>
              <td>09.45</td>
              <td>18:45</td>
              <td>09:25</td>
            </tr>
            <tr>
              {" "}
              {/* 1st row*/}
              <td>26-01-2024</td>
              <td>09.45</td>
              <td>18:45</td>
              <td>09:25</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

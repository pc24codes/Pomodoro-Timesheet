import React from "react";
import { Card, Container } from "react-bootstrap";
import HoldingPage from "../comingSoon.jpg";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

export default function UnderMaintanence() {
  return (
    <>
      <NavBar />
      <div style={styles.pageContainer}>
        <Card style={styles.card}>
          <Card.Body>
            <Card.Text style={styles.text}>
              Something new is brewing. Stay tuned 🙌<br></br>
              <Link style={styles.text} to="/">
                Return to Home
              </Link>
            </Card.Text>
            <Card.Img variant="top" src={HoldingPage} style={styles.image} />
            <Card.Footer>
              <a href="https://www.freepik.com/free-vector/hand-drawn-construction-background_1583772.htm#fromView=search&page=2&position=3&uuid=59764291-fd4a-44db-be2d-fa28fb99d595">
                Image by freepik
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh", // Ensures it takes full viewport height
    overflow: "hidden", // Prevents scrolling
    margin: 0, // Resets any default margin
    backgroundColor: "#f8f9fa", // Light grey background
  },
  card: {
    width: "100%",
    maxWidth: "800px",
    height: "700px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "60%", // Adjusted to allow space for text
    objectFit: "cover",
  },
  text: {
    textAlign: "center",
    fontSize: "1.25rem",
    marginTop: "5px",
    color: "#333",
  },
};

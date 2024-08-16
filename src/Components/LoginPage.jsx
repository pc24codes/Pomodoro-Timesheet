import React from "react";
import "../App.css";
import signInImg from "../signIn-Art.jpg";
import logo from "../stopwatch-logo.png";
// import styles from "../login.module.css";

//MUI imports
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function LoginPage() {
  //const signInImage = "https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?t=st=1721583194~exp=1721586794~hmac=e7a6a45a02983a1cafaa382d2eacbee7e5808d6408b8d12b6b1ab699cd3c114e&w=740"

  return (
    <div className="sign-in-background">
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center vh-100"
      >
        <MDBCard className="sign-in-card">
          <MDBRow className="g-0">
            <MDBCol md="6" className="d-none d-md-block">
              <img
                src={signInImg}
                alt="Sign In"
                className="img-fluid sign-in-image"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column justify-content-center p-4">
                <div className="text-center mb-4">
                  <img
                    src={logo}
                    alt="Logo"
                    className="rounded-circle"
                    style={{ borderRadius: "50%", maxWidth: "15%" }}
                  />{" "}
                  {/* Add logo image */}
                </div>
                <h2 className="text-center mt-2 mb-4">
                  Tickster Timesheets 👋{" "}
                </h2>
                <h4 className="text-center mt-4 mb-4">Sign in</h4>

                <MDBInput
                  label="Email address"
                  id="email"
                  type="email"
                  className="mb-3 h-10"
                  size="sm"
                />
                <br></br>

                <MDBInput
                  label="Password"
                  id="password"
                  type="password"
                  className="mb-3"
                  size="sm"
                />
                <br></br>

                <MDBBtn color="dark" className="w-100 mb-3">
                  LOGIN
                </MDBBtn>
                <br></br>

                <div className="text-center">
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="text-center mt-2">
                  <a href="#!">Don't have an account? Register here</a>
                </div>

                <div style={{ fontSize: "12px" }} className="text-center mt-2 ">
                  © Parasuram
                </div>

                <div
                  className="text-center mt-2"
                  style={{ color: "black", fontSize: "12px" }}
                >
                  <a href="https://www.freepik.com/free-vector/sign-up-concept-illustration_20824341.htm#query=signup&position=0&from_view=keyword&track=sph&uuid=e4887d48-c3b4-4ed4-911f-4b88ddbbb943">
                    Image by storyset
                  </a>
                  <span> </span>on Freepik
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

/*

{<div className="text-center mb-4">
  <img src={logo} alt="Logo" className="rounded-circle" style={{borderRadius:"50%", maxWidth:"10%"}} /> {/* Add logo image */
//</div>}
// {<footer><a href="https://www.freepik.com/free-vector/sign-up-concept-illustration_20824341.htm#query=signup&position=0&from_view=keyword&track=sph&uuid=e4887d48-c3b4-4ed4-911f-4b88ddbbb943">Image by storyset</a> on Freepik</footer>}

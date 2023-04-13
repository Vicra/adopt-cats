import Container from "react-bootstrap/Container";

import React, { useRef } from "react";

import "./Register.css";
import SmallForm from "./Forms/SmallForm";
import LargeForm from "./Forms/LargeForm";

const BREAK_POINT = 1025;

function Register() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0];
  console.log("width:", width);
  return (
    <>
      {width < BREAK_POINT && (
        <Container className="container-form small-form">
          <SmallForm />
        </Container>
      )}

      {width >= BREAK_POINT && (
        <Container className="container-form large-form">
          <LargeForm />
        </Container>
      )}
    </>
  );
}

export default Register;

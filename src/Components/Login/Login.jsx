import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const { login } = require("../../services/users");

function Login(props) {
  
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  if(props.isLoggedIn) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();
    history.push('/home');
  }

  const findFormErrors = () => {
    const { email, password } = form;
    const newErrors = {};
    if (!email || email === "") newErrors.email = "Email cannot be empty";
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      newErrors.email = "Please enter valid email address.";
    }

    if (!password || password === "")
      newErrors.password = "Please cannot be empty";
    const passwordPattern = new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    );
    if (!passwordPattern.test(password)) {
      newErrors.password = "Password does not comply minimum requirements.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      const { email, password } = form;
      login(email, password);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
          <Form.Text>
            Minimum eight characters, at least one letter and one number
          </Form.Text>
        </Form.Group>

        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

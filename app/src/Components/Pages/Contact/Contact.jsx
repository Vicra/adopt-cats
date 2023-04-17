import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import ProfileCard from "./ProfileCard";

import { findFormErrors, sendMessage } from "./formValidation";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const CAPTCHA_CHARACTER_COUNT = 6;

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  function cleanUp(form) {
    return setForm({
      email: form.email ? form.email.trim().toLowerCase() : "",
      name: form.name ? form.name.trim() : "",
      message: form.message ? form.message.trim() : "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let user_captcha_value =
      document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha_value) === true) {
      const newErrors = findFormErrors(form, cleanUp);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        sendMessage(form).catch(console.error);
        alert("Message Sent");
      }
    } else {
      alert("Captcha Does not Match");
    }
  }

  useEffect(() => {
    loadCaptchaEnginge(CAPTCHA_CHARACTER_COUNT);
  }, [errors]);
  return (
    <>
      <Container className="mb-5 mt-3">
        <Row xs={1} lg={2}>
          <Col className="mb-3">
            <h1>Formulario de Contacto</h1>
            <Form onSubmit={handleSubmit}>
              <Row xs={1} sm={2}>
                <Col>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Nombre"
                      onChange={(e) => setField("name", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => setField("email", e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="comments">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setField("message", e.target.value)}
                />
              </Form.Group>

              <LoadCanvasTemplateNoReload />
              <Form.Control
                type="text"
                placeholder="Ingresa el valor del captcha"
                id="user_captcha_input"
                name="user_captcha_input"
                className="mb-3"
              />

              <Button variant="primary" type="submit" className="button-submit">
                Enviar
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.general}
              </Form.Control.Feedback>
            </Form>
          </Col>

          <Col className="col d-flex justify-content-center">
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

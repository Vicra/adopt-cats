import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import { register } from "../../../../services/users";
import findFormErrors from "../formValidation";

import Address from "../Inputs/Address";
import State from "../Inputs/State";
import Zipcode from "../Inputs/Zipcode";
import City from "../Inputs/City";
import Email from "../Inputs/Email";
import Password from "../Inputs/Password";
import Name from "../Inputs/Name";
import DNI from "../Inputs/DNI";
import AccountType from "../Inputs/AccountType";

const CAPTCHA_CHARACTER_COUNT = 6;

const SmallForm = () => {
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
      password: form.password ? form.password : "",
      confirmPassword: form.confirmPassword ? form.confirmPassword : "",
      name: form.name ? form.name.trim() : "",
      dni: form.dni ? form.dni.trim() : "",
      address: form.address ? form.address.trim() : "",
      role: form.role ? form.role : "",
      state: form.state ? form.state : "",
      zipcode: form.zipcode ? form.zipcode.trim() : "",
    });
  }

  useEffect(() => {
    loadCaptchaEnginge(CAPTCHA_CHARACTER_COUNT);
  }, [errors]);

  async function handleSubmit(e) {
    e.preventDefault();

    let user_captcha_value =
      document.getElementById("user_captcha_input").value;
    let user_captcha_value2 = document.getElementById(
      "user_captcha_input2"
    ).value;
    if (
      validateCaptcha(user_captcha_value) === true ||
      validateCaptcha(user_captcha_value2) === true
    ) {
      const newErrors = findFormErrors(form, cleanUp);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        const response = await register(form);
        console.log(response.details);
        if (!response.success) {
          setErrors({
            general: response.details,
          });
        } else {
          setErrors({});
        }
      }
    } else {
      alert("Captcha Does not Match");
    }
  }

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <h1>Nueva Cuenta</h1>
            <Email setField={setField} errors={errors} />
            <Password setField={setField} errors={errors} />
            <Password
              setField={setField}
              errors={errors}
              fieldName="confirmPassword"
            />
            <br />
            <Name setField={setField} errors={errors} />
            <DNI setField={setField} errors={errors} />
            <br />
            <Address setField={setField} errors={errors} />
            <City errors={errors} setField={setField} />
            <State setField={setField} errors={errors} />
            <Zipcode setField={setField} errors={errors} />
            <AccountType setField={setField} errors={errors} />
            <br />
            <LoadCanvasTemplateNoReload />
            <Form.Control
              type="text"
              placeholder="Ingresa el valor del captcha"
              id="user_captcha_input"
              name="user_captcha_input"
              className="mb-3"
            />
            <div className="button-submit-container">
              <Button variant="primary" type="submit" className="button-submit">
                Registrarse
              </Button>
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.general}
            </Form.Control.Feedback>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SmallForm;

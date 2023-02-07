import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import forIn from "lodash/forIn";

import { register } from "../../services/users";

function Register() {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const characters = "abc123";
    function generateString(length) {
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
    const captcha = generateString(6);

    async function handleSubmit(e) {
        e.preventDefault();

        //validate
        const newErrors = findFormErrors();
        console.log("newErrors", Object.keys(newErrors));
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("OK");
            // call to api
            const response = await register(form.email, form.password);
            console.log(response);
        }
    }

    function cleanUp(form) {
        return setForm({
            email: form.email ? form.email.trim().toLowerCase() : "",
            password: form.password ? form.password : "",
            confirmPassword: form.confirmPassword ? form.confirmPassword : "",
            name: form.name ? form.name.trim() : "",
            dni: form.dni ? form.dni.trim() : "",
            address: form.address ? form.address.trim() : "",
            role: form.role ? form.role : "",
        });
    }

    function findFormErrors() {
        const newErrors = {};
        cleanUp(form);
        const {
            email,
            password,
            confirmPassword,
            name,
            dni,
            address,
            role,
            zipcode,
            state,
        } = form;

        const requiredBody = {
            email,
            password,
            confirmPassword,
            name,
            role,
            dni,
            address,
            zipcode,
            state,
        };
        forIn(requiredBody, function (value, key) {
            if (!form[key]) {
                // newErrors[key] = `El campo'${key}' es requerido`;
                newErrors[key] = `Este campo es requerido`;
            } else {
                form[key] = value ? value.trim() : "";
            }
        });
        return newErrors;
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Registrarse</h1>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Correo Electrónico"
                    className="mb-3"
                >
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPassword"
                    label="Contraseña"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setField("password", e.target.value)}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingConfirmPassword"
                    label="Confirmar Contraseña"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"
                        placeholder="Confirmar Contraseña"
                        onChange={(e) =>
                            setField("confirmPassword", e.target.value)
                        }
                        isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="name"
                    label="Nombre Completo"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Nombre Completo"
                        onChange={(e) => setField("name", e.target.value)}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="dni"
                    label="Numero de Identidad/DNI (sin guiones)"
                    className="mb-3"
                >
                    <Form.Control
                        type="number"
                        placeholder="DNI"
                        onChange={(e) => setField("dni", e.target.value)}
                        isInvalid={!!errors.dni}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.dni}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="address"
                    label="Dirección Residencial"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Dirección"
                        style={{ height: "100px" }}
                        onChange={(e) => setField("address", e.target.value)}
                        isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.address}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="state"
                    label="Departamento"
                    className="mb-3"
                >
                    <Form.Select
                        aria-label="state"
                        onChange={(e) => setField("state", e.target.value)}
                        isInvalid={!!errors.state}
                    >
                        <option default>Departamento...</option>
                        <option value="Atlántida">Atlántida</option>
                        <option value="Colón">Colón</option>
                        <option value="Comayagua">Comayagua</option>
                        <option value="Copán">Copán</option>
                        <option value="Cortés">Cortés</option>
                        <option value="Choluteca">Choluteca</option>
                        <option value="El Paraíso">El Paraíso</option>
                        <option value="Francisco Morazán">
                            Francisco Morazán
                        </option>
                        <option value="Gracias a Dios">Gracias a Dios</option>
                        <option value="Intibucá">Intibucá</option>
                        <option value="Islas de la Bahía">
                            Islas de la Bahía
                        </option>
                        <option value="La Paz">La Paz</option>
                        <option value="Lempira">Lempira</option>
                        <option value="Ocotepeque">Ocotepeque</option>
                        <option value="Olancho">Olancho</option>
                        <option value="Santa Bárbara">Santa Bárbara</option>
                        <option value="Valle">Valle</option>
                        <option value="Yoro">Yoro</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.state}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="zipcode"
                    label="Código Postal"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="21101"
                        onChange={(e) => setField("zipcode", e.target.value)}
                        isInvalid={!!errors.zipcode}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.zipcode}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlId="role"
                    label="Selecciona el tipo de cuenta"
                    className="mb-3"
                >
                    <Form.Select
                        aria-label="role"
                        onChange={(e) => setField("role", e.target.value)}
                        isInvalid={!!errors.role}
                    >
                        <option default>Selecciona...</option>
                        <option value="1">Quiero adoptar</option>
                        <option value="2">Quiero dar en adopción</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.role}
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </Container>
    );
}

export default Register;

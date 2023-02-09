import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";

import findFormErrors from "./formValidation";

function Login() {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [tokens, setTokens] = useState({});

    const history = useHistory();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = findFormErrors(form);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const response = await login(form.email, form.password);
            console.log(response);
            if (response.success) {
                const { accessToken, refreshToken } = response.data;
                console.log(response.data);
                setTokens({ accessToken, refreshToken });
                history.push("/home");
            } else {
                setErrors({
                    email: response.details,
                });
            }
        }
    }

    return (
        <Container className="container-form">
            <h1>Iniciar Sesión</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="correo@mail.com"
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setField("password", e.target.value)}
                        isInvalid={!!errors.password}
                    />
                    <Form.Text className="text-muted">
                        Tu contraseña debe tener un caracter mayusculo, un
                        número y un caracter especial.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="button-submit-container">
                    <Button
                        variant="primary"
                        type="submit"
                        className="button-submit"
                    >
                        Iniciar
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;

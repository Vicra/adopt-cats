import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";

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
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const { accessToken, refreshToken } = await login(
                form.email,
                form.password
            );
            setTokens({ accessToken, refreshToken });
            console.log(tokens);
            history.push("/home");
        }
    }

    function findFormErrors() {
        const newErrors = {};
        const { email, password } = form;

        if (!email && email !== "") {
            newErrors.email = "Email cannot be empty";
        }
        // validate with regex
        if (!password && password !== "") {
            newErrors.password = "Password cannot be empty";
        }
        // validate with regex
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
            newErrors.password = "Please enter valid password.";
        }
        return newErrors;
    }

    return (
        <Container>
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
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
                <div className="button-submit">
                    <Button variant="primary" type="submit">
                        Iniciar
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;

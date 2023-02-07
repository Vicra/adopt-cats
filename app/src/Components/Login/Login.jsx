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
        return newErrors;
    }

    return (
        <Container>
            <h2>Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
                    <Form.Text className="text-muted">
                        Your password must have at least one uppercase letter,
                        one number, and one special character
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
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

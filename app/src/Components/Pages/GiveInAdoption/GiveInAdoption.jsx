import { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

const GiveInAdoption = (props) => {
  const [errors] = useState({});
  const [form, setForm] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  function handleSubmit() {}
  return (
    <Container className="container-form">
      <Row xs={1} lg={2}>
        <Col>
          <h1>Dar en Adopción</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                onChange={(e) => setField("name", e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="species">
              <Form.Label>Tipo de animal</Form.Label>
              <Form.Select
                aria-label="species"
                onChange={(e) => setField("species", e.target.value)}
                isInvalid={!!errors.species}
              >
                <option value="1">Perro</option>
                <option value="2">Gato</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.species}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="breed">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Terrier"
                onChange={(e) => setField("breed", e.target.value)}
                isInvalid={!!errors.breed}
              />
              <Form.Control.Feedback type="invalid">
                {errors.breed}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>Sexo</Form.Label>
              <Form.Select
                aria-label="sex"
                onChange={(e) => setField("sex", e.target.value)}
                isInvalid={!!errors.sex}
              >
                <option value="1">Macho</option>
                <option value="2">Hembra</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.sex}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="weigth">
              <Form.Label>Peso (en libras)</Form.Label>
              <Form.Control
                type="number"
                placeholder="20"
                onChange={(e) => setField("weigth", e.target.value)}
                isInvalid={!!errors.weigth}
              />
              <Form.Control.Feedback type="invalid">
                {errors.weigth}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="size">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select
                aria-label="size"
                onChange={(e) => setField("size", e.target.value)}
                isInvalid={!!errors.size}
                defaultValue={2}
              >
                <option value="1">Pequeño</option>
                <option value="2">Mediano</option>
                <option value="3">Grande</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.size}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthDate">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setField("birthDate", e.target.value)}
                isInvalid={!!errors.birthDate}
              />
              <Form.Text className="text-muted">
                En caso de no saber la fecha de nacimiento coloca el año
                aproximado y 1 de Enero
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.birthDate}
              </Form.Control.Feedback>
            </Form.Group>

            <UploadAndDisplayImage />
          </Form>
        </Col>
        <Col className="optional">
          <Container>
            <img src="adopt2.jpg" alt="" />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default GiveInAdoption;

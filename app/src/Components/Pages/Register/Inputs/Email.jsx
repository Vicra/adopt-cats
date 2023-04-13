import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Email = ({ errors, setField }) => {
  return (
    <>
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
    </>
  );
};

export default Email;

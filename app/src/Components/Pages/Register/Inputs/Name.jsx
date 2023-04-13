import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Name = ({ errors, setField }) => {
  return (
    <>
      <FloatingLabel controlId="name" label="Nombre Completo" className="mb-3">
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
    </>
  );
};

export default Name;

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const DNI = ({ errors, setField }) => {
  return (
    <>
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
    </>
  );
};

export default DNI;

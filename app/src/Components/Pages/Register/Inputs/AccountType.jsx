import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AccountType = ({ errors, setField }) => {
  return (
    <>
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
    </>
  );
};

export default AccountType;

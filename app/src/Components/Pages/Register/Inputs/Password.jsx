import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Password = ({ errors, setField, fieldName = "password" }) => {
  return (
    <>
      <FloatingLabel
        controlId={
          fieldName === "password"
            ? "floatingPassword"
            : "floatingConfirmPassword"
        }
        label={fieldName === "password" ? "Contraseña" : "Confirmar Contraseña"}
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setField(fieldName, e.target.value)}
          isInvalid={!!errors[fieldName]}
        />
        <Form.Control.Feedback type="invalid">
          {errors[fieldName]}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default Password;

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const City = ({ errors, setField }) => {
  return (
    <>
      <FloatingLabel controlId="city" label="Ciudad" className="mb-3">
        <Form.Control
          type="text"
          placeholder="21101"
          onChange={(e) => setField("city", e.target.value)}
          isInvalid={!!errors.city}
        />
        <Form.Control.Feedback type="invalid">
          {errors.city}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default City;

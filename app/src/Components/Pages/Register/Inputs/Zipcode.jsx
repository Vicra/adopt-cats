import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Zipcode = ({ errors, setField }) => {
  return (
    <>
      <FloatingLabel controlId="zipcode" label="Código Postal" className="mb-3">
        <Form.Control
          type="text"
          placeholder="21101"
          onChange={(e) => setField("zipcode", e.target.value)}
          isInvalid={!!errors.zipcode}
        />
        <Form.Control.Feedback type="invalid">
          {errors.zipcode}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default Zipcode;

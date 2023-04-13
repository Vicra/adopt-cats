import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Address = ({ errors, setField }) => {
  return (
    <>
      <FloatingLabel
        controlId="address"
        label="Dirección Residencial"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          placeholder="Dirección"
          style={{ height: "100px" }}
          onChange={(e) => setField("address", e.target.value)}
          isInvalid={!!errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default Address;

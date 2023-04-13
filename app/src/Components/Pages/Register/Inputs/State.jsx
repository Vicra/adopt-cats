import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const State = ({ errors, setField }) => {
  return (
    <>
      <FloatingLabel controlId="state" label="Departamento" className="mb-3">
        <Form.Select
          aria-label="state"
          onChange={(e) => setField("state", e.target.value)}
          isInvalid={!!errors.state}
        >
          <option default>Departamento...</option>
          <option value="Atlántida">Atlántida</option>
          <option value="Colón">Colón</option>
          <option value="Comayagua">Comayagua</option>
          <option value="Copán">Copán</option>
          <option value="Cortés">Cortés</option>
          <option value="Choluteca">Choluteca</option>
          <option value="El Paraíso">El Paraíso</option>
          <option value="Francisco Morazán">Francisco Morazán</option>
          <option value="Gracias a Dios">Gracias a Dios</option>
          <option value="Intibucá">Intibucá</option>
          <option value="Islas de la Bahía">Islas de la Bahía</option>
          <option value="La Paz">La Paz</option>
          <option value="Lempira">Lempira</option>
          <option value="Ocotepeque">Ocotepeque</option>
          <option value="Olancho">Olancho</option>
          <option value="Santa Bárbara">Santa Bárbara</option>
          <option value="Valle">Valle</option>
          <option value="Yoro">Yoro</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.state}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default State;

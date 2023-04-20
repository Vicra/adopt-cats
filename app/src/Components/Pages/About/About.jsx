import { Col, Container, Row } from "react-bootstrap";
import Stepper from "./AdoptStepper";
import FAQs from "./FAQs/FAQs";
import { GiveInStepper } from "./GiveInStepper/GiveInStepper";

const About = () => {
  return (
    <>
      <Container className="mb-5 mt-5">
        <Row xs={1} lg={2}>
          <Col>
            <h1>Como adoptar un animal</h1>
            <Stepper />
          </Col>
          <Col>
            <img src="adopt3.jpeg" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="mb-3">
        <Row xs={1} lg={2}>
          <Col>
            <img src="adopt4.jpeg" alt="" />
          </Col>
          <Col>
            <h1>Como dar en adopción un animal</h1>
            <GiveInStepper />
          </Col>
        </Row>
      </Container>

      <FAQs />
    </>
  );
};

export default About;

import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ImageSlider from "./ImageSlider";

const PetDetails = (props) => {
    return (
        <div className="wrapper">
            <Container className="container-form">
                <h1>Pet details</h1>
                <Row xs={1} sm={2}>
                    <Col>
                        <ImageSlider />
                    </Col>
                    <Col>
                        <strong>Nombre:</strong> Nombre
                        <h5>Información:</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id repellendus exercitationem, praesentium
                            voluptate cumque est beatae perferendis dolores
                            nobis et eaque ullam atque ut voluptatibus natus
                            aperiam laborum, sapiente unde!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PetDetails;

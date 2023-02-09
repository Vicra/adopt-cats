import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const PetCard = () => {
    return (
        <Container md="auto">
            <Row>
                <div className="img-container">
                    <img src="logo192.png" alt="" />
                </div>
            </Row>
            <Row>
                <h4>Nombre</h4>
                <ButtonToolbar
                    className="justify-content-between"
                    aria-label="Toolbar with Button groups"
                >
                    <Button variant="outline-secondary">Detalles</Button>
                    <Button variant="success">Adoptar</Button>
                </ButtonToolbar>
            </Row>
        </Container>
    );
};

export default PetCard;

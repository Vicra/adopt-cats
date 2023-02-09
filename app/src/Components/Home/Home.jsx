import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

import { useSelector } from "react-redux";
import PetCard from "../PetCard/PetCard";

function Home() {
    const displayedCats = useSelector((state) => state.cats).value;

    return (
        <div>
            <div id="background">
                {/* falla en mobile view con menu open */}
                {/* <h1 className="center-text">San Pedro Sula</h1> */}
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container className="container-form">
                    <h2>En Adopción</h2>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {displayedCats.map((cat) => (
                            <>
                                <Col>
                                    <PetCard {...cat} />
                                </Col>
                            </>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;

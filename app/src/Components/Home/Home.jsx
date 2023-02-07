import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

import CatCard from "../CatCard/CatCard";

import { useSelector } from "react-redux";

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
        <Container>
          <h2>Nuestas Mascotas</h2>
          <Row>
            {displayedCats.map((cat) => (
              <Col xs>
                <CatCard {...cat} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;

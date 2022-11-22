import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react"
import "./Home.css";

import CatCard from "../CatCard/CatCard"

import {getCats} from "../../services/cats"

function Home() {
  const [cats, setCats] = useState([]);
  useEffect( ()=> {
    async function fetchData() {
      console.log("getcats")
      setCats(await getCats())
    }
    fetchData();
  }, [])
  
  return (
      <Container>
        <h2>Our Cats</h2>
        <Row>
          {cats.map((cat) => (
            <Col lg>
              <CatCard {...cat}/>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default Home;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from "axios";

import { useState } from 'react';

import Card from "../Card"

function Cats(props) {
  const [cats, setCats] = useState([])

  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats',
    params: {name: 'any', offset: '0'},
    headers: {'X-Api-Key': '8I5WKinqRnySQO3moxyqbw==zy4om9QVXoSingY4'}
  };

  axios.request(options).then(function (response) {
    setCats(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <Container>
        <h2>Our Kitties</h2>
        <Container>
          <Row>
            {cats.map((cat) => (
              <Col lg>
                <Card {...cat}/>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      
    </div>
    
    // bstrap grid
    // bstrap Cards
  );
}

export default Cats;
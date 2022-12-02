import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CatCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_link}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <strong>Breed:</strong> {props.name}<br/>
          <strong>Life Expentancy:</strong> {props.max_life_expectancy}<br/>
          <strong>Origin:</strong> {props.origin}<br/>
          <strong>Size:</strong> {props.length}<br/>
        </Card.Text>
        <Button variant="primary">Adopt me</Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_link} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.length}
          {props.origin}
        </Card.Text>
        <Button variant="primary">Adopt me</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProfileCard() {
  return (
    <Card style={{ width: "18rem" }} className="text-center mt-3">
      <Card.Img src="profile.jpeg" />
      <Card.Body>
        <Card.Title>Victor Ramirez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Software developer
        </Card.Subtitle>
        <Card.Text>
          Soy desarrollador web en San Pedro Sula, construyendo sitios web.
        </Card.Text>
        <Button variant="primary">Enviar un mensaje</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;

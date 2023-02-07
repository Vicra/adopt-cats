import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="/">AdoptaHn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Acerca de Nosotros</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">Inicia Sesión</NavDropdown.Item>
              <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";

function MyNavbar() {
  const history = useHistory();
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  async function logout() {
    window.localStorage.clear();
    history.push("/login?loggedOut=1");
    history.go("/login?loggedOut=1");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="low_transparent2.png" alt="" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: "250px" }} navbarScroll>
            {isLoggedIn && <Nav.Link href="/give-in">Dar en Adopción</Nav.Link>}
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link href="/about">Acerca de Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn && (
            <>
              <div style={{ paddingRight: 5 }}>
                <PersonCircle />
              </div>
              <NavDropdown title="Cuenta" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Mi Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button onClick={logout} className="btn-danger">
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">Inicia Sesión</NavDropdown.Item>
                <NavDropdown.Item href="/register">
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

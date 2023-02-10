import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHistory } from "react-router-dom";

function MyNavbar() {
    const history = useHistory();
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");

    async function logout() {
        console.log("excecuting logout...");
        window.localStorage.clear();
        history.push("/login");
        history.go("/login");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">AdoptaHn</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: "250px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/give-in">Dar en Adopción</Nav.Link>
                        <Nav.Link href="/contact">Contacto</Nav.Link>
                        {!isLoggedIn && (
                            <NavDropdown
                                title="Cuenta"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="/login">
                                    Inicia Sesión
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/register">
                                    Registrarse
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {isLoggedIn && (
                            <Button onClick={logout} className="btn-danger">
                                Logout
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

// import { useState } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useDispatch } from 'react-redux'
import { setQuery } from "../../features/query/querySlice"

function MyNavbar() {
    const dispatch = useDispatch();
    const [searchField, setsearchField] = useState("")

    const handleSubmit = () => {
      dispatch(setQuery(searchField))
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">AdoptaHn</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                    <Form className="d-flex" 
                      // onClick={search}
                      >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            // onChange={(e) => dispatch(setQuery(e.target.value)) }
                            onChange={(e) => setsearchField(e.target.value)}
                        />
                        <Button variant="outline-success"
                          onClick={handleSubmit}
                          >
                            Search
                          </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar2 = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link > <Link to="/fornecedor">Fornecedor</Link></Nav.Link>
                    <Nav.Link > <Link to="/peca">Peça</Link></Nav.Link>
                    <Nav.Link > <Link to="/cliente">Cliente</Link></Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar2;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <Navbar bg="dark" className="container-fluid" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">trapping</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">ropa</Nav.Link>
          <Nav.Link href="#features">accesorios</Nav.Link>
          <Nav.Link href="#pricing">contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd MMMM D YYYY ")}</p>
        <p>{moment().format(" h:mm:ss a")}</p>
      </div>
      <div className="d-flex my-2 bg-light p-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover speed={100}>
          I can be a React component, multiple React components, or just some
          text.....I can be a React component, multiple React components, or
          just some text.....
        </Marquee>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">icon</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

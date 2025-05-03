import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa"; // 🔍 Import Search Icon

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://via.placeholder.com/40"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          MyCompany
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarScroll">
          {/* Left Navigation Items */}
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#xyz">XYZ</Nav.Link>
            <Nav.Link href="#find-job">Find a Job</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: '400px' }} // 👈 width badhayi gayi
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* Auth Buttons */}
          <div className="d-flex">
            <Button variant="outline-primary" className="me-2">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

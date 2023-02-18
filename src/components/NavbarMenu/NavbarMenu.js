import React from "react";
import PropTypes from "prop-types";
import "./NavbarMenu.scss";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const NavbarMenu = (props) => {
  return (
    <div className="NavbarMenu">
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#generators">Text Wizard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/generators">Generators</Nav.Link>
              <Nav.Link href="/converters">Converters</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  );
};

NavbarMenu.propTypes = {};

NavbarMenu.defaultProps = {};

export default NavbarMenu;

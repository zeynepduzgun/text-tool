import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="Header">
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
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

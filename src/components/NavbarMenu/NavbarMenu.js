import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NavbarMenu.scss";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ToolMenu from "../ToolMenu/ToolMenu";

const NavbarMenu = (props) => {
  const [toolMode, setToolMode] = useState(0);

  return (
    <div className="NavbarMenu">
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Text Wizard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setToolMode(0)} href="#generator">
                Generators
              </Nav.Link>
              <Nav.Link onClick={() => setToolMode(1)} href="#converter">
                Converters
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToolMenu toolMode={toolMode} />
    </div>
  );
};

NavbarMenu.propTypes = {};

NavbarMenu.defaultProps = {};

export default NavbarMenu;

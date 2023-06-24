import React from "react";
import {BsCart3 } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import "./Header.css";
import CelebalLogo from "../Assets/Images/celebal.webp"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={CelebalLogo} width="250" height="50" alt="Brand logo" />
          </Navbar.Brand>
          <Nav className="links">
            <NavLink to="/" className="text-decoration-none text-light ">
              PRODUCT
            </NavLink>
            <NavLink to="/cart" ><BsCart3 size={32}/> </NavLink>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;


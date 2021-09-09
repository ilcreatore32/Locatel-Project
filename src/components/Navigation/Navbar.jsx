import React from "react";
import "./Navbar.css";

/* React- Bootstrap */
import NavbarB from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/* Components */
import Request from "../Request/Request";
import Window from "../Modal/Modal";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <NavbarB bg="dark" variant="dark">
        <Container>
          <NavbarB.Brand href="/">
            <img
              alt="Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Proyecto Locatel
          </NavbarB.Brand>
          <NavbarB.Collapse className="justify-content-end">
            <NavbarB.Text>
              <Window title="Crear una Solicitud" variant="outline-success">
                <Request />
              </Window>
            </NavbarB.Text>
          </NavbarB.Collapse>
        </Container>
      </NavbarB>
    </>
  );
}

export default Navbar;

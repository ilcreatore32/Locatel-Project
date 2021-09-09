import React from "react";
import "./NavMenu.css";

/* React Router */
import { NavLink } from "react-router-dom";

/* React- Bootstrap */
import Nav from "react-bootstrap/Nav";

/* Font Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
  return (
    <>
      <Nav className="justify-content-center app-menu" activeKey="/home">
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="menu-link-active"
            to="/"
            exact
          >
            <div className="menu-link">
              <FontAwesomeIcon icon={faHome} />
              <span>Inicio</span>
            </div>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="menu-link-active"
            to="/Profile"
          >
            <div className="menu-link">
              <FontAwesomeIcon icon={faUser} />
              <span>Perfil</span>
            </div>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="menu-link-active"
            to="/Departments"
          >
            <div className="menu-link">
              <FontAwesomeIcon icon={faCubes} />
              <span>Departamentos</span>
            </div>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link"
            activeClassName="menu-link-active"
            to="/Users"
          >
            <div className="menu-link">
              <FontAwesomeIcon icon={faUsersCog} />
              <span>Usuarios</span>
            </div>
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavMenu;

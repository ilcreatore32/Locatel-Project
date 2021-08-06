import React from 'react';
import { useState } from 'react';
import './App.css';

/* Components */
import Login from './components/Login/Login';
import Window from './components/Modal/Modal';

/* React- Bootstrap */
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

/* React-Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import logo from './assets/images/logo.png';

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"   "}
            Proyecto Locatel
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Router>
        <div>
          <Nav fill variant="tabs bg-dark" defaultActiveKey="/home">
            <Nav.Item>
              <NavLink
                className="tab text-white nav-link"
                activeClassName="tab-active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="tab text-white nav-link"
                activeClassName="tab-active"
                to="/Link-1"
              >
                Link 1
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="tab text-white nav-link"
                activeClassName="tab-active"
                to="/Link-2"
              >
                Link 2
              </NavLink>
            </Nav.Item>
          </Nav>
          <Switch>
            <Route path="/Link-2">
              
            </Route>
            <Route path="/Link-1">
            
            </Route>
            <Route path="/">
              <Window title="Inicio de Sesión" button="Inicio de Sesión">
                <Login />
              </Window>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App

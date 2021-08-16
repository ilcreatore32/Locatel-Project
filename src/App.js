import React from "react";
import "./App.css";

/* Pages */
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NoMatch from "./pages/NoMatch/NoMatch";

/* Components */
import Request from "./components/Request/Request";
import Window from "./components/Modal/Modal";

/* React- Bootstrap */
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

/* React-Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "./assets/images/logo.png";

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
            />{" "}
            Proyecto Locatel
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Window title="Crear una Solicitud">
                <Request />
              </Window>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <div className="vertical-grid">
          <div className="vertical-navbar">
            <Nav className="flex-column">
              <div className="link">
                <NavLink
                  className="nav-link"
                  activeClassName="tab-active"
                  to="/"
                  exact
                >
                  Inicio
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  className="nav-link"
                  activeClassName="tab-active"
                  to="/Profile"
                >
                  Perfil
                </NavLink>
              </div>
              <div className="link">
                <NavLink
                  className="nav-link"
                  activeClassName="tab-active"
                  to="/plplp"
                >
                  Link 2
                </NavLink>
              </div>
            </Nav>
          </div>
          <Switch>
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/Profile" component={Profile} />
              {/* <Route path='*' component={NoMatch} /> */}
            </Container>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

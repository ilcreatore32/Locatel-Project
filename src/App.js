import React from "react";
import "./App.css";

/* Pages */
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Departments from "./pages/Departments/Deparments";
import Users from './pages/Users/Users';
import NoMatch from "./pages/NoMatch/NoMatch";

/* Components */
import Navbar from "./components/Navigation/Navbar";
import NavMenu from "./components/Navigation/NavMenu";

/* React-Bootstrap */
import Container from "react-bootstrap/Container";

/* React-Router */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <NavMenu />
        <Container className="app-view">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Departments" component={Departments} />
            <Route path="/Users" component={Users} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;

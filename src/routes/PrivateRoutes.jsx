import React from "react";

/* Private Routes */
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Departments from "../pages/Departments/Deparments";
import Users from "../pages/Users/Users";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("user")) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/Login", state: { from: props.location } }}
        />
      )
    }
  />;
};

function PrivateRoutes() {
  return (
    <>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/Profile/:id" component={Profile} />
      <PrivateRoute exact path="/Departments" component={Departments} />
      <PrivateRoute exact path="/Users" component={Users} />
    </>
  );
}

export default PrivateRoutes;

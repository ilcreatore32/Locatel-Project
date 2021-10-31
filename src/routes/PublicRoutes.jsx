import React from "react";

/* Public Routes */
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import { Route } from "react-router-dom";

function PublicRoutes() {
  return (
    <>
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
    </>
  );
}

export default PublicRoutes;

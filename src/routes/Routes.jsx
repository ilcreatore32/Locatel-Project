import React from "react";

/* Routes */
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

/* NoMatch 404 */
import NoMatch from "../pages/NoMatch/NoMatch";

/* React-Router */
import { Route } from "react-router-dom";

function Routes() {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
      <Route path="*" component={NoMatch} />
    </>
  );
}

export default Routes;

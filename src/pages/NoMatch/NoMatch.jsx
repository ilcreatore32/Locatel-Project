import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();
  return (
    <>
      <h1>Error 404</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </>
  );
}

export default NoMatch;

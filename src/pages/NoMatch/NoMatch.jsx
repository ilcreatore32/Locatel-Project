import React from "react";
import "./NoMatch.css";

/* React-Router */
import { useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();
  return (
    <>
      <div className="error-view">
        <h2>Error 404</h2>
        <h3>
          No match found for <code>{location.pathname}</code>
        </h3>
      </div>
    </>
  );
}

export default NoMatch;

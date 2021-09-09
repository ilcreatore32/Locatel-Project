import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="spinner-container">
        <ReactLoading
          type="cylon"
          color="springgreen"
          height={"12%"}
          width={"12%"}
        />
      </div>
    </>
  );
}

export default Loading;

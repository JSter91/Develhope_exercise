import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>
        404 Not Found <br></br> <Link to="/">back to home</Link>
      </h2>
    </>
  );
}

export default NotFound;

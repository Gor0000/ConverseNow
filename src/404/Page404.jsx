import React from "react";
import "./Page404.css";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div className="page404Container">
      <div className="page404Wrapper">
        <h1>404</h1>
        <p>Page not found.</p>
        <NavLink to={'/Home'}>Go to home</NavLink>
      </div>
    </div>
  );
}

export default Page404;

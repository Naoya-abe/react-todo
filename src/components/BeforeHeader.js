import React from "react";
import { Link } from "react-router-dom";

import paths from "../config/paths";

import "../styles/components/Header.scss";

const BeforeHeader = () => {
  return (
    <div className="header">
      <div className="ui secondary menu">
        <div className="item">
          <Link to={paths.todos.list}>Home</Link>
        </div>
        <div className="right menu">
          <div className="ui item">
            <Link to={paths.signup.main} className="to-signup">
              Sign up
            </Link>
            <Link to={paths.signin.main} className="to-signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeHeader;

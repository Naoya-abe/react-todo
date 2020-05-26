import React from "react";
import { Link } from "react-router-dom";

import paths from "../config/paths";

import "../styles/components/Header.scss";

const AfterHeader = () => {
  return (
    <div className="header">
      <div className="ui secondary menu">
        <div className="item">
          <Link to={paths.todos.list}>Home</Link>
        </div>
        <div className="item">
          <Link to={paths.todos.create}>Create</Link>
        </div>
        <div className="right menu">
          <div className="ui item">
            <Link to={paths.signout.main}>Sign out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHeader;

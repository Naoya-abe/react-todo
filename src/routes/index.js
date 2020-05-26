import React from "react";

import { AfterRoutes, BeforeRoutes } from "./parents";

import "../styles/index.scss";

const Routes = () => {
  return (
    <div id="wrapper">
      <div className="ui container">
        {/* {window.isAuthed ? <AfterRoutes /> : <BeforeRoutes />} */}
        {0 ? <AfterRoutes /> : <BeforeRoutes />}
      </div>
    </div>
  );
};

export default Routes;

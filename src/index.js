import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import history from "./history";

import Routes from "./routes";

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.querySelector("#root")
);

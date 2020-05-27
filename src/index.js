import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import thunk from "redux-thunk";

import { checkSession } from "./utils";
import history from "./history";
import Routes from "./routes";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const main = async () => {
  window.isAuthed = await checkSession();
  ReactDOM.render(
    <Provider store={Store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>,
    document.querySelector("#root")
  );
};

main();

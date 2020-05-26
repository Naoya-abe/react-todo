import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { SignInRoutes, SignUpRoutes, TodoRoutes } from "../../children";

import { BeforeHeader } from "../../../components";

const BeforeRoutes = () => {
  return (
    <React.Fragment>
      <BeforeHeader />
      <Switch>
        <Route path="/signin" component={SignInRoutes} />
        <Route path="/signup" component={SignUpRoutes} />
        <Route path="/todos" component={TodoRoutes} />
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default BeforeRoutes;

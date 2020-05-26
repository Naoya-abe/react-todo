import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MypageRoutes, TodoRoutes, SignOutRoutes } from "../../children";

import { AfterHeader } from "../../../components";

const AfterRoutes = () => {
  return (
    <React.Fragment>
      <AfterHeader />
      <Switch>
        <Route path="/me" component={MypageRoutes} />
        <Route path="/todos" component={TodoRoutes} />
        <Route path="/signout" component={SignOutRoutes} />
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default AfterRoutes;

import React from "react";
import { Switch, Route } from "react-router-dom";

import paths from "../../config/paths";

import { SignUpMain, SignUpThanks } from "../../pages/SignUp";

const SignUpRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.signup.main} component={SignUpMain} />
        <Route exact path={paths.signup.thanks} component={SignUpThanks} />
      </Switch>
    </React.Fragment>
  );
};

export default SignUpRoutes;

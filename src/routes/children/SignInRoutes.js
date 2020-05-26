import React from "react";
import { Switch, Route } from "react-router-dom";

import paths from "../../config/paths";

import SignIn from "../../pages/SignIn";

const SignInRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.signin.main} component={SignIn} />
      </Switch>
    </React.Fragment>
  );
};

export default SignInRoutes;

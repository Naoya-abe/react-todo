import React from "react";
import { Switch, Route } from "react-router-dom";

import paths from "../../config/paths";

import SignOut from "../../pages/SignOut";

const SignOutRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.signout.main} component={SignOut} />
      </Switch>
    </React.Fragment>
  );
};

export default SignOutRoutes;

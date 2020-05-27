import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { MypageRoutes, TodoRoutes, SignOutRoutes } from "../../children";
import { AfterHeader } from "../../../components";
import { fetchMe } from "../../../redux/actions/me";

const AfterRoutes = (props) => {
  const { fetchMe } = props;

  useEffect(() => {
    (async () => {
      try {
        await fetchMe();
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchMe]);

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

export default connect(null, { fetchMe })(AfterRoutes);

import React from "react";
import { Switch, Route } from "react-router-dom";

import paths from "../../config/paths";

import { MypageDelete, MypageEdit, MypageMain } from "../../pages/Mypage";

const MypageRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.mypage.delete} component={MypageDelete} />
        <Route exact path={paths.mypage.edit} component={MypageEdit} />
        <Route exact path={paths.mypage.main} component={MypageMain} />
      </Switch>
    </React.Fragment>
  );
};

export default MypageRoutes;

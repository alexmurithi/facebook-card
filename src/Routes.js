import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const FacebookCard = lazy(() => import("./pages/FacebookCard"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={FacebookCard} />
    </Switch>
  );
};

export default React.memo(Routes);

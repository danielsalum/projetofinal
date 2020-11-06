import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./views/Login";
import List from "./views/List";
import Files from "./views/Files";
import Repo from "./views/Repo";

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path={"/login"} exact={true} component={Login} />
      <Route path={"/content"} exact={true} component={List} />
      <Route path={"/files"} exact={true} component={Files} />
      <Route path={"/repo:name"} exact={true} component={Repo} />
      <Route path={"/repo"} exact={true} component={Repo} />
    </Switch>
  </BrowserRouter>
);

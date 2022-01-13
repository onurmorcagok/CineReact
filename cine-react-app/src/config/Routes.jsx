import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Catalog from "../pages/Catalog";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category/search/:keyword" component={Catalog} />
        <Route path="/:category/:id" component={Detail} />
        <Route path="/:category" component={Catalog} />
      </Switch>
    </>
  );
}

export default Routes;

import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AboutUs}/>
    <Route path="product/:id" component={Product}></Route>
  </Route>
);

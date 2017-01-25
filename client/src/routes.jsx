import React from "react";
import { Route, IndexRoute } from "react-router";
import store from "./store";
import { resetActiveProduct } from "./actions/Product";
import App from "./components/App";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";

export default (
  <Route path="/" component={App}>
    <IndexRoute getComponent={(nextState, cb) => {
        store.dispatch(resetActiveProduct())
        cb(null, AboutUs)
      }
    } />
    <Route path="product/:id" component={Product}></Route>
  </Route>
);

import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { Router, browserHistory } from "react-router";

import "./default.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);

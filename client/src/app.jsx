import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import { Router } from "react-router"
import { App } from "@components"
import history from "./history"
import "./default.css"


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
)

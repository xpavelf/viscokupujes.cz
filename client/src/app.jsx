import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./components/App"
import Product from "./components/Product"
import AboutUs from "./components/AboutUs"
import "./default.css"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

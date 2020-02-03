import React from "react"
import {
  Toolbar,
  SideNav,
  MessageBus,
} from "@components"
import { Switch, Route, withRouter, Redirect, Link } from "react-router-dom"
import Product from "../pages/Product"
import EckoOverview from "../pages/EckoOverview"
import Home from "../pages/Home"
import SearchHistory from "../pages/SearchHistory"

import AddProduct from "../pages/AddProduct"
import ApproveUserProduct from "../pages/ApproveUserProduct"
import Alert from '../pages/Alert'
import imgSprite from "../icons/sprite.svg"
import "./Header.css"
import "./App.css"

@withRouter
export default class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    let page = nextProps.location.pathname
    if (this.props.location.pathname !== page) {
      if (ga) {
        ga('set', 'page', page)
        ga('send', 'pageview')
      }

      setDataPage(page)
    }
  }

  render() {
    return (
      <main className="App">
        <SideNav />
        <header className="Header">
          <Link className="Header__homeLink" to="/">
            <div className="Header__title">
              <svg height="90" width="90"><use xlinkHref={`${imgSprite}#logo-wo-circle`}></use></svg>
              Víš co kupuj<span className="Header__titleE">E</span>š?
            </div>
            <div className="Header__subtitle">Najdi si éčka v potravinách a nekupuj zbytečnou chemii</div>
          </Link>


          <Toolbar />
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <Link className="Header__sideNavLink" to={ ({state: {sideNav: true}}) }>
              <svg width="40" height="40" style={{ color: "white" }}><use xlinkHref={`${imgSprite}#menu`}></use></svg>
            </Link>
          </div>
        </header>


        <div className="App__content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/android_asset/www/index.html" component={Home} />
            <Redirect from="/add-product/entry" to="/add-product" />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product/:id" component={Product} />
            <Route path="/ecka" component={EckoOverview} />
            <Route path="/search-history" component={SearchHistory} />
            <Route path="/user-product/approve" component={ApproveUserProduct} />
            <Route path="/alert" component={Alert} />
            <Redirect from="/*" to="/" />
          </Switch>
        </div>
        <MessageBus />
      </main>
    )
  }
}

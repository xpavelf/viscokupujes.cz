import React, { useEffect } from "react"
import {
  Toolbar,
  SideNav,
  MessageBus,
} from "@components"
import { Switch, Route, useLocation, Redirect, Link } from "react-router-dom"
import Product from "../pages/Product"
import EckoOverview from "../pages/EckoOverview"
import Home from "../pages/Home"
import SearchHistory from "../pages/SearchHistory"

import AddProduct from "../pages/AddProduct"
import ApproveUserProduct from "../pages/ApproveUserProduct"
import AboutUs from '../pages/AboutUs'
import Alert from '../pages/Alert'
import imgSprite from "../icons/sprite.svg"
import "./Header.css"
import "./App.css"

export default function App() {
  const pathname = useLocation().pathname

  useEffect(() => {
    if (ga) {
      ga('set', 'page', pathname)
      ga('send', 'pageview')
    }
    setDataPage(pathname)
  }, [pathname])

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
          <Route exact path="/app" component={Home} />
          <Route exact path="/android_asset/www/app/index.html" component={Home} />
          <Route path="/app/add-product" component={AddProduct} />
          <Route path="/app/product/:id" component={Product} />
          <Route path="/app/ecka" component={EckoOverview} />
          <Route path="/app/search-history" component={SearchHistory} />
          <Route path="/app/user-product/approve" component={ApproveUserProduct} />
          <Route path="/app/alert" component={Alert} />
          <Route path="/app/about-us" component={AboutUs} />
          <Redirect from="/app/*" to="/app" />
        </Switch>
      </div>
      <MessageBus />
    </main>
  )
}


import React from "react"
import Toolbar from "./Toolbar"
import SideNav from "./SideNav"
import { Switch, Route, withRouter, Redirect } from "react-router-dom"
import Product from "./Product"
import EckoOverview from "./EckoOverview"
import AboutUs from "./AboutUs"
import Home from "./Home"
import SearchHistory from "./SearchHistory"
import Cooperation from "./Cooperation"
import MessageBus from "./MessageBus"
import AddProduct from "./AddProduct"
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
    let show = this.props.location.state && this.props.location.state.sideNav
    return (
      <main className="App">
        <SideNav show={show} />
        <Toolbar />
        <div className="App__content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/android_asset/www/index.html" component={Home} />
            <Redirect from="/add-product/entry" to="/add-product" />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product/:id" component={Product} />
            <Route path="/ecka" component={EckoOverview} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/search-history" component={SearchHistory} />
            <Route path="/cooperation" component={Cooperation} />
          </Switch>
        </div>
        <MessageBus />
      </main>
    )
  }
}

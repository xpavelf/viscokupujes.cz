import React from "react"
import Toolbar from "./Toolbar"
import SideNav from "./SideNav"
import { Route, withRouter } from "react-router-dom"
import Product from "./Product"
import EckoOverview from "./EckoOverview"
import AboutUs from "./AboutUs"
import Home from "./Home"

@withRouter
export default class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    ga('set', 'page', nextProps.location.pathname)
    ga('send', 'pageview')
  }

  render() {
    let show = this.props.location.state && this.props.location.state.sideNav
    return (
      <main className="App">
        <SideNav show={show} />
        <Toolbar />
        <div className="App__content">
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/ecka" component={EckoOverview} />
          <Route path="/about-us" component={AboutUs} />
        </div>
      </main>
    )
  }
}

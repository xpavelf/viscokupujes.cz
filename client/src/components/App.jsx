import React from "react"
import Toolbar from "./Toolbar"
import SideNav from "./SideNav"
import { Route, withRouter } from "react-router-dom"
import Product from "./Product"
import EckoOverview from "./EckoOverview"
import AboutUs from "./AboutUs"

@withRouter
export default class App extends React.Component {

  render() {
    let show = this.props.location.state && this.props.location.state.sideNav
    return (
      <main className="App">
        <SideNav show={show} />
        <Toolbar />
        <div className="App__content">
          <Route exact path="/" component={AboutUs} />
          <Route path="/product/:id" component={Product} />
          <Route path="/ecka" component={EckoOverview} />
        </div>
      </main>
    )
  }
}

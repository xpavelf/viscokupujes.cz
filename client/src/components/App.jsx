import React from "react"
import Toolbar from "./Toolbar"
import SideNav from "./SideNav"
import { Route, withRouter } from "react-router-dom"
import Product from "./Product"
import AboutUs from "./AboutUs"

class ShowTheLocation extends React.Component {
  render() {
    return (
      <div>
      <div>You are now at {this.props.location}</div>
      <div>State {JSON.strinthis.props.location.state}</div>
      </div>
    )
  }
}
const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

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
        </div>
      </main>
    )
  }
}

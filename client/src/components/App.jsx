import React from "react"
import Toolbar from "./Toolbar"

export default (props) => (
  <div className="App">
    <Toolbar />
    <div className="App__content">{props.children}</div>
  </div>
)

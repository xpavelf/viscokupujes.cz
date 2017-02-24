import React from "react"
import "./PromProduct.css"
import { Link } from "react-router-dom"

export default class PromProduct extends React.PureComponent {

  render() {
    let pr = this.props.product
    return (
      <Link className="PromProduct" to={"/product/" + pr.id}>
          {pr.name}
          <div className="PromProduct__producer">{pr.producer}</div>
      </Link>
    )
  }
}

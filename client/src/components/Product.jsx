import React from "react"
import EckoList from "./EckoList"
import { connect } from "react-redux"
import { getProductById } from "../actions/Product"

@connect((store) => ({ activeProduct: store.activeProduct }))
export default class Product extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.dispatch(getProductById(nextProps.params.id))
    }
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.dispatch(getProductById(this.props.params.id))
    }
  }

  render() {
    let prod = this.props.activeProduct.product
    return prod ? (
      <div className="Product">
        <h2 className="Product__name">{prod.name}</h2>
        <small className="Product__producer">{prod.producer}</small>
        <EckoList list={prod.e} />
        { prod.nutr ?
          <table className="Product__nutrition-facts">
            <caption>Nutriční hodnoty{prod.nutr[0] ? <div>{prod.nutr[0]}</div> : ""}</caption>
            <tbody>
              {prod.nutr.slice(1).map(line => <tr>{line.map(t => <td>{t}</td>)}</tr>)}
            </tbody>
          </table>
          : null
        }
        {prod.ref}
      </div>
    ) : null
  }
}

import React from "react"
import EckoList from "./EckoList"
import { connect } from "react-redux"
import { getProductById } from "../actions/Product"
import PromProduct from "./PromProduct"
import "./Product.css"
import productSpinner from '../icons/icon-cart-64.png'

@connect((store) => ({
  activeProduct: store.activeProduct,
  scannedProduct: store.scannedProduct
}))
export default class Product extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.dispatch(getProductById(nextProps.match.params.id))
    }
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.dispatch(getProductById(this.props.match.params.id))
    }
  }

  render() {
    window.scrollTo(0, 0)
    let prod = this.props.activeProduct.product

    if (this.props.activeProduct.pending || this.props.scannedProduct.pending) {
      return (
        <div className="Product">
          <img className="Product__spinner" src={productSpinner} />
        </div>
      )
    }

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
        {prod.ingredients ? <div className="Product__ingredients">Složení:<br/>{prod.ingredients}</div> : null}
        <div className="ProdProducts">
          <div className="ProdProducts__title">Podobné produkty bez škodlivých éček</div>
          { prod.promProducts.map(pr => <PromProduct product={pr} key={pr.id} />)}
        </div>
      </div>
    ) : null
  }
}

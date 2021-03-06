import React from "react"
import { connect } from "react-redux"
import { getProductById } from "@actions/Product"
import {
  PromProduct,
  Allergen,
  Spinner,
  Share,
  ReportMistake,
  Badges,
  Recipes,
  AlertBox,
} from "@components"
import "./Product.css"

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
          <Spinner />
        </div>
      )
    }

    return prod ? (
      <div className="Product">
        <AlertBox product={prod} />
        <h2 className="Product__name">{prod.name}</h2>
        <small className="Product__producer">{prod.producer}</small>
        <Badges
          ecka={prod.e}
          po={prod.po}
          gf={prod.gf}
        />
        { prod.price && prod.price.length
            ? <div className="Product__pricelist">
                <div className="Product__pricelist-title">Přibližná cena</div>
                { prod.price.map(p =>
                  <div className="Product__price" key={p[0]}>
                    <span className="Product__price-amount">{p[1]} Kč</span>
                    <span className="Product__price-shop">{p[0]}</span>
                  </div>
                )}
              </div>
            : null
        }

        { prod.a && prod.a.length
          ? <div className="AllergenList">
              <div className="AllergenList__title">Alergeny:</div>
              { prod.a.map(a => <Allergen key={a} code={a} />) }
            </div>
          : null
        }

        { prod.nutr && prod.nutr.length
          ?
            <table className="Product__nutrition-facts">
              <caption>Nutriční hodnoty{prod.nutr[0] ? <div>{prod.nutr[0]}</div> : ""}</caption>
              <tbody>
                {prod.nutr.slice(1).map(line => <tr>{line.map(t => <td>{t}</td>)}</tr>)}
              </tbody>
            </table>
          : null
        }

        { prod.ingredients ? <div className="Product__ingredients">Složení:<br/>{prod.ingredients}</div> : null }

        <ReportMistake product={prod} />

        <Recipes bc={prod.bc} />

        { prod.promProducts.length
            ?
              <div className="ProdProducts">
                <div className="ProdProducts__title">Podobné produkty bez škodlivých éček</div>
                { prod.promProducts.map(pr => <PromProduct product={pr} key={pr.id} />)}
              </div>
            : null
        }
        <Share />
      </div>
    ) : null
  }
}

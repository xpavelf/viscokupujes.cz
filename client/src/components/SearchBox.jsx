import React from "react"
import { connect } from "react-redux"
import throttle from "lodash/throttle"
import { withRouter } from "react-router-dom"
import { searchProduct, resetSearchProduct, resetActiveProduct } from "../actions/Product"
import imgProgressbar from "../icons/progressbar.gif"
import "./SearchBox.css"
import {
  SearchBox as ReactSearchBox,
  Suggestion as ReactSuggestion,
  SuggestionLink as ReactSuggestionLink
} from "react-searchbox"

const Suggestion = (props) => {
  const splitAt = (hit, str, startpos) => [str.slice(startpos, hit[0]), str.slice(hit[0], hit[1]), str.slice(hit[1])]
  let hits = props.data.hits
  let name = []
  if (hits && hits.length) {
    for (let i = 0; i < hits.length; i++) {
      let prev = (i === 0) ? 0 : hits[i - 1][1]
      let arr = splitAt(hits[i], props.data.name, prev)
      let end = (i + 1 === hits.length) ? arr[2] : null
      name = name
        .concat(arr[0], <span key={hits[i]} className="SearchBox__Product-highlight">{arr[1]}</span>, end)
    }
  } else {
    name = props.data.name
  }

  return (
    <ReactSuggestionLink data={props.data} onSelect={props.onSelect}>
      <div className="SearchBox__Product-name">{name}</div>
      <div className="SearchBox__Product-producer">{props.data.producer}</div>
    </ReactSuggestionLink>
  )
}

@connect((store) => ({
  activeProduct: store.activeProduct,
  searchProduct: store.searchProduct
}))
@withRouter
export default class SearchBox extends React.Component {
  _searchProductThrottled = throttle((term) => {
    this.props.dispatch(searchProduct(term))
    ga && ga('send', 'event', 'ProductSearch', 'searching', term)
  }, 300, { leading: false })

  onChange = (term) => {
    this.props.dispatch(resetSearchProduct())
    if (term && term.length > 2) {
      this._searchProductThrottled(term)
    }
  }

  onSelect = (product) => {
    this.props.history.push("/product/" + product.id)
  }

  renderEmptySuggestion = (data) => {
    if (data.pending) {
      return <ReactSuggestion><img height="15" src={imgProgressbar} />&nbsp;&nbsp;&nbsp;Vyhledávám..</ReactSuggestion>
    } else if (data.products !== null) {
      return <ReactSuggestion>Nenašli jsme žádný výrobek... &#x2639;</ReactSuggestion>
    }
  }

  onFocus = (evt) => {
    evt.target.parentNode.scrollIntoView()
  }

  render() {
    return (
      <ReactSearchBox
        onChange={this.onChange}
        onSelect={this.onSelect}
        onFocus={this.onFocus}
        placeholder={ __APP_MODE__ === "mob" ? "Hledej nebo načti kód..." : "Hledej výrobek..." }
        suggestions={this.props.searchProduct}
        parseSuggestionsData={(data) => data.products}
        suggestionComp={Suggestion}
        renderEmptySuggestion={this.renderEmptySuggestion}
        selectedToString={() => ""}
        showPrevSearch={true}
        autoFocus={false} />
    )
  }
}

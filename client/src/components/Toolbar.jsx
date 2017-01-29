import React from "react"
import { connect } from "react-redux"
import debounce from "debounce"
import { browserHistory, Link } from "react-router"
import { searchProduct, resetSearchProduct, resetActiveProduct } from "../actions/Product"
import imgProgressbar from "../icons/progressbar.gif"
import imgLogo from "../icons/logo.png"
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
export default class Toolbar extends React.Component {
  _searchProductDebounced = debounce((term) => {
    this.props.dispatch(searchProduct(term))
  }, 300)

  onChange = (term) => {
    this.props.dispatch(resetSearchProduct())
    if (term && term.length > 2) {
      this._searchProductDebounced(term)
    }
  }

  onSelect = (product) => {
    browserHistory.push("/product/" + product.id)
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

  onBlur = (evt) => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  render() {
    return (
      <div className="Toolbar">
        <h1 className="Toolbar__title">
          <Link to="/" className="Toolbar__homeLink"><img src={imgLogo} /></Link>
          <a target="_blank" href="https://www.facebook.com/viscokupujes" title="Facebook" className="Toolbar__fbLink">
            <svg height="32" width="32" viewBox="0 0 512 512">
                <rect fill="#3cb73c" x="0" y="0" width="512" height="512" />
              <path fill="white" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
            </svg>
          </a>
        </h1>
            <ReactSearchBox
              onChange={this.onChange}
              onSelect={this.onSelect}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Najdi výrobek..."
              suggestions={this.props.searchProduct}
              parseSuggestionsData={(data) => data.products}
              suggestionComp={Suggestion}
              renderEmptySuggestion={this.renderEmptySuggestion}
              selectedToString={() => ""}
              autoFocus={false} />
      </div>
    )
  }
}

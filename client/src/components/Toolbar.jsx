import React from "react"
import { connect } from "react-redux";
import debounce from "debounce";
import { searchProduct, selectProduct, clearFoundProducts } from "../actions/Search";
import imgProgressbar from "../icons/progressbar.gif";
import imgCart from "../icons/cart.png";
import imgLogo from "../icons/logo.png";
import {
  SearchBox as ReactSearchBox,
  Suggestion as ReactSuggestion,
  SuggestionLink as ReactSuggestionLink
} from "react-searchbox"

const nullSuggestionComp = (
  <ReactSuggestion>
    <img height="15" src={imgProgressbar} />
    &nbsp;&nbsp;&nbsp;Vyhledávám...
  </ReactSuggestion>
)

const emptySuggestionComp = (
  <ReactSuggestion>Nenašli jsme žádný produkt... &#x2639;</ReactSuggestion>
)

const Suggestion = (props) => {
  const splitAt = (hit, str, startpos) => [str.slice(startpos, hit[0]), str.slice(hit[0], hit[1]), str.slice(hit[1])];
  let hits = props.data.hits;
  let name = [];
  if (hits && hits.length) {
    for (let i = 0; i < hits.length; i++) {
      let prev = (i === 0) ? 0 : hits[i - 1][1];
      let arr = splitAt(hits[i], props.data.name, prev);
      let end = (i + 1 === hits.length) ? arr[2] : null;
      name = name
        .concat(arr[0], <span className="SearchBox__Product-highlight">{arr[1]}</span>, end);
    }
  } else {
    name = props.data.name;
  }

  return (
    <ReactSuggestionLink data={props.data} onSelect={props.onSelect}>
      <div className="SearchBox__Product-name">{name}</div>
      <div className="SearchBox__Product-producer">{props.data.producer}</div>
    </ReactSuggestionLink>
  )
}

@connect((store) => {
  return {
    foundProducts: store.foundProducts,
    selectedProduct: store.selectedProduct
  }
})
export default class Toolbar extends React.Component {
  state = { showSearchBox : !this.props.selectedProduct }

  goBack = () => {
    this.props.dispatch(selectProduct(null))
    this.setState({showSearchBox: true })
  }

  onChange = debounce((term) => {
    this.props.dispatch(searchProduct(term))
  }, 500)

  onSelect = (product) => {
    this.props.dispatch(selectProduct(product))
    this.setState({showSearchBox: false })
  }

  render() {
    return (
      <div className="Toolbar">
        <h1 className="Toolbar__title">
          <button className="Toolbar__backBtn" onClick={this.goBack}>
            <img src={imgCart} /><img src={imgLogo} />
          </button>
          <a target="_blank" href="https://www.facebook.com/viscokupujes" title="Facebook" className="Toolbar__fbLink">
            <svg height="32" width="32" viewBox="0 0 512 512">
              <rect fill="#319631" x="0" y="0" width="512" height="512" />
              <path fill="white" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
            </svg>
          </a>
        </h1>
        { this.state.showSearchBox ?
            <ReactSearchBox
              onChange={this.onChange}
              onSelect={this.onSelect}
              selectedToString={(data) => ""}
              placeholder="Najdi výrobek..."
              suggestions={this.props.foundProducts}
              suggestionComp={Suggestion}
              nullSuggestionElm={nullSuggestionComp}
              emptySuggestionElm={emptySuggestionComp}
              /> : null
          }
      </div>
    )
  }
}

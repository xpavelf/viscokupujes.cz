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
  state = { showSearchBox : !!this.props.selectedProduct }

  onChange = debounce((term) => {
    this.props.dispatch(searchProduct(term))
  }, 500)

  onSelect = (product) => {
    this.props.dispatch(selectProduct(product))
    this.setState({showSearchBox: false })
  }

  toggleSearchBox = (visible) => {
    this.setState({showSearchBox: visible})
  }

  render() {
    return (
      <div className="Toolbar">
        { !this.state.showSearchBox ?
            <div>
              <h1 className="Toolbar__title"><img src={imgCart} /><img src={imgLogo} /></h1>
              <button className="Toolbar__searchButton"
                onClick={this.toggleSearchBox.bind(null, true)}>
              <svg viewBox="0 0 1000 1000">
                  <path d="M954.7,855L774.6,674.8c-13.5-13.5-30.8-20.8-48.4-22.5c54.3-67.7,87-153.5,87-246.8C813.1,187.4,635.7,10,417.6,10S22.1,187.4,22.1,405.5S199.5,801,417.6,801c82.3,0,158.8-25.3,222.1-68.5c0.4,19.6,8,39.1,23,54.1l180.2,180.2c15.4,15.5,35.7,23.2,55.9,23.2c20.2,0,40.5-7.7,55.9-23.2C985.6,935.9,985.6,885.9,954.7,855z M417.6,669.2c-145.4,0-263.7-118.3-263.7-263.7s118.3-263.7,263.7-263.7s263.7,118.3,263.7,263.7S563,669.2,417.6,669.2z"/>
                </svg>
              </button>
            </div>
          :
            <ReactSearchBox
              onChange={this.onChange}
              onSelect={this.onSelect}
              onBack={this.toggleSearchBox.bind(null, false)}
              showBackButton={true}
              selectedToString={(data) => ""}
              placeholder="Najdi produkt..."
              suggestions={this.props.foundProducts}
              suggestionComp={Suggestion}
              nullSuggestionElm={nullSuggestionComp}
              emptySuggestionElm={emptySuggestionComp}
              />
          }
      </div>
    )
  }
}

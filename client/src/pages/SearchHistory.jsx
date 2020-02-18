import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./SearchHistory.css"

@connect((store) => ({
  searchHistory: store.searchHistory
}))
export default class SearchHistory extends React.PureComponent {
  render() {
    return (
      <div className="SearchHistory">
        { this.props.searchHistory.map(sh =>
          <Link key={sh.id} className="SearchHistory__link" to={"/app/product/" + sh.id}>{sh.name}<div className="SearchHistory__producer">{sh.producer}</div></Link>) }
        { this.props.searchHistory.length === 0 ? <div className="SearchHistory__empty">Historie hledání je prázdná.<br />Ještě jste nevyhledali žádný produkt.</div> : null }
      </div>
    )
  }
}

import React from "react"
import { ecka } from "ecka"
import { eComparator } from "../utils/eUtils"
import { EckoCard } from "@components"
import { remove as removeDiacritics } from "diacritics"
import "./EckoOverview.css"

const ECKO_ARR = Object.keys(ecka)
  .reduce((acc, e) => acc.concat({...ecka[e], id: e}), [])
  .map(e => Object.assign({}, e, { searchStr: removeDiacritics([e.id, ...e.names].join(',').toLowerCase()) }))
  .sort(eComparator)

export default class EckoOverview extends React.Component {

  state = {
    term: ''
  }

  onChange = (e) => {
    this.setState({ term: removeDiacritics(e.target.value.trim().toLowerCase()) })
  }

  render() {
    let eArr = ECKO_ARR.filter(e => e.id.indexOf(this.state.term) !== -1 || e.searchStr.indexOf(this.state.term) !== -1)
    return (
      <div>
        <div className="EckoOverview__filter">
          <div>Hledej éčko.</div>
          <input onChange={this.onChange} />
        </div>
        { eArr.length
            ? eArr.map(e => <EckoCard key={e.id} e={e} />)
            : <div className="EckoOverview__filterEmpty">Hledanému výrazu neodpovídá žádné éčko.</div>
        }
      </div>
    )
  }
}

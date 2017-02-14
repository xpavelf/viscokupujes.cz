import React from "react"
import ecka from "../../../e.json"
import { eComparator } from "../utils/eUtils"
import EckoCard from "./EckoCard"

export default (props) => {
  let eArr = Object.keys(ecka)
    .reduce((acc, e) => acc.concat({...ecka[e], id: e}), [])
    .sort(eComparator)

  return (
    <div>{ eArr.map(e => <EckoCard key={e.id} e={e} />) } </div>
  )
}

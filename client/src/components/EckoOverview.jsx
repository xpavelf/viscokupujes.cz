import React from "react"
import ecka from "../../../e.json"
import EckoCard from "./EckoCard"

const eNum = (str) => parseInt(str.substring(1))
const comp = (a, b) => {
  let res = b.rating - a.rating
  return res === 0 ? a.eNum - b.eNum : res
}

export default (props) => {
  let eArr = Object.keys(ecka)
    .reduce((acc, e) => acc.concat({...ecka[e], id: e, eNum: eNum(e)}), [])
    .sort(comp)

  return (
    <div>{ eArr.map(e => <EckoCard key={e.id} e={e} />) } </div>
  )
}

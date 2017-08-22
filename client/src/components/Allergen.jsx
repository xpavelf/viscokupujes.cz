import React from "react"
import "./Allergen.css"

const list = [
  "",
  "lepek",
  "korýši",
  "vejce",
  "ryby",
  "arašídy",
  "sója",
  "mléko",
  "ořechy",
  "celer",
  "hořčice",
  "sezam",
  "siřičitany",
  "lupina",
  "měkkýši"
]

export default function(props) {
  return (
    <div className={ "Allergen Allergen--" + props.code }>
      <div className="Allergen__name"><strong>{props.code}</strong> {list[props.code]}</div>
    </div>
  )
}

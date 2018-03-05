import React from "react"
import "./Allergen.css"
import imgSprite from "../icons/sprite.svg"
import { getAllergenName } from '../datasets/allergens'

const list = [
  "",
  "allergens-wheat",
  "allergens-crustacens",
  "allergens-eggs",
  "allergens-fish",
  "allergens-peanut",
  "allergens-soy",
  "allergens-milk",
  "allergens-treenut",
  "allergens-celery",
  "allergens-mustard",
  "allergens-sesame",
  "allergens-sulphurdioxide",
  "allergens-lupin",
  "allergens-molluscs"
]

export default function(props) {
  return (
    <div className="Allergen">
      <svg><use xlinkHref={ `${imgSprite}#${list[props.code]}` } /></svg>
      <div className="Allergen__name"><strong>{props.code}</strong> {getAllergenName(props.code)}</div>
    </div>
  )
}

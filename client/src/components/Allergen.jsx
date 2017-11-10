import React from "react"
import "./Allergen.css"
import imgSprite from "../icons/sprite.svg"

const list = [
  ["", ""],
  ["lepek", "allergens-wheat"],
  ["korýši", "allergens-crustacens"],
  ["vejce", "allergens-eggs"],
  ["ryby", "allergens-fish"],
  ["arašídy", "allergens-peanut"],
  ["sója", "allergens-soy"],
  ["mléko", "allergens-milk"],
  ["ořechy", "allergens-treenut"],
  ["celer", "allergens-celery"],
  ["hořčice", "allergens-mustard"],
  ["sezam", "allergens-sesame"],
  ["siřičitany", "allergens-sulphurdioxide"],
  ["lupina", "allergens-lupin"],
  ["měkkýši", "allergens-molluscs"]
]

export default function(props) {
  return (
    <div className="Allergen">
      <svg><use xlinkHref={ `${imgSprite}#${list[props.code][1]}` } /></svg>
      <div className="Allergen__name"><strong>{props.code}</strong> {list[props.code][0]}</div>
    </div>
  )
}

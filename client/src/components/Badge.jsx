import React from "react"
import imgSprite from "../icons/sprite.svg"
import "./Badge.css"

const m = {
  po: ["palm oil", "badge-palmoil"],
  gf: ["GF sirup", "badge-gf-sirup"]
}

export default (props) => {
  let { type, ...p } = props
  let el = p.onClick ? "button": "div"
  return React.createElement(
    el,
    {...p, className: "Badge"},
    <div className="Badge__text">
      <svg><use xlinkHref={`${imgSprite}#${m[type][1]}`}></use></svg>
      {m[type][0]}
    </div>
  )
}

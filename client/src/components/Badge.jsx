import React from "react"
import "./Badge.css"

const m = {
  po: "palm oil",
  gf: "GF sirup"
}

export default (props) => {
  let { type, ...p } = props
  let el = p.onClick ? "button": "div"
  return React.createElement(
    el,
    {...p, className: "Badge Badge--" + type},
    <div className="Badge__text">{m[type]}</div>
  )
}

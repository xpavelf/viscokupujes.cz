import React from "react"
import "./Ecko.css"

export default (props) => {
  let { size, e, ...p } = props
  let clazz = `Ecko Ecko--${e.rating}`
    + (size ? ` Ecko--${size}` : "")
  let el = p.onClick ? "button": "div"

  return React.createElement(el, {...p, className: clazz}, e.id)
}

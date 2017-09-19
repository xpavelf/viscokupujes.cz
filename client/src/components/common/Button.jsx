import React from "react"
import "./Button.css"

export default (props) => {
  let clazz = "VisCoKupujesBtn" + (props.color ? " VisCoKupujesBtn--" + props.color : "")
  let { color, ...p } = props
  return (
    <button className={clazz} {...p}>
      {props.children}
    </button>
  )
}

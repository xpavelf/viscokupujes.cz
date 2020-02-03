import React from "react"
import "./Button.css"

export default (props) => {
  let clazz = "VisCoKupujesBtn"
    + (props.color ? " VisCoKupujesBtn--" + props.color : "")
    + (props.size ? " VisCoKupujesBtn--" + props.size : "")

  let { color, size, className, ...p } = props
  return (
    <button className={clazz + (className ? ` ${className}` : "")} {...p}>
      {props.children}
    </button>
  )
}

import React from "react"
import "./Modal.css"

const dropEvt = (evt) => evt.stopPropagation()

export default (props) => {
  let onClose = props.onClose

  return (
    <div className="VisCoKupujesModal" onClick={onClose}>
      <div className="VisCoKupujesModal__main" onClick={dropEvt}>
        <button onClick={onClose} className="VisCoKupujesModal__btnClose">✕</button>
        {props.children}
      </div>
    </div>
  )
}

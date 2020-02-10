import React from "react"
import ReactDOM from 'react-dom'
import "./Modal.css"

const dropEvt = (evt) => evt.stopPropagation()

export default (props) => {
  const {
    onClose,
    className,
  } = props

  return (
    ReactDOM.createPortal(
      <div className={"VisCoKupujesModal " + className} onClick={onClose}>
        <div className="VisCoKupujesModal__main" onClick={dropEvt}>
          <button onClick={onClose} className="VisCoKupujesModal__btnClose">✕</button>
          {props.children}
        </div>
      </div>,
      document.body
    )
  )
}

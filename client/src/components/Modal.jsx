import React from "react"
import "./Modal.css"

export default class Modal extends React.Component {
  state = { visible: true }

  hide = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      this.state.visible
        ? <div className="Modal" onClick={this.hide}>
            <div className="Modal__content">
              <button onClick={this.hide} className="Modal__btnClose">✕</button>
              {this.props.children}
            </div>
          </div>
        : null
    )
  }
}

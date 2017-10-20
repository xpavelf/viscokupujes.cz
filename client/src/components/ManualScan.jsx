import React from "react"
import { getProductByBc } from "../actions/Product"
import { connect } from "react-redux"
import Modal from "./common/Modal"
import Btn from "./common/Button"
import "./ManualScan.css"

@connect((store) => ({}))
export default class ManualScan extends React.Component {

  state = { inputValue: "" }

  componentDidMount = () => this.input.focus()

  onChange = (e) => {
    let val = e.target.value
    this.setState({ inputValue: val })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.search()
    }
  }

  search = () => {
    this.props.onClose()
    this.props.dispatch(getProductByBc(this.state.inputValue))
  }

  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="ManualScan">
          <div className="ManualScan__title">Zadejte čárový kód</div>
          <p>Skenovat čárový kód je možné pouze v mobilní aplikaci.</p>
          <div className="ManualScan__form">
            <input
              className="ManualScan__input"
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
              value={this.state.inputValue}
              ref={(input) => { this.input = input; }}
              type="number" />
            <Btn disabled={!this.state.inputValue.length} onClick={this.search} color="green">Hledej</Btn>
          </div>
        </div>
      </Modal>

    )
  }
}

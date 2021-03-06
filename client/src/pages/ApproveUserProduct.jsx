import React from "react"
import { connect } from "react-redux"
import {
  getUserProduct,
  approveUserProduct,
  rejectUserProduct
} from "@actions/UserProduct"
import { Button } from "@components"
import "./ApproveUserProduct.css"


@connect((store) => ({
  userProduct: store.userProduct
}))
export default class ApproveUserProduct extends React.Component {

  state = {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.userProduct.review) {
      this.props.dispatch(getUserProduct())
    } else {
      this.setState({ pr: nextProps.userProduct })
    }
  }

  componentWillMount() {
    this.props.dispatch(getUserProduct())
  }

  skip = () => this.props.dispatch(getUserProduct())

  save = () => {
    let { mainPic, ingPic, ...pr } = this.state.pr
    this.props.dispatch(approveUserProduct(pr))
  }

  reject = () => {
    let { mainPic, ingPic, ...pr } = this.state.pr
    this.props.dispatch(rejectUserProduct(pr))
  }

  onChange = (e) => {
    this.setState({ pr: { ...this.state.pr, [e.target.id]: e.target.value } })
  }

  rotate = (e) => {
    const el = e.target
    const deg = (+el.dataset.rotate || 0) + 90

    if (deg === 90) {
      el.defHeight = el.height
    }

    el.height = (deg % 180 === 0) ? el.defHeight : el.width
    el.dataset.rotate = deg
    el.style.transform = `rotate(${deg}deg)`
  }

  render() {
    if (__APP_MODE__ === "mob") {
      return null
    }
    let pr = this.state.pr

    if (pr) {

      return (
        <div className="ApproveUserProduct">
          <label htmlFor="name">Název</label>
          <textarea id="name" value={pr.name} onChange={this.onChange} />

          <div>
            <div className="ApproveUserProduct__hBox">
              <label htmlFor="producer">Výrobce</label>
              <textarea id="producer" value={pr.producer} onChange={this.onChange} />
            </div>
            <div className="ApproveUserProduct__hBox">
              <label htmlFor="q">Hmotnost / Objem</label>
              <textarea id="q" value={pr.q} onChange={this.onChange} />
            </div>
          </div>
          <img onClick={this.rotate} src={ "data:image/jpeg;base64," + pr.mainPic } />

          <label htmlFor="ing">Ingredience</label>
          <textarea id="ing" className="ApproveUserProduct__ta--big" value={pr.ing} onChange={this.onChange} />
          <img onClick={this.rotate} src={ "data:image/jpeg;base64," + pr.ingPic } />

          <Button onClick={this.reject} color="red">Zamitnout</Button>
          <Button onClick={this.skip}>Preskocit</Button>
          <Button onClick={this.save} color="green">Potvrdit</Button>
        </div>
      )
    }
    return null
  }
}

import React from "react"
import "./AddProduct.css"
import { connect } from "react-redux"
import scan from "../utils/scanner"
import Btn from "./common/Button"
import { Step0, Step1, Step2, Step3 } from './AddProductWizzard'
import { withRouter } from "react-router-dom"
import { addProductFull } from "../actions/Product"

@connect((store) => ({
  scannedProduct: store.scannedProduct
}))
@withRouter
export default class AddProduct extends React.Component {

  state = {
    step: 0,
    uid: new Date().getTime()
  }

  constructor(props) {
    super(props)
    ga && ga('send', 'event', 'AddProduct', 'start', this.props.scannedProduct.bc)
  }

  componentWillMount() {
    this.props.history.push({ hash: "step-" + this.state.step })
  }

  save = () => {
    this.props.dispatch(addProductFull({
      bc: this.props.scannedProduct.bc,
      uid: this.state.uid,
      mainPic: this.state.mainPic,
      ingPic: this.state.ingPic,
      name: this.state.name,
      producer: this.state.producer,
      ing: this.state.ing,
      q: this.state.q
    }))
    this.next()
  }

  next = () => {
    let step = this.state.step + 1
    this.setState({ step })
    this.props.history.push({ hash: "step-" + step })
  }

  back = (st) => {
    let step = this.state.step - 1
    this.setState({ ...st, step })
    this.props.history.push({ hash: "step-" + step })
  }

  componentWillReceiveProps(props) {
    let h = this.props.history.location.hash
    if (h) {
      let s = parseInt(h.slice(-1))
      this.setState({ step: s })
    }
  }

  render() {
    let step = this.state.step
    return (
      <div className="AddProduct">
        { step === 4
          ? <div className="AddProduct__finished">
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 512 512">
                <circle fill="#2a802a" cx="256" cy="256" r="256" />
                <g stroke="#fff" strokeWidth="30">
                  <line x1="213.6" x2="369.7" y1="344.2" y2="188.2"/>
                  <line x1="233.8" x2="154.7" y1="345.2" y2="266.1"/>
                </g>
              </svg><br /><br />
              <p>Díky za spolupráci!</p>
              <p>Právě jsi se zasloužil o zlepšení této aplikace!</p>
            </div>
          : <div className="AddProduct__page">{this.state.step + 1} / 4</div>
        }
        { step === 0 ? <Step0 next={ () => { this.takePic("mainPic") } } /> : null }
        { step === 1 ? <Step1 q={this.state.q} name={this.state.name} producer={this.state.producer} prev={(st) => this.back(st)} next={ (st) => { this.next(); this.setState(st) } } /> : null }
        { step === 2 ? <Step2 prev={this.back} next={ () => { this.takePic("ingPic") } } /> : null }
        { step === 3 ? <Step3 ing={this.state.ing} info={this.state.info} prev={(st) => this.back(st)} next={ (st) => this.setState(st, this.save) } /> : null }

      </div>
    )
  }

  takePic = (field) => {
    if (navigator && navigator.camera) {
      navigator.camera.getPicture(
        data => {
          this.next()
          this.setState({ [field]: data })
        },
        err => console.log(err),
        {
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1280,
          targetHeight: 720,
          quality: 80
        }
      )
    }
  }
}

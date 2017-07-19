import React from "react"
import { withRouter } from "react-router-dom"
import { getProductByBc, resetScannedProduct } from "../actions/Product"
import { showMessage } from "../actions/Message"
import { connect } from "react-redux"

const SCANNER_CONFIG = {
    preferFrontCamera : false, // iOS and Android
    showFlipCameraButton : true, // iOS and Android
    showTorchButton : true, // iOS and Android
    torchOn: false, // Android, launch with the torch switched on (if available)
    prompt : "Naskenujte čárový kód výrobku", // Android
    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    formats : "EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
    disableAnimations : true, // iOS
    disableSuccessBeep: false // iOS
}

class Scanner extends React.Component {

  static childContextTypes = {
    scan: React.PropTypes.func
  }

  componentWillReceiveProps(nextProps) {
    let pr = nextProps.scannedProduct.product
    if (pr) {
      let url = "/product/" + pr.id
      if (this.props.location.pathname !== url) {
        this.props.history.push(url)
      }
      this.props.dispatch(resetScannedProduct())
    } else if (pr === undefined) {
      this.props.dispatch(showMessage({ title: "Kód nenalezen", text: "Zkuste produkt vyhledat pomocí textového vyhledávání." }))
      this.props.dispatch(resetScannedProduct())
    }
  }

  getChildContext() {
    return { scan : this.scan }
  }

  scan = () => {
    cordova.plugins.barcodeScanner.scan(
      result => this.props.dispatch(getProductByBc(result.text)),
      err => alert("Skenování selhalo."),
      SCANNER_CONFIG
    )
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default withRouter(
  connect((store) => ({ scannedProduct: store.scannedProduct }))(Scanner)
)

import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProductByBc } from "../actions/Product"
import Quagga from "quagga"
import Modal from "./Modal"
import "./Scanner.css"
import imgProgressbar from "../icons/progressbar.gif"

@withRouter
@connect((store) => ({ scannedProduct: store.scannedProduct }))
export default class Scanner extends React.Component {

  state = { scanned : null }

  constructor(props) {
    super(props)
    this.scannerP = this.getCamera()
  }

  getCamera() {
    return navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      // throw away first stream, just needed to prompt grant access dialog for the camera
      // so the label from enumerateDevices gets filled
      stream.getVideoTracks()[0].stop()

      return navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          // we need to use enumerateDevices to find deviceId because the facingMode environment itself
          // it's not working corectly and returns front camera at the moment
          let d = devices.filter(d => d.kind === "videoinput" && d.label.match("back"))
          return (d.length > 0) ? d[0].deviceId : 0
        })
        .then(deviceId => {
          let config = {
            frequency: 10,
            locate: true,
            inputStream: {
                name: "Live",
                type: "LiveStream",
                constraints: { width: 1280, height: 720, deviceId: deviceId, facingMode: "environment", aspectRatio: 16/9 },
                area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
                target: ".Scanner__videoContainer"
            },
            decoder: { readers: [ "ean_reader", "ean_8_reader" ] },
            locator: { halfSample: true, patchSize: "medium" }
          }

          return Quagga.fromConfig(config)
        })
      })
  }

  initScanner() {
    this.scannerP.then(scanner => {
      this.scanner = scanner
      this.scanUntilResult = this.scanner.toPromise()
      this.scanUntilResult.promise.then(this.onDetected)
    })
  }

  reset = (e) => {
    this.setState({ scanned: null, notFound: false })
    this.scannerP = this.getCamera()
    this.initScanner()
  }

  onDetected = (result) => {
    this.setState({ scanned: result.codeResult.code })
    this.props.dispatch(getProductByBc(result.codeResult.code))
  }

  componentWillMount() {
    this.initScanner()
  }

  componentWillUnmount() {
    this.scanner.stop()
  }

  componentWillReceiveProps(nextProps) {
    let pr = nextProps.scannedProduct.product
    if (pr) {
      this.props.history.push("/product/" + pr.id)
    } else {
      this.setState({ notFound: true })
    }
  }

  render() {
    return (
      <div className="Scanner">
        { this.state.scanned
          ? <Modal>
              <div className="Scanner__modal">
                { this.state.notFound
                  ? <div>
                      <div className="Scanner__modal-notFound">Produkt nenalezen</div>
                      <div className="Scanner__modal-extraInfo">
                        Mohlo dojít k chybnému načtení kódu. Můžete zkusit naskenovat znovu nebo vyhledat podle jména.
                      </div>
                    </div>
                  : <span>Vyhledávám produkt<br/><br/><img height="35" src={imgProgressbar} /></span>
                }

                { this.state.notFound
                  ? <button onClick={this.reset}>Zkusit znovu</button>
                  : null
                }
              </div>
            </Modal>
          : null
        }
        <div className="Scanner__videoContainer"></div>
        <p className="Scanner__infoBox">Skenování je zatím v testovací verzi. Funguje v prohlížečích - chrome, firefox, edge.</p>
      </div>
    )
  }
}
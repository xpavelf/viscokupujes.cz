import React from "react"
import Quagga from "quagga"

export default class Scanner extends React.Component {
  state = { occs: {} }
  componentDidMount() {

    var scanner = Quagga
                .decoder({readers: ["ean_reader", "ean_8_reader"]})
                .locator({patchSize: 'medium'})
                .fromSource({
                    target: ".Scanner__videoContainer",
                    constraints: {facingMode: "environment"}
                });
    scanner
      .addEventListener('detected', (data) => {
        let code = data.codeResult.code
        let num = this.state.occs[code] || 0
        let val = {...this.state.occs}
        val[code] = ++num
        this.setState({ occs: val })
      })
      .start();

    /*
    let occs = {};
    Quagga.init({["ean_reader", "ean_8_reader"]
      inputStream : {
        type : "LiveStream",
        target: ".Scanner__videoContainer",
        constraints: {
            facingMode: "environment" // or user
        }
      },
      decoder : { readers : ["ean_reader", "ean_8_reader"] },
      locator: { patchSize: "medium", halfSample: false },
      locate: true,
      multiple: false
    }, (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log("Initialization finished. Ready to start")
        Quagga.start();
    })

    Quagga.onProcessed(function(result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }
            }
        });

    Quagga.onDetected((data) => {
      console.log(data.codeResult.code, data.codeResult.direction, data)
      // console.log(JSON.stringify(occs))
      // console.log(data)
    })
*/
  }

  render() {
    let str = JSON.stringify(this.state.occs, null, 2)
    return (
      <div className="Scanner">
        { str }
        <div className="Scanner__videoContainer"></div>
      </div>
    )
  }
}

import store from "../store"
import history from "../history"
import scan from "./scanner"

import React from "react"
import { Button } from "@components"

import { getProductByBc } from "@actions/Product"
import { showMessage } from "@actions/Message"

let scannedBC
let scannedProduct

const handleChange = () => {
  let prevScannedProduct = scannedProduct
  scannedProduct = store.getState().scannedProduct.product

  if (scannedProduct !== prevScannedProduct) {
    if (scannedProduct) {
      let url = "/product/" + scannedProduct.id
      if (history.location.pathname !== url) {
        ga && ga('send', 'event', 'ProductScan', 'found', scannedProduct.bc)
        history.push(url)
      }
    } else if (scannedProduct === undefined) {
      ga && ga('send', 'event', 'ProductScan', 'not found', scannedBC)
      let msg = {
        title: "Produkt nenalezen",
        text: "Můžeš ho zkusit vyhledat podle názvu"
      }
      let ext = {
        text: "Ale můžeš nám ho pomoct přidat :)",
        getFooter: (hideMsg) => (
          <div style={{textAlign: "center", marginTop: "20px"}}>
            <Button color="green" onClick={() => { hideMsg(); history.push("/add-product") }}>Přidej produkt</Button>
          </div>
        )
      }

      Object.assign(msg, (__APP_MODE__ === "mob") ? ext : {})

      store.dispatch(showMessage(msg))
    }
  }
}

let unsubscribe = store.subscribe(handleChange)

export default () => {
  scan()
    .then(bc => {
      if (bc) {
        scannedBC = bc
        ga && ga('send', 'event', 'ProductScan', 'searching', scannedBC)
        store.dispatch(getProductByBc(bc))
      }
    })
    .catch(err => alert("Skenování selhalo."))
}

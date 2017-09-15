import store from "../store"
import history from "../history"
import scan from "./scanner"

import { getProductByBc, resetScannedProduct } from "../actions/Product"
import { showMessage } from "../actions/Message"

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
      store.dispatch(resetScannedProduct())
    } else if (scannedProduct === undefined) {
      ga && ga('send', 'event', 'ProductScan', 'not found', scannedBC)
      store.dispatch(showMessage({ title: "Kód nenalezen", text: "Zkuste produkt vyhledat pomocí textového vyhledávání." }))
      store.dispatch(resetScannedProduct())
    }
  }
}

let unsubscribe = store.subscribe(handleChange)

export default () => {
  scan()
    .then(bc => {
      scannedBC = bc
      ga && ga('send', 'event', 'ProductScan', 'searching', scannedBC)
      store.dispatch(getProductByBc(bc))
    })
    .catch(err => alert("Skenování selhalo."))
}

import "whatwg-fetch"
import { showMessage } from "./Message"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_RESET = `${SEARCH_PRODUCT}_RESET`
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_PRODUCT_BY_ID_RESET = `${GET_PRODUCT_BY_ID}_RESET`
export const GET_PRODUCT_BY_BC = "GET_PRODUCT_BY_BC"
export const REPORT_MISTAKE = "REPORT_MISTAKE"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

const rootUrl = (__APP_MODE__ === "mob" ? 'https://viscokupujes.cz' : '')

const __checkConnection = () => {
  if (__APP_MODE__ === "mob" && navigator.connection.type === "none") {
    return (dispatch) => dispatch(showMessage({
      title: "Vaše zařízení je offline",
      text: "Připojte zařízení k síti a zkuste to znovu."
    }))
  }
  return false
}

export function updateProduct(pr) {
  return ({
    type: UPDATE_PRODUCT,
    payload: __checkConnection() || fetch(
      `${rootUrl}/api/add-product`,
      {
        method: "PUT",
        body: JSON.stringify(pr)
      }
    )
  })
}

export function addProduct(pr) {
  return ({
    type: ADD_PRODUCT,
    payload: __checkConnection() || fetch(
      `${rootUrl}/api/add-product`,
      {
        method: "POST",
        body: JSON.stringify(pr)
      }
    )
  })
}

export function searchProduct(term) {
  return __checkConnection() || ({
    type: SEARCH_PRODUCT,
    payload: fetch(`${rootUrl}/api/product?name=${term}`).then(resp => resp.json())
  })
}

export function getProductById(id) {
  return __checkConnection() || ({
    type: GET_PRODUCT_BY_ID,
    payload: fetch(`${rootUrl}/api/product/${id}`).then(resp => resp.json())
  })
}

export function getProductByBc(bc) {
  return __checkConnection() || ({
    type: GET_PRODUCT_BY_BC,
    payload: {
      promise: fetch(`${rootUrl}/api/product/?bc=${bc}`).then(resp => resp.json()),
      data: bc
    }
  })
}

export function reportMistake(msg, pr) {
  let p = Object.assign({}, pr, {promProducts: null})
  let text = msg + '\n=======================\n' + JSON.stringify(p)
  return __checkConnection() || ({
    type: REPORT_MISTAKE,
    payload: fetch(
      `${rootUrl}/api/report`,
      {
        method: "POST",
        body: text
      }
    )
  })
}

export function resetSearchProduct() {
  return ({ type: SEARCH_PRODUCT_RESET })
}

export function resetActiveProduct() {
  return ({ type: GET_PRODUCT_BY_ID_RESET })
}

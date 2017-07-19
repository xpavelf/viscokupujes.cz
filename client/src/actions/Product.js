import "whatwg-fetch"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_RESET = `${SEARCH_PRODUCT}_RESET`
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_PRODUCT_BY_ID_RESET = `${GET_PRODUCT_BY_ID}_RESET`
export const GET_PRODUCT_BY_BC = "GET_PRODUCT_BY_BC"
export const GET_PRODUCT_BY_BC_RESET = `${GET_PRODUCT_BY_BC}_RESET`

const rootUrl = "https://viscokupujes.cz"

export function searchProduct(term) {
  return ({
    type: SEARCH_PRODUCT,
    payload: fetch(`${rootUrl}/api/product?name=${term}`).then(resp => resp.json())
  })
}

export function getProductById(id) {
  return ({
    type: GET_PRODUCT_BY_ID,
    payload: fetch(`${rootUrl}/api/product/${id}`).then(resp => resp.json())
  })
}

export function getProductByBc(bc) {
  return ({
    type: GET_PRODUCT_BY_BC,
    payload: fetch(`${rootUrl}/api/product/?bc=${bc}`).then(resp => resp.json())
  })
}

export function resetScannedProduct() {
  return ({ type: GET_PRODUCT_BY_BC_RESET })
}

export function resetSearchProduct() {
  return ({ type: SEARCH_PRODUCT_RESET })
}

export function resetActiveProduct() {
  return ({ type: GET_PRODUCT_BY_ID_RESET })
}

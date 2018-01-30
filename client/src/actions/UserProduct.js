import "whatwg-fetch"
export const GET_USER_PRODUCT = "GET_USER_PRODUCT"
export const APPROVE_USER_PRODUCT = "APPROVE_USER_PRODUCT"
export const REJECT_USER_PRODUCT = "REJECT_USER_PRODUCT"

const rootUrl = (__APP_MODE__ === "mob" ? 'https://viscokupujes.cz' : '')

export function getUserProduct() {
  return ({
    type: GET_USER_PRODUCT,
    payload: fetch(`${rootUrl}/api/user-product`).then(resp => resp.json())
  })
}

export function approveUserProduct(pr) {
  return ({
    type: APPROVE_USER_PRODUCT,
    payload: fetch(
      `${rootUrl}/api/user-product/approve`,
      {
        method: "POST",
        body: JSON.stringify(pr)
      }
    )
  })
}

export function rejectUserProduct(pr) {
  return ({
    type: REJECT_USER_PRODUCT,
    payload: fetch(
      `${rootUrl}/api/user-product/reject`,
      {
        method: "POST",
        body: JSON.stringify(pr)
      }
    )
  })
}

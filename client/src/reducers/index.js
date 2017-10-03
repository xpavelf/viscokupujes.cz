import { SEARCH_PRODUCT, SEARCH_PRODUCT_RESET,
  GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_RESET,
  GET_PRODUCT_BY_BC, GET_PRODUCT_BY_BC_RESET,
  REPORT_MISTAKE } from "../actions/Product"

import { SHOW_MESSAGE } from "../actions/Message"

export const INITIAL_STATE = {
  searchProduct: { products: null, err: null, pending: false },
  activeProduct: { product: null, err: null, pending: false },
  searchHistory: [],
  scannedProduct: { bc: null, product: null, err: null, pending: false },
  messages: [],
  report: { err: null, pending: false }
}

const SEARCH_HISTORY_LIMIT = 20

export default function(state=INITIAL_STATE, action) {

  switch (action.type) {
    case SEARCH_PRODUCT_RESET:
      return { ...state, searchProduct: INITIAL_STATE.searchProduct }
    case `${SEARCH_PRODUCT}_PENDING`:
      return { ...state, searchProduct: { products: null, err: null, pending: true } }

    case `${SEARCH_PRODUCT}_FULFILLED`:
      return { ...state, searchProduct: { products: action.payload, err: null, pending: false } }

    case GET_PRODUCT_BY_ID_RESET:
      return { ...state, activeProduct: INITIAL_STATE.activeProduct }
    case `${GET_PRODUCT_BY_ID}_PENDING`:
      return { ...state, activeProduct: { product: null, err: null, pending: true } }
    case `${GET_PRODUCT_BY_ID}_FULFILLED`:
      return {
        ...state,
        activeProduct: { product: action.payload, err: null, pending: false },
        searchHistory: [action.payload, ...state.searchHistory.filter(h => h.id !== action.payload.id)].slice(0, SEARCH_HISTORY_LIMIT)
      }

    case `${REPORT_MISTAKE}_PENDING`:
      return { ...state, report: { err: null, pending: true } }

    case `${REPORT_MISTAKE}_FULFILLED`:
      return { ...state, report: { err: null, pending: false } }

    case `${GET_PRODUCT_BY_BC}_PENDING`:
      return { ...state, scannedProduct: { ...INITIAL_STATE.scannedProduct, bc: action.payload, pending: true } }
    case `${GET_PRODUCT_BY_BC}_FULFILLED`:
      return { ...state, scannedProduct: { ...INITIAL_STATE.scannedProduct,  bc: state.scannedProduct.bc, product: action.payload } }

    case SHOW_MESSAGE:
      return { ...state, messages: state.messages.concat(action.payload) }
  }

  return state
}

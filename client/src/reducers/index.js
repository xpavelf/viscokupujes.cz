import { SEARCH_PRODUCT, SEARCH_PRODUCT_RESET,
  GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_RESET,
  GET_PRODUCT_BY_BC, GET_PRODUCT_BY_BC_RESET } from "../actions/Product"

import { SHOW_MESSAGE } from "../actions/Message"

export const INITIAL_STATE = {
  searchProduct: { products: null, err: null, pending: false },
  activeProduct: { product: null, err: null, pending: false },
  searchHistory: [],
  scannedProduct: { product: null, err: null, pending: false },
  messages: []
}

const SEARCH_HISTORY_LIMIT = 10

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
    case `${GET_PRODUCT_BY_ID}_FULFILLED`:
      return {
        ...state,
        activeProduct: { product: action.payload, err: null, pending: false },
        searchHistory: [action.payload, ...state.searchHistory.filter(h => h.id !== action.payload.id)].slice(0, SEARCH_HISTORY_LIMIT)
      }

    case GET_PRODUCT_BY_BC_RESET:
      return { ...state, scannedProduct: INITIAL_STATE.scannedProduct }
    case `${GET_PRODUCT_BY_BC}_FULFILLED`:
      return { ...state, scannedProduct: { product: action.payload, err: null, pending: false } }

    case SHOW_MESSAGE:
      console.log("reducer - adding msg", action)
      return { ...state, messages: state.messages.concat(action.payload) }
  }

  return state
}

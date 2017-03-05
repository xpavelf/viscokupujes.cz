import { SEARCH_PRODUCT, SEARCH_PRODUCT_RESET,
  GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_RESET, GET_PRODUCT_BY_BC } from "../actions/Product"

export const INITIAL_STATE = {
  searchProduct: { products: null, err: null, pending: false },
  activeProduct: { product: null, err: null, pending: false },
  searchHistory: [],
  scannedProduct: { product: null, err: null, pending: false }
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

    case `${GET_PRODUCT_BY_BC}_FULFILLED`:
      // let { data, status } = action.payload
      // if (status === 404) {
      //
      // }
      
      return { ...state, scannedProduct: { product: action.payload, err: null, pending: false } }

  }

  return state
}

import { SEARCH_PRODUCT, SEARCH_PRODUCT_RESET,
  GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_RESET } from "../actions/Product"

const INITIAL_STATE = {
  searchProduct: { products: null, err: null, pending: false },
  activeProduct: { product: null, err: null, pending: false }
}

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
      return { ...state, activeProduct: { product: action.payload, err: null, pending: false } }


  }

  return state
}

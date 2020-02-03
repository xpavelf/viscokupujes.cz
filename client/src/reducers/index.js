import { SEARCH_PRODUCT, SEARCH_PRODUCT_RESET,
  GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_RESET,
  GET_PRODUCT_BY_BC, REPORT_MISTAKE
} from "@actions/Product"

import { GET_USER_PRODUCT, APPROVE_USER_PRODUCT, REJECT_USER_PRODUCT } from "@actions/UserProduct"
import { GET_RECIPES } from "@actions/Recipe"
import { SHOW_MESSAGE, ERROR_MESSAGE } from "@actions/Message"
import { SAVE_ALERT } from '@actions/Alert'

export const INITIAL_STATE = {
  recipes: {  bc: null, recipes: null, err: null, pending: false },
  searchProduct: { products: null, err: null, pending: false },
  activeProduct: { product: null, err: null, pending: false },
  searchHistory: [],
  scannedProduct: { bc: null, product: null, err: null, pending: false },
  messages: [],
  report: { err: null, pending: false },
  userProduct: null,
  alert: { e: [], a: [], gf: false, po: false, text: '' }
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
    case `${SEARCH_PRODUCT}_REJECTED`:
      return { ...state, messages: state.messages.concat(ERROR_MESSAGE) }

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
    case `${GET_PRODUCT_BY_ID}_REJECTED`:
      return { ...state, messages: state.messages.concat(ERROR_MESSAGE) }

    case `${GET_USER_PRODUCT}_FULFILLED`:
      return { ...state, userProduct: action.payload }
    case `${APPROVE_USER_PRODUCT}_FULFILLED`:
      return { ...state, userProduct: { ...state.userProduct, review: 'approved' } }
    case `${REJECT_USER_PRODUCT}_FULFILLED`:
      return { ...state, userProduct: { ...state.userProduct, review: 'rejected' } }

    case `${GET_RECIPES}_PENDING`:
      return { ...state, recipes: { ...INITIAL_STATE.recipes, bc: action.payload.bc, pending: true }}
    case `${GET_RECIPES}_FULFILLED`:
      return { ...state, recipes: { ...INITIAL_STATE.recipes, bc: state.recipes.bc, recipes: action.payload.data }}

    case `${REPORT_MISTAKE}_PENDING`:
      return { ...state, report: { err: null, pending: true } }
    case `${REPORT_MISTAKE}_FULFILLED`:
      return { ...state, report: { err: null, pending: false } }
    case `${REPORT_MISTAKE}_REJECTED`:
      return { ...state, messages: state.messages.concat(ERROR_MESSAGE) }

    case `${GET_PRODUCT_BY_BC}_PENDING`:
      return { ...state, scannedProduct: { ...INITIAL_STATE.scannedProduct, bc: action.payload, pending: true } }
    case `${GET_PRODUCT_BY_BC}_FULFILLED`:
      return { ...state, scannedProduct: { ...INITIAL_STATE.scannedProduct, bc: state.scannedProduct.bc, product: action.payload } }
    case `${GET_PRODUCT_BY_BC}_REJECTED`:
      return { ...state, messages: state.messages.concat(ERROR_MESSAGE) }

    case SHOW_MESSAGE:
      return { ...state, messages: state.messages.concat(action.payload) }

    case SAVE_ALERT:
      return { ...state, alert: action.payload }
  }

  return state
}

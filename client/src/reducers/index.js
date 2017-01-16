export default function(state={
    foundProducts: null
  }, action) {

  switch (action.type) {
    case "CLEAR_FOUND_PRODUCTS":
      return { ...state, foundProducts: null };
      break;

    case "SEARCH_PRODUCT_PENDING":
      return {
        ...state,
        foundProducts: null
      }
      break;
    case "SEARCH_PRODUCT_FULFILLED":
      return {
        ...state,
        foundProducts: action.payload
      }
      break;
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
        foundProducts: null
      }
      break;
  }

  return state;
};

import "whatwg-fetch";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const CLEAR_FOUND_PRODUCTS = "CLEAR_FOUND_PRODUCTS";

export function searchProduct(term) {
  return ({
    type: SEARCH_PRODUCT,
    payload: fetch(`/api/product?q=${term}`).then(resp => resp.json())
  });
}

export function selectProduct(product) {
  return ({
    type: SELECT_PRODUCT,
    payload: product
  });
}

export function clearFoundProducts() {
  return ({
    type: CLEAR_FOUND_PRODUCTS
  });
}

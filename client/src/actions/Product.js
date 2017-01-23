import "whatwg-fetch";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export function searchProduct(term) {
  return ({
    type: SEARCH_PRODUCT,
    payload: fetch(`/api/product?q=${term}`).then(resp => resp.json())
  });
}

export function getProductById(id) {
  return ({
    type: GET_PRODUCT_BY_ID,
    payload: fetch(`/api/product/${id}`).then(resp => resp.json())
  });
}

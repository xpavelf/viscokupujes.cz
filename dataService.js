const products = require("../sc/data.json")
const removeDiacritics = require("diacritics").remove
const { queryStringSearch } = require("./strUtils")
const SEARCH_BY_NAME_LIMIT = 35
const PROPMOTE_PRODUCTS_LIMIT = 50

const predicateWithHits = (query) => (prod) => {
  const hits = queryStringSearch(query, removeDiacritics(prod.name))
  return hits ? [prod, hits] : null
}

const arr_filter_with_map = (arr, cb, limit = arr.length) => {
  let ret = []
  for (let i = 0; i < arr.length && ret.length < limit; i++) {
    let val = arr[i]
    let res = cb(val, i, arr)
    if (res) ret.push(res)
  }
  return ret
}

module.exports = {
  findById(id) {
    return products.find(product => product.id === id)
  },

  searchByName(name) {
    if (name) {
      const prodsWithHits = arr_filter_with_map(
        products,
        predicateWithHits(name),
        SEARCH_BY_NAME_LIMIT
      )

      return prodsWithHits.map(
        ([prod, hits]) => Object.assign({}, prod, { hits })
      )
    }

    return []
  },

  searchByBc(bc) {
    return products.find(
      pr => Array.isArray(pr.bc)
        ? pr.bc.some(prbc => prbc == bc)
        : pr.bc == bc
    )
  },

  getPromotedProducts(product) {
    let promProducts = []
    for (let i = 0; i < products.length && promProducts.length < PROPMOTE_PRODUCTS_LIMIT; i++) {
      const pr = products[i]
      const filter = pr => pr.prom === true && pr.category === product.category && pr.id !== product.id
      if (filter) {
        promProducts.push(pr)
      }
    }

    return promProducts
  },
}

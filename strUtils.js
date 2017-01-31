const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const termToRegx = (term) => new RegExp(`\\b${escapeRegExp(term)}`, "gi")
const removeDiacritics = require("diacritics").remove

const queryToRegxs = (query) => query.split(/\b/)

const rangeMerge = (ranges) => {
  let result = [];

  ranges.forEach(r => {
      if(!result.length || r[0] > result[result.length-1][1])
          result.push(r)
      else
          result[result.length-1][1] = r[1]
  });

  return result;
}
const rangeSort = (a, b) => a[0]-b[0] || a[1]-b[1]

const queryStringSearch = (query, str) => {
  let q = removeDiacritics(query)
  let s = removeDiacritics(str)
  let terms = q.split(/\b/).filter(x => x.match(/\b/))

  let res = terms.map(termToRegx).every(r => r.test(s))

  if (res) {
    return terms.map(termToRegx).reduce((hits, regx, i) => {
      let match;
      while (match = regx.exec(s)) {
        hits.push([match.index, match.index + terms[i].length])
      }
      hits.sort(rangeSort)
      return rangeMerge(hits)
    }, [])
  }

  return null
}

module.exports = {
  queryStringSearch
}

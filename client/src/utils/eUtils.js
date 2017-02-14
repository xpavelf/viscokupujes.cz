const eNum = (str) => {
  let val = parseInt(str.substring(1))
  return Number.isNaN(val) ? 0 : val
}

export const eComparator = (a, b) => {
  let res = b.rating - a.rating
  return res === 0 ? eNum(a.id) - eNum(b.id) : res
}

const eNum = (str) => {
  let val = parseInt(str.substring(1))
  return Number.isNaN(val) ? 0 : val
}

const eNumSub = (a, b) => eNum(a) - eNum(b)

export const eComparator = (a, b) => {
  let res = b.rating - a.rating

  if (Number.isNaN(res)) {
    return a.rating === undefined
      ? (b.rating === undefined ? eNumSub(a.id, b.id) : 1)
      : -1
  }

  return res === 0 ? eNumSub(a.id, b.id) : res
}

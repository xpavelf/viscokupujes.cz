const removeDiacritics = require("diacritics").remove
const { ecka, getEData } = require('ecka')

const PALM_OIL_RX = /\b(palmov(?!\w+\scukr)|palmoj|palm oil|cbe)/gi
const GF_RX = new RegExp(
  "/" + ["přírodní cukr", "glukozofruktozovy sirup", "glukozo-fruktozovy sirup", "fruktozo-glukozovy sirup",
  "fruktozo-glukozovym sirupem", "fruktozoglukozovy sirup", "fruktózový sirup", "glukózový sirup",
  "glukozo-fruktozovym sirupem", "glukozovym sirupem", "fruktozovym sirupem", "glukozofruktozovym sirupem"]
    .map(str => removeDiacritics(str))
    .join("|")
  + "/"
  , "i")

const hasPalmOil = (ingredients) =>
  removeDiacritics(ingredients).match(PALM_OIL_RX) !== null

const hasGlukoseSirup = (ingredients) =>
  removeDiacritics(ingredients).match(GF_RX) !== null


const populateE = (product) => {
  const arr_e = product.e.map(getEData)
  return Object.assign({}, product, { e: arr_e})
}

module.exports = { hasGlukoseSirup, hasPalmOil, populateE }

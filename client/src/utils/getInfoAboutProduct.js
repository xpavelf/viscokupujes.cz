import { remove as removeDiacritics } from 'diacritics'
import { getAllergens } from 'alergeny'
import { ecka, getAdditives, getEData } from 'ecka'

const populateProduct= (product) => {
  const arr_e = product.e.map(getEData)
  return Object.assign({}, product, { e: arr_e})
}

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

export { ecka, getAdditives, getAllergens, hasPalmOil, hasGlukoseSirup, populateProduct }

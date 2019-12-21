const products = require("../data/data.json")
const removeDiacritics = require("diacritics").remove
const fs = require("fs")
const { getAllergens } = require('alergeny')
const { ecka, getAdditives } = require('ecka')
const { hasGlukoseSirup, hasPalmOil, populateE } = require('./productUtils')
const { queryStringSearch } = require("./strUtils")

const USER_PRODUCTS_PATH = `${__dirname}/user-products`

module.exports = (app) => {

  const predicateWithHits = (query) => (prod) => {
    let hits = queryStringSearch(query, removeDiacritics(prod.name))

    if (hits && hits.length) {
      return Object.assign({}, prod, { hits })
    }

    return null
  }

  const arr_filter_with_map = (arr, cb, limit) => {
    let ret = []
    for (let i = 0; i < arr.length && ret.length < limit; i++) {
      let val = arr[i]
      let res = cb(val, i, arr)
      if (res) ret.push(res)
    }
    return ret
  }

  const isBcEqual = (bc0, bc1) => bc0 === bc1
  const searchByBc = (bc) => products.find(pr => Array.isArray(pr.bc) ? pr.bc.some(prbc => isBcEqual(prbc, bc)) : isBcEqual(pr.bc, bc))
  const searchByName = (name) => {
    console.info("product search '%s'", name)
    const limit = 35
    return name ? arr_filter_with_map(products, predicateWithHits(name), limit) : products.slice(0, limit)
  }

  const getUnapprovedFromFile = (file) => {
    if (file) {
      let product = JSON.parse(fs.readFileSync(`${USER_PRODUCTS_PATH}/review/${file}`))
      product.id = `FILE-${Buffer.from(file).toString('base64')}`

      let p = {
        bc: product.ean,
        ingredients: product.ing,
        id: product.id,
        producer: product.producer,
        name: 'POZOR ZATÍM NESCHVÁLENO: ' + product.name,
        e: getAdditives(product.ing),
        a: getAllergens(product.ing),
        po: hasPalmOil(product.ing),
        gf: hasGlukoseSirup(product.ing),
        promProducts: []
      }

      if (p.name.length < 4 || p.ingredients.length < 5)
        return null

      return populateE(p)
    }
  
    return null
  }

  const searchInUnapproved = (bc) => {
    let file = fs.readdirSync(`${USER_PRODUCTS_PATH}/review`)
      .find(f => f.endsWith(".json") && f.slice(15).slice(0, -5) === ""+bc)

    return getUnapprovedFromFile(file)

    return null
  }

  app.post("/api/report", (req, res) => {
    let d = new Date()
    let dstr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${('0' + d.getMinutes()).slice(-2)}`
    fs.appendFile(`${__dirname}/reports/reported-mistakes.txt`, "\n\n" + dstr + "\n" + req.body, (err) => {
      if (err) throw err
    })
    res.send()
  })

  app.get("/api/product", (req, res) => {
    let name = req.query.q || req.query.name
    let bc = req.query.bc
    let retVal
    if (bc) {
      let bcInt = parseInt(bc)
      retVal = searchByBc(bcInt)
      
      if (retVal) {
        res.json(populateE(retVal))
      } else {
        retVal = searchInUnapproved(bcInt)
        if (retVal) {
          
          res.json(retVal)
        } else {
          res.status(404).json(null)
        }
        
      }
    } else if (name) {
      retVal = searchByName(name)
      res.json(retVal.map(populateE))
    }
  })

  app.get("/api/product/:id", (req, res) => {
    let id = req.params.id
    console.info("product get by id %s", id)

    if (id.startsWith('FILE-')) {
      let idbase64 = id.slice(5)
      let filename = Buffer.from(idbase64, 'base64').toString('ascii')
      let p = getUnapprovedFromFile(filename)
      return res.json(p)
    }

    const product = products.find(product => product.id === id)

    let retVal = populateE(product)

    if (product) {
      let promProducts = products
          .filter(pr => pr.prom === true && pr.category === product.category && pr.id !== product.id)
          .map(populateE)
      retVal.promProducts = promProducts
    }

    res.json(retVal)
  })

  app.post("/api/get-info", (req, res) => {
    let data = req.is('application/json') ? req.body : JSON.parse(req.body)

    if (data.ingredients) {
      let additives = getAdditives(data.ingredients)
      let allergens = getAllergens(data.ingredients)
      let po = hasPalmOil(data.ingredients)
      let gf = hasGlukoseSirup(data.ingredients)

      res.json(populateE({
        ingredients: data.ingredients,
        a: allergens,
        e: additives,
        po,
        gf
      }))

    } else {
      res.status(404).json("'ingredients' field not present")
    }
  })

}

const http = require("http")
const express = require("express")
const compression = require("compression")
const app = express()
const bodyParser = require("body-parser")
const winston = require("winston")
const products = require("../data/data.json")
const removeDiacritics = require("diacritics").remove
const fs = require("fs")
const { getAllergens } = require('alergeny')
const { ecka, getAdditives } = require('ecka')
const { queryStringSearch } = require("./strUtils")

const TMPL = fs.readFileSync(`${__dirname}/user-products/tmpl.html`, 'utf8')

winston.add(winston.transports.File, {
  filename: 'run.log',
  dirname: './log',
  maxsize: 1000,
  maxFiles: 3
})

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '250kb' }))
app.use(bodyParser.text({ limit: '250kb' }))
app.use('/', express.static(`${__dirname}/www`))

const port = process.env.PORT || process.env.NODE_PORT || 8989
const ipaddr =  process.env.NODE_IP || 'localhost'

const router = express.Router()

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

const _map_e = (product) => {
  let arr_e = product.e.map(e => {
    let info = ecka[e]
    if (!info) {
      let eParent = e.replace(/(?!e\d+)i+/g, "")
      return Object.assign({ id: eParent }, ecka[eParent])
    }

    return Object.assign({ id: e }, ecka[e])
  })
  return Object.assign({}, product, { e: arr_e})
}

const isBcEqual = (bc0, bc1) => bc0 === bc1
const searchByBc = (bc) => products.find(pr => Array.isArray(pr.bc) ? pr.bc.some(prbc => isBcEqual(prbc, bc)) : isBcEqual(pr.bc, bc))
const searchByName = (name) => {
  winston.info("product search '%s'", name)
  const limit = 35
  return name ? arr_filter_with_map(products, predicateWithHits(name), limit) : products.slice(0, limit)
}

app.post("/api/add-product", (req, res) => {
  let data = JSON.parse(req.body)
  let uid = parseInt(data.uid)
  let bc = parseInt(data.bc)
  let fn = `[${uid}]${bc}.html`
  let out = TMPL.replace('__PLACEHOLDER__', JSON.stringify({
    ean: data.bc,
    mainPic: "data:image/jpeg;base64, " + data.mainPic,
    ingPic: "data:image/jpeg;base64, " + data.ingPic
  }))

  fs.writeFile(`${__dirname}/user-products/${fn}`, out, (err) => {
    if (err) throw err
    res.send()
  })
})

app.put("/api/add-product", (req, res) => {
  let data = JSON.parse(req.body)
  let uid = parseInt(data.uid)
  let bc = parseInt(data.bc)
  let fn = `[${uid}]${bc}.html`
  let path = `${__dirname}/user-products/${fn}`
  if (fs.existsSync(path)) {
    let d = fs.readFileSync(path, 'utf8')
    let out = d.replace('__PLACEHOLDER__INGTXT__', JSON.stringify(data.ingTxt))
    fs.writeFile(path, out, (err) => {
      if (err) throw err
    })
  }
  res.send()
})

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
      res.json(_map_e(retVal))
    } else {
      res.status(404).json(null)
    }
  } else if (name) {
    retVal = searchByName(name)
    res.json(retVal.map(_map_e))
  }
})

app.get("/api/product/:id", (req, res) => {
  let id = req.params.id
  winston.info("product get by id %s", id)

  const product = products.find(product => product.id === id)

  let retVal = _map_e(product)

  if (product) {
    let promProducts = products
        .filter(pr => pr.prom === true && pr.category === product.category && pr.id !== product.id)
        .map(_map_e)
    retVal.promProducts = promProducts
  }

  res.json(retVal)
})

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

app.post("/api/get-info", (req, res) => {
  let data = req.is('application/json') ? req.body : JSON.parse(req.body)

  if (data.ingredients) {
    let additives = getAdditives(data.ingredients)
    let allergens = getAllergens(data.ingredients)
    let po = hasPalmOil(data.ingredients)
    let gf = hasGlukoseSirup(data.ingredients)

    res.json(_map_e({
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

// TODO: REMOVE
// app.get("/api/recipes/", (req, res) => {
//   setTimeout(() => res.sendFile(__dirname + "/mock-recipes.json"), 500)
// })

// FIXME
app.get("/cooperation", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/product/*", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/search-history", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/add-product", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/add-product/entry", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/ecka", (req, res) => res.sendFile(__dirname + "/www/index.html"))

const server = http.createServer(app)
server.listen(port, ipaddr, () => {
  let host = server.address().address
  let port = server.address().port

  winston.info(`Listening at http://${host}:${port}`)
})

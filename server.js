const http = require("http")
const express = require("express")
const compression = require("compression")
const app = express()
const bodyParser = require("body-parser")
const winston = require("winston")
const products = require("../data/data.json")
const ecka = require("./e.json")
const removeDiacritics = require("diacritics").remove
const { queryStringSearch } = require("./strUtils")

winston.add(winston.transports.File, {
  filename: 'run.log',
  dirname: './log',
  maxsize: 1000,
  maxFiles: 3
})

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', express.static('www'))

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

const isBcEqual = (bc0, bc1) => parseInt(bc0) === parseInt(bc1)
const searchByBc = (bc) => products.find(pr => isBcEqual(pr.bc, bc))
const searchByName = (name) => {
  winston.info("product search '%s'", name)
  const limit = 35
  return name ? arr_filter_with_map(products, predicateWithHits(name), limit) : products.slice(0, limit)
}

app.get("/api/product", (req, res) => {
  let name = req.query.q || req.query.name
  let bc = req.query.bc
  let retVal
  if (bc) {
    retVal = searchByBc(bc)
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

app.get("/api/product/:id(\\d+)", (req, res) => {
  let id = parseInt(req.params.id)
  winston.info("product get by id %d", id)

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

// FIXME
app.get("/scanner", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/product/*", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/search-history", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/about-us", (req, res) => res.sendFile(__dirname + "/www/index.html"))
app.get("/ecka", (req, res) => res.sendFile(__dirname + "/www/index.html"))

// const fs = require("fs")
// var options = {
//    key  : fs.readFileSync('../cert/localhost.key'),
//    cert : fs.readFileSync('../cert/localhost.cert')
// }
// const server = http.createServer(options, app)

const server = http.createServer(app)
server.listen(port, ipaddr, () => {
  let host = server.address().address
  let port = server.address().port

  winston.info(`Listening at http://${host}:${port}`)
})

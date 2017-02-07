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
app.use('/', express.static('public'))

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
  let arr_e = product.e.map(e => Object.assign({ id: e }, ecka[e]))
  return Object.assign({}, product, { e: arr_e})
}


app.get("/api/product", (req, res) => {
  let q = req.query.q
  winston.info("product search '%s'", q)
  const limit = 35
  const filtered = q ? arr_filter_with_map(products, predicateWithHits(q), limit) : products.slice(0, limit)

  res.json(filtered.map(_map_e))
})

app.get("/api/product/:id(\\d+)", (req, res) => {
  let id = parseInt(req.params.id)
  winston.info("product get by id %d", id)

  const product = products.find(product => product.id === id)
  res.json(_map_e(product))
})

app.get("/product/*", (req, res) => res.sendFile(__dirname + "/public/index.html"))
app.get("/ecka", (req, res) => res.sendFile(__dirname + "/public/index.html"))

const server = http.createServer(app)
server.listen(port, ipaddr, () => {
  let host = server.address().address
  let port = server.address().port

  winston.info(`Listening at http://${host}:${port}`)
})

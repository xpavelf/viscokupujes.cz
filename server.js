const http = require("http")
const express = require("express")
const compression = require("compression")
const app = express()
const routes = require('./routes')
const bodyParser = require("body-parser")

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '350kb' }))
app.use(bodyParser.text({ limit: '350kb' }))
app.use('/', express.static(`${__dirname}/www`))

const port = process.env.PORT || process.env.NODE_PORT || 8989
const ipaddr =  process.env.NODE_IP || 'localhost'

const router = express.Router()

// TODO: REMOVE
// app.get("/api/recipes/", (req, res) => {
//   setTimeout(() => res.sendFile(__dirname + "/mock-recipes.json"), 500)
// })

routes(app)
app.get("/*", (req, res) => res.sendFile(__dirname + "/www/index.html"))


const server = http.createServer(app)
server.listen(port, ipaddr, () => {
  let host = server.address().address
  let port = server.address().port

  console.info(`Listening at http://${host}:${port}`)
})

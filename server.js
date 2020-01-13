const http = require("http")
const express = require("express")
const compression = require("compression")
const app = express()
const routes = require('./routes')
const routes_userProducts = require('./routes-userProducts')
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
routes_userProducts(app)

app.get("/*", (req, res) => res.sendFile(__dirname + "/www/index.html"))

const handleExit = (signal) => {
  console.log(`Received ${signal}. Closing the server.`)
  server.close(function () {
    process.exit(0);
  });
}
process.on('SIGINT', handleExit)
process.on('SIGQUIT', handleExit)
process.on('SIGTERM', handleExit)


const server = http.createServer(app)
server.listen(port, ipaddr, () => {
  let host = server.address().address
  let port = server.address().port

  console.info(`Listening at http://${host}:${port}`)
})

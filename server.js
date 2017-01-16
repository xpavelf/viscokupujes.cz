const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const winston = require("winston");
const products = require("./data.json");
const ecka = require("./e.json");
const removeDiacritics = require("diacritics").remove;

winston.add(winston.transports.File, {
  filename: 'run.log',
  dirname: './log',
  maxsize: 1000,
  maxFiles: 3
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

const port = process.env.PORT || 8989;

const router = express.Router();

const _arr_filter = (arr, cb, limit) => {
  let ret = [];
  for (let i = 0; i < arr.length && ret.length < limit; i++) {
    let val = arr[i];
    if (cb(val, i, arr)) ret.push(val);
  }
  return ret;
}

const _map_e = (product) => {
  let gr = product.e.reduce((acc, e) => {
    let ind = ecka[e].rating;
    acc[ind][e] = ecka[e];
    return acc;
  }, Array.of({}, {}, {}));

  return Object.assign({}, product, { e: gr });
}

app.get("/api/product", (req, res) => {
  let q = req.query.q;
  winston.info("product search '%s'", q);

  let term = removeDiacritics(q).toLowerCase();

  const predicate = (product) => removeDiacritics(product.name)
    .toLowerCase()
    .split(" ")
    .some(str => str.startsWith(term));

  const filtered = _arr_filter(products, predicate, 20)
    .map(_map_e);

  res.json(filtered);
});

app.get("/api/product/:id(\\d+)", (req, res) => {
  let id = parseInt(req.params.id);
  winston.info("product get by id %d", id);

  const product = products.find(product => product.id === id);
  res.json(_map_e(product));
});

const server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;

  winston.info(`Listening at http://${host}:${port}`);
});

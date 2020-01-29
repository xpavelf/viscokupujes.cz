const USER_PRODUCTS_PATH = `${__dirname}/user-products`
const removeDiacritics = require("diacritics").remove
const fs = require("fs")
const { getAllergens } = require('alergeny')
const { ecka, getAdditives } = require('ecka')
const { hasGlukoseSirup, hasPalmOil } = require('./productUtils')

// DEPRECATED
const shuffleArr = (arrSrc) => {
  if (!arrSrc) {
    return
  }

  let arr = arrSrc.slice()
  let ctr = arr.length, temp, index

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr)
      ctr--
      temp = arr[ctr]
      arr[ctr] = arr[index]
      arr[index] = temp
  }
  return arr
}

const RX_JSON = /\.json$/i
fs.readdirSync(USER_PRODUCTS_PATH)
  .filter(fn => RX_JSON.test(fn))


module.exports = (app) => {

  // DEPRECATED
  app.post('/api/user-product/approve', (req, res) => {
    let data = JSON.parse(req.body)

    let fn = data.fn
    if (fn) {
      fs.renameSync(
        `${USER_PRODUCTS_PATH}/review/${fn}`,
        `${USER_PRODUCTS_PATH}/approved/${fn}`
      )

      let usrProducts = []
      if (fs.existsSync(`${USER_PRODUCTS_PATH}/data.json`)) {
        usrProducts = JSON.parse(fs.readFileSync(`${USER_PRODUCTS_PATH}/data.json`))
      }
      let ing = data.ing.replace('\n', ' ')
      let additives = getAdditives(ing)
      let allergens = getAllergens(ing)
      let po = hasPalmOil(ing)
      let gf = hasGlukoseSirup(ing)

      let pr = {
        id: 'UAP-' + usrProducts.length,
        bc: data.ean,
        name: data.name + ' ' + data.q,
        producer: data.producer,
        ingredients: ing,
        a: allergens,
        e: additives,
        q: data.q,
        po,
        gf
      }

      usrProducts.push(pr)
      fs.writeFileSync(`${USER_PRODUCTS_PATH}/data.json`, JSON.stringify(usrProducts))

    }
    res.send()
  })

  // DEPRECATED
  app.post('/api/user-product/reject', (req, res) => {
    let data = JSON.parse(req.body)

    let fn = data.fn
    if (fn) {
      fs.renameSync(
        `${USER_PRODUCTS_PATH}/review/${fn}`,
        `${USER_PRODUCTS_PATH}/rejected/${fn}`
      )
    }
    res.send()
  })

  // DEPRECATED
  app.get('/api/user-product', (req, res) => {
    let files = fs.readdirSync(`${USER_PRODUCTS_PATH}/review`)
      .filter(fn => RX_JSON.test(fn))

    let fn = shuffleArr(files)
      .pop()

    let result = fn
      ? JSON.parse(fs.readFileSync(`${USER_PRODUCTS_PATH}/review/${fn}`))
      : {}

    res.json({ ...result, fn })
  })

  app.post('/api/add-product-full', (req, res) => {
    let data = JSON.parse(req.body)
    let uid = parseInt(data.uid)
    let bc = parseInt(data.bc)
    let fn = `[${uid}]${bc}.json`
    let out = {
      ean: data.bc,
      mainPic: data.mainPic,
      ingPic: data.ingPic,
      q: data.q,
      ing: data.ing,
      name: data.name,
      producer: data.producer
    }
    fs.writeFile(`${USER_PRODUCTS_PATH}/review/${fn}`, JSON.stringify(out), (err) => {
      if (err) throw err
      res.send()
    })
  })

}

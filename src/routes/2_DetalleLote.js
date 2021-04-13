const express = require('express')
const router = express.Router()
const DetalleLote1y2_JSON = require('../json/6_DetalledelLote1y2.json')
const DetalleLote3_JSON = require('../json/7_DetalleLote3.json')

router.post('/Nivel1y2', async (req, res, next) => {
  console.log('usando: DetalleLote1y2', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(DetalleLote1y2_JSON.concat(DetalleLote1y2_JSON))
})

router.post('/Nivel3', async (req, res, next) => {
  console.log('usando: DetalleLote3', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(DetalleLote3_JSON.concat(DetalleLote3_JSON))
})

module.exports = router

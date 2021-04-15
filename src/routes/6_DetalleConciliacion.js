const express = require('express')
const router = express.Router()
const DetalleConciliacionEstados_JSON = require('../json/DetalleConciliacionEstados.json')
const DetalleConciliacionExtraccion_JSON = require('../json/DetalleConciliacionExtraccion.json')

router.post('/Estados', async (req, res, next) => {
  console.log('usando: DetalleConciliacionEstados', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(DetalleConciliacionEstados_JSON.concat(DetalleConciliacionEstados_JSON))
})

router.post('/Extraccion', async (req, res, next) => {
  console.log('usando: DetalleConciliacionExtraccion', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(DetalleConciliacionExtraccion_JSON.concat(DetalleConciliacionExtraccion_JSON))
})

module.exports = router

const express = require('express')
const router = express.Router()
const ConciliacionEstados_JSON = require('../json/ConciliacionEstados.json')
const ConciliacionExtraccion_JSON = require('../json/ConciliacionExtraccion.json')

router.post('/Estados', async (req, res, next) => {
  console.log('usando: ConciliacionEstados', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(ConciliacionEstados_JSON.concat(ConciliacionEstados_JSON))
})

router.post('/Extraccion', async (req, res, next) => {
  console.log('usando: ConciliacionExtraccion', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(ConciliacionExtraccion_JSON.concat(ConciliacionExtraccion_JSON))
})

module.exports = router

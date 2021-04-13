const express = require('express')
const router = express.Router()
const Operador_GenerarLote_JSON = require('../json/Operador_GeneraLote.json')
const Autorizador_JSON = require('../json/0_Autorizador.json')
const OperadorLotesGenerados_JSON = require('../json/3_OperadorLotesGenerados.json')
const J2_2_OperadorLotesGenerados_JSON = require('../json/2_2_OperadorLotesGenerados.json')

router.post('/Autorizador', async (req, res, next) => {
  console.log('usando: Autorizador', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(Autorizador_JSON)
})

router.post('/OperadorGenerarLotes', async (req, res, next) => {
  console.log('usando: OperadorGenerarLotes', req.body)
  // console.log(Operador_GenerarLote_JSON)
  res.status(200).json(Operador_GenerarLote_JSON.concat(Operador_GenerarLote_JSON))
})

router.post('/OperadorGenerarLotes_Detalle', async (req, res, next) => {
  console.log('usando: OperadorGenerarLotes_Detalle', req.body)
  // console.log(Operador_GenerarLote_JSON)
  res.status(200).json(J2_2_OperadorLotesGenerados_JSON.concat(J2_2_OperadorLotesGenerados_JSON))
})

router.post('/OperadorLotesGenerados', async (req, res, next) => {
  console.log('usando: Autorizador', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(OperadorLotesGenerados_JSON)
})

module.exports = router

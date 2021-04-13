const express = require('express')
const router = express.Router()

const HistorialLote_JSON = require('../json/HistorialLote.json')
const HistorialDocPago_JSON = require('../json/HistorialDocPago.json')

router.post('/Lote', async (req, res, next) => {
  console.log('usando: HistorialLote', req.body)
  res.status(200).json(HistorialLote_JSON)
})
router.post('/DocPago', async (req, res, next) => {
  console.log('usando: HistorialDocPago', req.body)
  const list = HistorialDocPago_JSON.map((item) => {
    let obj = {
      NDOC: item.NDOC,
      FECHA_HORA: item.FECHA_HORA,
      ESTADO: { VAL: item.ESTADOVAL, LABEL: item.ESTADOLABEL },
      LOTE_ESTADO: {
        LOTE: item.LOTE,
        ESTADO: item.ESTADO,
      },
      USUARIO: item.USUARIO,
    }
    return obj
  })
  res.status(200).json(list)
})

module.exports = router

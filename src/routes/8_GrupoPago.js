const router = require('express').Router()
const GrupoPagoModificado_JSON = require('../json/GrupoPagoModificado.json')

router.get('/Modificado', async (req, res) => {
  console.log('usando: Autorizador', req.body)
  // console.log(Autorizador_JSON)
  res.status(200).json(GrupoPagoModificado_JSON)
})

module.exports = router

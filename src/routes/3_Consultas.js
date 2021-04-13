const express = require('express')
const router = express.Router()
const ProvisionFondos_JSON = require('../json/Consulta_ProvisionFondos.json')
const FlujoCaja_JSON = require('../json/Consulta_FlujoCaja.json')
const DocumentoPagoBeneficiario_JSON = require('../json/Consulta_DocumentoPagoBeneficiario.json')
const Lote_JSON = require('../json/Consulta_Lote.json')

const getEstados = (elem) => {
  let random = Math.random() * (100 - 1) + 1
  return elem.NDOC % 2 === 0 && elem.NROLOTES.length == 3
    ? ['GENERADO', 'FIRMA PARCIAL', 'EN REVISIÓN']
    : elem.NDOC % 2 !== 0 && elem.NROLOTES.length == 3
    ? ['GENERADO', 'FIRMADO', 'EN REVISIÓN']
    : elem.NDOC % 2 === 0 && elem.NROLOTES.length == 2 && random % 3 === 0
    ? ['GENERADO', 'EN REVISIÓN']
    : elem.NDOC % 2 !== 0 && elem.NROLOTES.length == 2 && random % 3 === 1
    ? ['GENERADO', 'FIRMADO']
    : elem.NDOC % 2 !== 0 && elem.NROLOTES.length == 2 && random % 3 === 2
    ? ['EN REVISIÓN', 'FIRMADO']
    : elem.NDOC % 2 === 0 && elem.NROLOTES.length == 1 && random % 3 === 0
    ? ['GENERADO']
    : elem.NDOC % 2 !== 0 && elem.NROLOTES.length == 1 && random % 3 === 1
    ? ['FIRMADO']
    : ['EN REVISIÓN']
}

router.post('/ProvisionFondos', async (req, res, next) => {
  console.log('usando: ProvisionFondos', req.body)
  let list = ProvisionFondos_JSON.map((elem) => {
    let states = getEstados(elem)
    let data = { ...elem, ['ESTADOLOTES']: states }
    return data
  })
  res.status(200).json(list)
})

router.post('/FlujoCaja', async (req, res, next) => {
  console.log('usando: FlujoCaja', req.body)
  res.status(200).json(FlujoCaja_JSON)
})

router.post('/DocumentoPagoBeneficiario', async (req, res, next) => {
  console.log('usando: DocumentoPagoBeneficiario', req.body)
  res.status(200).json(DocumentoPagoBeneficiario_JSON)
})

router.post('/Lote', async (req, res, next) => {
  console.log('usando: Lote', req.body)
  res.status(200).json(Lote_JSON)
})

module.exports = router

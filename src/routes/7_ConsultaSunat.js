const express = require('express')
const router = express.Router()
const ConsultaSunat_JSON = require('../json/ConsultaSunat.json');

const getEstados = (elem) => {
  let random = Math.random() * (100 - 1) + 1
  return elem.NDOC % 2 === 0 && elem.NLOTE.length == 3
    ? ['GENERADO', 'FIRMA PARCIAL', 'EN REVISIÓN']
    : elem.NDOC % 2 !== 0 && elem.NLOTE.length == 3
    ? ['GENERADO', 'FIRMADO', 'EN REVISIÓN']
    : elem.NDOC % 2 === 0 && elem.NLOTE.length == 2 && random % 3 === 0
    ? ['GENERADO', 'EN REVISIÓN']
    : elem.NDOC % 2 !== 0 && elem.NLOTE.length == 2 && random % 3 === 1
    ? ['GENERADO', 'FIRMADO']
    : elem.NDOC % 2 !== 0 && elem.NLOTE.length == 2 && random % 3 === 2
    ? ['EN REVISIÓN', 'FIRMADO']
    : elem.NDOC % 2 === 0 && elem.NLOTE.length == 1 && random % 3 === 0
    ? ['GENERADO']
    : elem.NDOC % 2 !== 0 && elem.NLOTE.length == 1 && random % 3 === 1
    ? ['FIRMADO']
    : ['EN REVISIÓN']
}

router.post('/lista', async (req, res, next) => {
  console.log('usando: CONSULTA SUNAT', req.body)
  let list = ConsultaSunat_JSON.map((elem) => {
    let states = getEstados(elem)
    let data = { ...elem, ['ESTADOCONSULTA']: states }
    console.log('data-lista-sunat',data);
    return data
  })
  res.status(200).json(list)
});

module.exports = router

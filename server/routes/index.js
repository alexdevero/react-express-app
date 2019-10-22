const express = require('express')

const CONSTANTS = require('../constants')

const sampleData = require('../sampleData')


const router = express.Router()
// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets)
})

// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets)
})


module.exports = router

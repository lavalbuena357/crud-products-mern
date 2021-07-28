const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('./controllers/productController')

const router = express.Router()

router.post('/', upload.single('image'), addProduct)
router.get('/', getProducts)

module.exports = router
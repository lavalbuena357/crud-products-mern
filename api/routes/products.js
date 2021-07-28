const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('./controllers/productController')

const router = express.Router()

router.post('/', upload.single('image'), addProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
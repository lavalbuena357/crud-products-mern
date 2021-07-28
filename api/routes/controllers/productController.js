const Product = require('../../models/products')

//POST PRODUCT
async function addProduct(req, res) {
  
  try {
    const { name, size, unitaryPrice, description } = req.body

    const newProduct = Product({name, size, unitaryPrice, description})

    if(req.file) {
      const { filename } = req.file
      newProduct.setImgUrl(filename)
    }

    const productStored =  await newProduct.save()

    return res.status(201).send({productStored})

  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

//GET PRODUCTS
async function getProducts(req, res) {

  try {
    const products = await Product.find()

    res.status(201).send({products})

  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

module.exports = {
  addProduct,
  getProducts
}
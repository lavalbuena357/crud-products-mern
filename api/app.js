const express = require('express')
const productsRoutes = require('./routes/products')

const app = express()

app.use(express.json())

app.use('/public', express.static(`${__dirname}/storage/images`))

app.use('/v1/products', productsRoutes)

module.exports = app
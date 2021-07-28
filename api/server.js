require('dotenv').config()
const express = require('express')
const connectDb = require('./db/mongodb')
const { appConfig, db } = require('./config')

const app = express()

connectDb(db)
app.listen(appConfig.port, () => {
  console.log(`Server listening in port ${appConfig.port}`)
})
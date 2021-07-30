const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('db connected'))

async function connectDb({ host, dbName, dbUsername, dbPass }) {
  const uri = `mongodb+srv://${dbUsername}:${dbPass}@${host}/${dbName}?retryWrites=true&w=majority`
  await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connectDb
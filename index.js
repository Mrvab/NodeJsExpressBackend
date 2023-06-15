const envFile = `.env.${process.env.NODE_ENV}`.trim()
require('dotenv').config({ path: envFile })

const express = require('express')
const { mainRouter } = require('./src/routes/mainRouter')
const PORT = process.env.PORT
const server = express()
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(mainRouter)
server.listen(PORT, () => {
  console.log('server in available on port :', PORT)
})

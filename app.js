const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
  doorsRoutes,
  messageRoutes,
  adminRoutes,
  layoutRoutes,
} = require('./src/routes')
let cron = require('./src/utils/token_issuer')
cron.start()
require('dotenv').config()
require('./config/db')

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json())

const whitelist = process.env.WHITE_LIST

const corsOptions = {
  origin: function (origin, callback) {

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      // callback(null, true)
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors(corsOptions))

app.use('/doors', doorsRoutes)
app.use('/messages', messageRoutes)
app.use('/admin', adminRoutes)
app.use('/layout', layoutRoutes)

app.use((req, res, next) => {
  res.status(404).send({ success: false, msg: 'Wrong Url Path' })
})

module.exports = app

const express = require('express')
const router = express.Router()
const { messages } = require('../providers')
const { SERVER_ERROR } = require('../utils/response_constants')

router.get('/', async (req, res) => {
  try {
    const doc = await messages.get()
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const doc = await messages.send(req.body)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    console.log(e)
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const doc = await messages.seen(req.params.id)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const doc = await messages.delete(req.params.id)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    console.log(e)
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

module.exports = router

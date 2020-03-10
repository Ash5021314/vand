const express = require('express')
const router = express.Router()
const { doors } = require('../providers')
const { SERVER_ERROR } = require('../utils/response_constants')
const { validator, imageUploader } = require('./middleware')
const multer = require('multer')
const path = require('path')
const { v4 } = require('uuid')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/../public', '/images/doors/'))
  },
  filename: function (req, file, cb) {
    cb(null, 'IMAGE-' + v4().replace(/-/g, '') + '.jpg')
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: process.env.FILE_SIZE_LIMIT },
}).single('img')

let domain = process.env.DOMAIN || 'http://localhost:4000'
router.get('/', async (req, res) => {
  try {
    let doc
    if (req.query.type) {
      const { type, limit, skip } = req.query
      doc = await doors.get(type, limit, skip)
    } else {
      doc = await doors.getAll()
    }
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.post('/', upload, async (req, res) => {
  try {
    req.body.frontImage = `${domain}/images/doors/${req.file.filename}`
    const doc = await doors.create(req.body)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.post('/:id/other-color', upload, async (req, res) => {
  // console.log('data', req.body, req.file)
  try {
    req.body.image = `${domain}/images/doors/${req.file.filename}`
    const doc = await doors.updateDocOtherColor(req.params.id, req.body)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const doc = await doors.updateDocCustom(req.params.id, req.body)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

router.patch('/:id/image', upload, async (req, res) => {
  res.status(200).send(`${domain}/images/doors/${req.file.filename}`)
})

router.delete('/:id', async (req, res) => {
  try {
    const doc = await doors.delete(req.params.id)
    return res.status(doc.statusCode).send(doc)
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
  }
})

module.exports = router

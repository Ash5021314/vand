const express                      = require('express')
const router                       = express.Router()
const { doors }                    = require('../providers')
const { SERVER_ERROR }             = require('../utils/response_constants')
// const { validator, imageUploader } = require('./middleware')
// const multer                       = require('multer')
// const path                         = require('path')
// const { v4 }                       = require('uuid')

const upload = require('../services/image-upload');
const singleUpload = upload.single('img');

router.get('/', async (req, res) => {
    try {
        let doc
        if (req.query.type) {
            const { type, limit, skip } = req.query
            doc                         = await doors.get(type, limit, skip)
        } else {
            doc = await doors.getAll()
        }
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/', async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc           = await doors.create(req.body)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/:id/other-color', async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc      = await doors.updateDocOtherColor(req.params.id, req.body)
                return res.status(doc.statusCode).send(doc)
            })()
        });

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

router.patch('/:id/image', async (req, res) => {
    singleUpload(req, res, function(err) {
        if (err) {
            return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
        }

        (async () => {
            req.body.frontImage = req.file.location
            const doc      = await doors.updateDocMoreImage(req.params.id, req.body)
            return res.status(200).send(doc)
        })()
    });

})

router.delete('/:id', async (req, res) => {
    try {
        const doc = await doors.delete(req.params.id)
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.delete('/:doorId/other-color/:id', async (req, res) => {
    try {
        const doc = await doors.deleteOtherColor(req.params.doorId, req.params.id)
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/:id/more-image', async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc      = await doors.updateDocMoreImage(req.params.id, req.body)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.delete('/:doorId/more-image/:id', async (req, res) => {
    try {
        const doc = await doors.deleteMoreImage(req.params.doorId, req.params.id)
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

module.exports = router

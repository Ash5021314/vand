const express          = require('express')
const router           = express.Router()
const { layout }       = require('../providers')
const { SERVER_ERROR } = require('../utils/response_constants')
// const multer           = require('multer')
// const path             = require('path')
// const { v4 }           = require('uuid')
// const storage          = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '/../public', '/images/layout/'))
//     },
//     filename:    function (req, file, cb) {
//         cb(null, 'IMAGE-' + v4().replace(/-/g, '') + '.jpg')
//     },
// })
// const upload = multer({
//     storage: storage,
//     limits:  { fileSize: process.env.FILE_SIZE_LIMIT },
// }).single('img')
//
// let domain = process.env.DOMAIN || 'http://localhost:5000'

const upload = require('../services/image-upload');
const singleUpload = upload.single('img');

router.get('/homepage', async (req, res) => {
    try {
        let data = await layout.getHomePage()
        return res.status(200).send(data)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/about_img', async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc           = await layout.updateAboutImg(req.body)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/slider',  async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc      = await layout.addSliderImg(req.body.slide, req.file.filename)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.patch('/slider/:id', async (req, res) => {
    try {
        let { id }     = req.params
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                let doc        = await layout.updateSlider(id, req.body.slide, req.file.filename)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.delete('/slider/:id', async (req, res) => {
    try {
        let { id } = req.params
        let doc    = await layout.deleteSlide(id)
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.post('/brend', async (req, res) => {
    try {
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                const doc      = await layout.addBrendImg(req.body.slide, req.file.filename)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        console.log(e)
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.patch('/brend/:id', async (req, res) => {
    try {
        let { id }     = req.params
        singleUpload(req, res, function(err) {
            if (err) {
                return res.status(422).send({ errors: [ { title: 'Image Upload Error', detail: err.message } ] })
            }

            (async () => {
                req.body.frontImage = req.file.location
                let doc        = await layout.updateBrend(id, req.body.slide, req.file.filename)
                return res.status(doc.statusCode).send(doc)
            })()
        });

    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

router.delete('/brend/:id', async (req, res) => {
    try {
        let { id } = req.params
        let doc    = await layout.deleteBrend(id)
        return res.status(doc.statusCode).send(doc)
    } catch (e) {
        return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR)
    }
})

module.exports = router

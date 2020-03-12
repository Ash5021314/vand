const mongoose = require('mongoose')

const layoutSchema = new mongoose.Schema({
    slider:    [
        {
            name: { type: String, required: true },
            url:  { type: String, required: true },
        },
    ],
    brend:     [
        {
            name: { type: String, required: true },
            url:  { type: String, required: true },
        },
    ],
    about_img: { type: String },
    label:     { type: String, default: 'Layout_template' },
})

const Layout = mongoose.model('Layout', layoutSchema, 'Layouts')

module.exports = Layout

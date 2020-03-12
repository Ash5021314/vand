const mongoose = require('mongoose')
let db         = process.env.MONGODB_URI || 'mongodb://localhost:27017/vandoor'
let opts       = {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    useCreateIndex:     true,
    useFindAndModify:   false,
}

mongoose.connect(db, opts, err => {
    if (err) throw err
    console.log('DB connected...')
})

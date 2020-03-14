const mongoose = require('mongoose')
// let db         = process.env.MONGODB_URI || 'mongodb://localhost:27017/vandoor'
let db         = 'mongodb://heroku_0sr39b0d:v90ipjbqn7n157p6lnklp8s5b6@ds235243.mlab.com:35243/heroku_0sr39b0d'
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

const mongoose = require('mongoose')
let db         = process.env.MONGODB_URI || 'mongodb://<dbuser>:<dbpassword>@ds235243.mlab.com:35243/heroku_0sr39b0d'
let opts       = {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    useCreateIndex:     true,
    useFindAndModify:   false,
}

mongoose.connect(db, opts, err => {
    if (err) throw err
    console.log('DB connected ...')
})

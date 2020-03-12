const http = require('http')
const app = require('./app')
let port = process.env.PORT || 5000
http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}...`)
})

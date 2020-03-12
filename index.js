const http = require('http')
const app = require('./app')
let port = process.env.PORT || 5000

console.log('process.env.PORT', process.env.PORT)

http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}...`)
})

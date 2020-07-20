const app = require('../app.js')
const http = require('http')

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.clear()
  console.log('🚀 Angular server run on port', +PORT)
})

const express = require('express')
const conf = require('./config')
const room_api = require('./room_api')

const app = express()

if(!conf.isProd){
  app.use('/static', express.static('../others/public'))
}

app.use('/api', room_api)


app.listen(conf.port, async () => {
  console.log(`Web server listening on port ${conf.port}`)
})
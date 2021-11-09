import http from 'http'
import { apiRoot, env, ip, mongo, port } from './config'
import mongoose from './services/mongoose'
import express from './services/express'

import api from './api'

const listEndpoints = require('express-list-endpoints')

const app = express(apiRoot, api)
const server = http.createServer(app)


console.table(listEndpoints(app))

if (mongo.uri) {
  mongoose.connect(mongo.uri)
}


mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app

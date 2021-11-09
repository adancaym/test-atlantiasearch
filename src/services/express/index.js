import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'

export default (apiRoot, routes) => {
  const app = express()
  app.use(cors())

  console.log(env)
  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(compression())
    app.use(morgan('dev'))
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ limit: '50mb' }))
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}

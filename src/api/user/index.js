import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { index, create } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const {name, age, city} = schema.tree

router.get('/',
  query(),
  index)

router.post('/',
  body({name, age, city}),
  create)


export default router

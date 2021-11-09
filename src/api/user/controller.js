import { success } from '../../services/response/'
import { User } from '.'



export const index = ({querymen: { query, select, cursor }}, res, next) =>
  User.find(query, select, cursor).then(success(res)).catch(next)


export const create = ({ bodymen: { body } }, res, next) =>
  User.create(body).then(success(res, 201)).catch(next)



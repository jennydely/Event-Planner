import { v4 as uuid } from 'uuid'
import { saveToLocal } from '../lib/localStorage'
import { getPacklists } from './getPacklists'

export function postPacklists(packlists) {
  const newPacklist = { ...packlists, id: uuid() }
  return getPacklists()
    .then((packlists) => [newPacklist, ...packlists])
    .then((packlists) => saveToLocal('packlists', packlists))
    .then(() => newPacklist)
}

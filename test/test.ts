import { expect, tap } from 'tapbundle'
import * as smartunique from '../dist/index'

tap.test('should create shortid', async () => {
  let result = smartunique.getShortId()
  console.log(result)
})

tap.test('should create uuidv4', async () => {
  let result = smartunique.getUuidv4()
  console.log(result)
})

tap.test('should create uuidv5', async () => {
  let result = smartunique.getUuidv5('sometext')
  console.log(result)
})

tap.start()

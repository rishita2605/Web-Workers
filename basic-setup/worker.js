import {
  PROCESS_STATUS,
  heavyComputation
} from '../util.js'


onmessage = (e) => {
  console.log('inside worker', e)
  heavyComputation()
  postMessage(PROCESS_STATUS.COMPLETED)
}
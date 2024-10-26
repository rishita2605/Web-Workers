import {
  PROCESS_STATUS,
  heavyComputation
} from '../util.js'


onmessage = (e) => {
  heavyComputation()
  postMessage(PROCESS_STATUS.COMPLETED)
}
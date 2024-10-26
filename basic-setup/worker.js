import {
  PROCESS_STATUS,
  heavyComputation
} from '../util.js'


onmessage = (e) => {
  heavyComputation(e.data)
  postMessage(PROCESS_STATUS.COMPLETED)
}
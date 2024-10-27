import { PROCESS_STATUS } from '../util.js'
import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";


// Elements.
const heavyTaskWorkerBtn = document.getElementById('worker-heavy-task-btn')
const statusElement = document.getElementById('task-status')

// Handlers.
async function workerFunction() {
  // Don't spin up a new worker instance if the process has already been started.
  if (statusElement.textContent !== PROCESS_STATUS.PROCESSING && window.Worker) {
    const worker = new Worker('./worker.js', {
      type: 'module'
    })

    statusElement.textContent = PROCESS_STATUS.PROCESSING

    const result = await Comlink.wrap(worker).computationallyHeavyFunction(20000000000)
    statusElement.textContent = result

    // We can expose multiple functions from the worker as well.
    // const result = await Comlink.wrap(worker).calculateFibonacci(20000000000)
    // statusElement.textContent = "fibonacci number is " + result
  }
}

// Event Listeners.
heavyTaskWorkerBtn.addEventListener('click', workerFunction)

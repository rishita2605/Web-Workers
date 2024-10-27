import { PROCESS_STATUS } from '../util.js'

// Elements.
const heavyTaskWorkerBtn = document.getElementById('worker-heavy-task-btn')
const statusElement = document.getElementById('task-status')

// Handlers.
function workerFunction() {
  // Don't spin up a new worker instance if the process has already been started.
  if (statusElement.textContent !== PROCESS_STATUS.PROCESSING && window.Worker) {
    const worker = new Worker('./worker.js', {
      type: 'module'
    })

    // Sending 10000000000000 to the web worker
    worker.postMessage(20000000000)

    statusElement.textContent = PROCESS_STATUS.PROCESSING

    // This piece of code is executed after worker finishes its task and returns data.
    worker.onmessage = function (event) {
      statusElement.textContent = event.data
    }
  }
}

// Event Listeners.
heavyTaskWorkerBtn.addEventListener('click', workerFunction)
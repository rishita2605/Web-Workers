import {
  heavyComputation,
  PROCESS_STATUS
} from '../util.js'

// Constants.
const ANIMATE_CLASS = 'animate-background'

// Elements.
const heavyTaskBtn = document.getElementById('heavy-task-btn')
const heavyTaskWorkerBtn = document.getElementById('worker-heavy-task-btn')
const body = document.querySelector('body')
const animateBtn = document.getElementById('animate')
const statusElement = document.getElementById('task-status')


// Handlers.
function animateBackground() {
  if (body.classList.contains(ANIMATE_CLASS)) {
    body.classList.remove(ANIMATE_CLASS)
    animateBtn.textContent = 'animate background'
  } else {
    body.classList.add(ANIMATE_CLASS)
    animateBtn.textContent = 'stop animation'
  }
}

function workerFunction() {
  const worker = new Worker('./worker.js', { type: 'module' })

  statusElement.textContent = PROCESS_STATUS.PROCESSING

  worker.postMessage(PROCESS_STATUS.PROCESSING)

  worker.onmessage = function (event) {
    statusElement.textContent = event.data
  }
}

// Event Listeners.
heavyTaskBtn.addEventListener('click', () => {
  heavyComputation()
  statusElement.textContent = PROCESS_STATUS.COMPLETED
})

animateBtn.addEventListener('click', animateBackground)
heavyTaskWorkerBtn.addEventListener('click', workerFunction)
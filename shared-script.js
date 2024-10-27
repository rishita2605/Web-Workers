import { PROCESS_STATUS, heavyComputation } from './util.js'

// Constants.
const ANIMATE_CLASS = 'animate-background'

// Elements.
const heavyTaskBtn = document.getElementById('heavy-task-btn')
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


// Event Listeners.
heavyTaskBtn.addEventListener('click', () => {
  statusElement.textContent = PROCESS_STATUS.PROCESSING

  setTimeout(() => {
    heavyComputation(10000000000);
    statusElement.textContent = PROCESS_STATUS.COMPLETED;
  }, 100);
})

animateBtn.addEventListener('click', animateBackground)
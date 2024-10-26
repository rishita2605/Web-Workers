const heavyTaskBtn = document.getElementById('heavy-task-btn')
const body = document.querySelector('body')
const animateBtn = document.getElementById('animate')
const ANIMATE_CLASS = 'animate-background'

function heavyComputation() {
  for(let i = 0; i < 10000000000; i++);
  console.log('done')
}

function animateBackground(){
  if(body.classList.contains(ANIMATE_CLASS)){
    body.classList.remove(ANIMATE_CLASS)
    animateBtn.textContent = 'animate background'
  } else {
    body.classList.add(ANIMATE_CLASS)
    animateBtn.textContent = 'stop animation'
  }
}

heavyTaskBtn.addEventListener('click', heavyComputation)
animateBtn.addEventListener('click', animateBackground)
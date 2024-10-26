export const PROCESS_STATUS = {
  TODO: 'To Do',
  PROCESSING: 'In Progress',
  COMPLETED: 'Completed'
}

export function heavyComputation(n = 10000000000) {
  for(let i = 0; i < n; i++);
}
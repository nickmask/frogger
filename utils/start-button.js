import createFrogger from './create-frogger'

export default function () {
  const start = document.getElementById('start')
  start.addEventListener('click', createFrogger)
}

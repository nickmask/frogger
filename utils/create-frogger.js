import createFroggerBoard from './create-frogger-board'

export default function () {
  const startPos = Math.floor(Math.random() * 15)
  const cell = `x9y${startPos}`
  document.getElementById(cell).className = 'frogger'
}

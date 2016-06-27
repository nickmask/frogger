export default function () {
  console.log('car start')
  const startPos = Math.floor(Math.random() * 9)
  const cell = `x${startPos}y0`
  document.getElementById(cell).className = 'car'
  carMovement(startPos, 0)
}

function carMovement (x, y) {
  if (y > 0) document.getElementById(`x${x}y${y - 1}`).className = ''
  console.log('car movement', x, y)
  while (y <= 14) {
    console.log('resursive movement')
    document.getElementById(`x${x}y${y}`).className = 'car'
    return setTimeout(() => carMovement(x, y + 1), 500)
  }
}

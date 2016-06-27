export default document.onkeydown = function (e) {
  const froggerLocation = document.getElementsByClassName('frogger')[0].id
  const data = froggerLocation.split('y')
  const x = Number(data[0].replace('x', ''))
  const y = Number(data[1])
  if (e.keyCode === 38) {
    document.getElementById(`x${x - 1}y${y}`).className = 'frogger'
    document.getElementById(`x${x}y${y}`).className = ''
  } else if (e.keyCode === 37) {
    document.getElementById(`x${x}y${y - 1}`).className = 'frogger'
    document.getElementById(`x${x}y${y}`).className = ''
  } else if (e.keyCode === 39) {
    document.getElementById(`x${x}y${y + 1}`).className = 'frogger'
    document.getElementById(`x${x}y${y}`).className = ''
  } else if (e.keyCode === 40) {
    document.getElementById(`x${x + 1}y${y}`).className = 'frogger'
    document.getElementById(`x${x}y${y}`).className = ''
  }
}

import createFroggerBoard from './utils/create-frogger-board'

createFroggerBoard(10)

document.onkeydown = function(e) {
  if (e.keyCode == 38) {
    console.log('up')
  } else if (e.keyCode == 37) {
    console.log('left')
  } else if (e.keyCode == 39) {
    console.log('right')
  } else if (e.keyCode == 40) {
    console.log('down')
  }
}

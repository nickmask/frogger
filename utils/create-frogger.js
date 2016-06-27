export default function () {
  const startPos = Math.floor(Math.random() * 14)
  document.getElementById(`x14y${startPos}`).className = 'frogger'
}

const border = document.querySelector('#board')
const color = ["rgb(218, 100, 100)", "rgb(192, 218, 100)", "rgb(124, 218, 100)", "rgb(100, 200, 218)", "rgb(155, 100, 218)", "rgb(218, 100, 100)"]
var SQUARE_COUNT = 560;

for (let i = 0; i < SQUARE_COUNT; i++) {
  const squre = document.createElement('div')
  squre.classList.add('square')
  board.append(squre)
  squre.addEventListener('mouseover', () => setColor(squre))
  squre.addEventListener('mouseleave', () => removeColor(squre))
}

function setColor(element) {
  var bgcolor = getRandomColor()
  element.style.backgroundColor = bgcolor
  element.style.boxShadow= `0 0 2px ${bgcolor}, 0 0 10px ${bgcolor}`
}

function removeColor(element ){
  element.style.backgroundColor = 'rgb(58, 53, 53)' 
  element.style.boxShadow= `none`
}

function getRandomColor(params) {
  var colorIndex = (Math.floor(Math.random()*6))
  return color[colorIndex]
}

getRandomColor()
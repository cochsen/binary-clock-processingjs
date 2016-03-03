var canvas
var w, h

function setup () {
  canvas = createCanvas(100, 100)
  canvas.parent('clock')
  w = windowWidth
  h = windowHeight
  console.log(w)
  console.log(h)
  resizeCanvas(w*0.9, h*0.8)
}

function draw () {
  background(50)
}

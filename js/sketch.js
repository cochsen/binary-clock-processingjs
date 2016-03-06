/*
     A binary clock designed by Chris Ochsenreither
     Published under Gnu Public License version 2
     Copyright Chris Ochsenreither 2013
*/

/*
     Declare the binary digit light objects:
     s - second
     m - minute
     h - hour
*/
var canvas

var s1, s2, s4, s8, s16, s32
var m1, m2, m4, m8, m16, m32
var h1, h2, h4, h8, h16

/*
    Declare the color variables
    BG - background
    SEC - color for second lights
    MIN - color for minute lights
    HR - color for hour lights
*/

var BG = p5.Color(40, 40, 40)
var SEC = p5.Color(0, 255, 0)
var MIN = p5.Color(255, 0, 0)
var HR = p5.Color(0, 0, 255)
var LABEL = p5.Color(225, 225, 225)
// declare color var c to update Digit objects color
var c

function setup() {
  // Set screen size to 384 pixels wide by 512 pixels tall
  canvas = createCanvas(384, 512)
  canvas.parent('canvasDiv')
  BG = color(40, 40, 40)
  SEC = color(0, 255, 0)
  MIN = color(255, 0, 0)
  HR = color(0, 0, 255)
  LABEL = color(225, 225, 225)

  /*
    Construct Digit objects
    Parameters:
    - For rectangle: x, y, w, h
      x - x position of top left corner
      y - y position of top left corner
      w - width in pixels
      h - height in pixels
    - Colors
      BG - construct with color BG (background)
           for "off" color
      SEC, MIN, HR - construct with color chosen for
      "on" for second, minute or hour Digit
    Note: all digits objects are the same regardless of time'
    increment
  */
  s1 = new Digit(260, 370, 90, 65, BG, SEC)
  m1 = new Digit(165, 370, 90, 65, BG, MIN)
  h1 = new Digit(70, 370, 90, 65, BG, HR)

  s2 = new Digit(260, 300, 90, 65, BG, SEC)
  m2 = new Digit(165, 300, 90, 65, BG, MIN)
  h2 = new Digit(70, 300, 90, 65, BG, HR)

  s4 = new Digit(260, 230, 90, 65, BG, SEC)
  m4 = new Digit(165, 230, 90, 65, BG, MIN)
  h4 = new Digit(70, 230, 90, 65, BG, HR)

  s8 = new Digit(260, 160, 90, 65, BG, SEC)
  m8 = new Digit(165, 160, 90, 65, BG, MIN)
  h8 = new Digit(70, 160, 90, 65, BG, HR)

  s16 = new Digit(260, 90, 90, 65, BG, SEC)
  m16 = new Digit(165, 90, 90, 65, BG, MIN)
  h16 = new Digit(70, 90, 90, 65, BG, HR)

  s32 = new Digit(260, 20, 90, 65, BG, SEC)
  m32 = new Digit(165, 20, 90, 65, BG, MIN)

}

function draw() {
  // Begin each draw loop by setting the canvas to color BG
  background(BG)

  /*
     All of these calculations call functions from the system clock
     - second() gets current second, etc.
     and performs modulos and divisions to get a 1 or 0 for each binary
     digit
     The results are stored as varegers:
     sec1 - integer value (1 or 0) for Digit object that represents
     2**0
     sec2 - integer value (1 or 0) for Digit object that represents
     2**1
     etc, etc.
  */
  var sec1 = floor((second() + 1) % 2)
  var sec2 = floor((((((second() + 1) % 32) % 16) % 8) % 4) / 2)
  var sec4 = floor(((((second() + 1) % 32) % 16) % 8) / 4)
  var sec8 = floor((((second() + 1) % 32) % 16) / 8)
  var sec16 = floor(((second() + 1) % 32) / 16)
  var sec32 = floor((second() + 1)/32)

  var min1 = floor((minute()) % 2)
  var min2 = floor((((((minute()) % 32) % 16) % 8) % 4) / 2)
  var min4 = floor(((((minute()) % 32) % 16) % 8) / 4)
  var min8 = floor((((minute()) % 32) % 16) / 8)
  var min16 = floor(((minute()) % 32) / 16)
  var min32 = floor((minute())/32)

  var hr1 = floor((hour()) % 2)
  var hr2 = floor((((((hour()) % 32) % 16) % 8) % 4) / 2)
  var hr4 = floor(((((hour()) % 32) % 16) % 8) / 4)
  var hr8 = floor((((hour()) % 32) % 16) / 8)
  var hr16 = floor(((hour()) % 32) / 16)

  // set color var c to color for seconds
  c = SEC

 // Update each Digit object that represents a second digit
 s1.update(sec1, c)
 s2.update(sec2, c)
 s4.update(sec4, c)
 s8.update(sec8, c)
 s16.update(sec16, c)
 s32.update(sec32, c)

 // set color var c to color for minutes
 c = MIN

 // Update each Digit object that represents a minute digit
 m1.update(min1, c)
 m2.update(min2, c)
 m4.update(min4, c)
 m8.update(min8, c)
 m16.update(min16, c)
 m32.update(min32, c)

 // set color var c to color for hours
 c = HR

 // Update each Digit object that represents a minute digit
 h1.update(hr1, c)
 h2.update(hr2, c)
 h4.update(hr4, c)
 h8.update(hr8, c)
 h16.update(hr16, c)

 // set fill color to LABEL color
 fill(LABEL)
 /* fill in text labels
    s - second
    m - minute
    h - hour
    Write text to screen with text function
 */
 text("s", 305, 465)
 text("m", 210, 465)
 text("h", 115, 465)
 text("32", 35, 50)
 text("16", 35, 120)
 text("8", 35, 190)
 text("4", 35, 260)
 text("2", 35, 330)
 text("1", 35, 400)

}

/*
    Define Digit object
*/
function Digit (x, y, w, h, off, on) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.off = off
    this.on = on

    /* Update function takes two arguments:
       - var bin: a 1 or 0 from the calculations that divide the
       time up varo binary chunks in the draw() loop
       - color c: set in the draw loop before each set of Digits
       is updated
    */
    this.update = function (bin, c) {
      // new variable in method b = bin
      var b = bin
      // set fill color to argument value
      fill(c)
      if (b == 1) {  // is bin (b) equal to 1?
        /* if so, call noStroke to so there's no border,
           draw the rectangle
           fill the rectangle
        */
        noStroke()
        rect(this.x, this.y, this.w, this.h)
        fill(this.on)
      }
    }
    // Else do nothing
  }

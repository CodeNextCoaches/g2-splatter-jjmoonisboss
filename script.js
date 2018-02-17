// declare and initialize global variables

/*
 * setup()
 */
var canvas;
var canvasWidth=500;
var canvasHeight=400;
var button;
var slider;
var spread;
var justPop= random(10,15)


function setup(){
  canvas=createCanvas(canvasWidth,canvasHeight);
  canvas.parent("canvas-area");
  canvas.mousePressed(drawEllipse);
  background(77,199,253);
  button=select("#clear-button");
  button.mousePressed(setup);
  slider=select(#slider);
  slider.input(updateSpread);
  updateSpread();
  
}


function drawEllipse(){
  fill("#fdab94");
  ellipse(mouseX,mouseY,100,100);
  noStroke();
}
function updateSpread{
  spread=slider(value);
}

function drawSplatter(){
  random(10,15);
  fill(random(0,255)(0,255)(0,255));
  noStroke();
  for (var justPop i =0 ;  i < var justPop; i++) {
    var justPop=(5,15);
    ellipse(random(mouseX-spread,mouseX+spread,mouseY-spread,mouseY+spread));
  }
}

/*
 * drawEllipse()
 */


/*
 * updateSpread()
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */


 /*
  * drawSplatter()
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */

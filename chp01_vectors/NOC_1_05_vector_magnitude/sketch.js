//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  let mouse = createVector(mouseX, mouseY); //Vector at the mouse location
  let center = createVector(width / 2, height / 2); //center of the window
  mouse.sub(center); //Vector subtraction

  //The magnitude of a vector accessed via mag() function. Here is used as the width of rectangle drawn at the top of window
  let m = mouse.mag();
  fill(255);
  stroke(0);
  rect(0, 0, m, 10);

  //Draw a line to represent the vector
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
}

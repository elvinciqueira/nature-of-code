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

  //Draw a line to represent the vector
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
}

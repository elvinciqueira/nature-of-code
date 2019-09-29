//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

//Desmotration of normalizing vector
//Normalizing a vector sets its length to 1
function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  let mouse = createVector(mouseX, mouseY); //Vector at the mouse location
  let center = createVector(width / 2, height / 2); //center of the window
  mouse.sub(center); //Subtraction center from mouse which results in a vector that points at the center

  mouse.normalize(); //Normalize the vector

  mouse.mult(150); //multiplying its lenght by 50

  //Draw a line to represent the vector
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
}

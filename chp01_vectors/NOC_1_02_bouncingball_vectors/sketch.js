//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

//Bouncing ball with p5.Vector
let position;
let velocity;

function setup() {
  createCanvas(640, 360);
  background(255);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(255);

  //Add the current speed to the location
  position.add(velocity);

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  //Display circle at the x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}

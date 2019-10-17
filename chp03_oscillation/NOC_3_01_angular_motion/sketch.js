//The Nature of Code - Daniel Shiffman
//Elvin Ciqueira
//natureofcode.com

let angle = 0;
let aVelocity = 0;
let aAcceleration = 0.001;

function setup() {
  createCanvas(640, 360); 
}

function draw() {
  background(51);

  translate(width/2, height/2);
  rotate(angle);

  stroke(0);
  strokeWeight(2);
  fill(127);

  line(-60, 0, 60, 0);
  ellipse(60, 0, 16, 16);
  ellipse(-60, 0, 16, 16);

  angle += aVelocity;
  aVelocity += aAcceleration;
}
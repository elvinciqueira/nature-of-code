//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

let movers = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(51);

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}
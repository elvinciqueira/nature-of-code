//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(51);

  mover.update();
  mover.checkEdges();
  mover.display();
}

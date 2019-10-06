//The Nature Of code
//Elvin Ciqueira
//natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
  createP("Click mouse to apply wind");
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.display();
  mover.update();
  mover.checkEdges();
}

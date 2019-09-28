//The Nature of Code
//Elvin Ciqueira
//http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 360);
  walker = new Walker();
}

function draw() {
  background(127);
  walker.display();
  walker.walk();
}

class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.noff = createVector(random(1000), random(1000));
  }

  display() {
    strokeWeight(2);
    fill(51);
    stroke(0);
    ellipse(this.position.x, this.position.y, 50, 50);
  }

  walk() {
    this.position.x = map(noise(this.noff.x), 0, 1, 0, width);
    this.position.y = map(noise(this.noff.y), 0, 1, 0, height);
    this.noff.add(0.01, 0.01, 0);
  }
}

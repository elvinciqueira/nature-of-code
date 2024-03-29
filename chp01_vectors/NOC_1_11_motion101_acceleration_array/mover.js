//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    //Set Magnitude of acceleration
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration); //Motion 101: Velocity changes by aceleration
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity); //Motion 101: Location changes by velocity
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
}

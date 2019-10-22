//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

class CannonBall {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.r = 8;
    this.topspeed = 10;
  }

  //Standard Euler integration
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  applyForce(force) {
    this.acceleration.add(force)
  }
  
  display() {
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
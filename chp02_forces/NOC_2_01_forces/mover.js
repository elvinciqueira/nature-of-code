//The Nature Of code
//Elvin Ciqueira
//natureofcode.com

class Mover {
  constructor() {
    this.mass = 1;
    this.position = createVector(width / 2, 30);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  //Newton's second law
  applyForce(force) {
    //Receive a force, divide by mass, add to acceleration
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0); //Add clearing the acceleration each time
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.position.y = height;
      this.velocity.y *= -1;
    }
  }
}

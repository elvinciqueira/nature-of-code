//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

let Particle = function() {
  this.position = createVector(400, 50);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.mass = 1;

  //Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    //Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    //Position changes by velocity
    this.position.add(this.velocity);
    //We must clear acceleration each frame
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  };
};

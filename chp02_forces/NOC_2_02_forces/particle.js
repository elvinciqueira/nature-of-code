//The Nature Of code
//Elvin Ciqueira
//natureofcode.com

function Particle(x, y, m) {
  this.mass = m;
  this.position = createVector(x, y);
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);

  //Newton's second law
  this.applyForce = function(force) {
    //Receive a force, divide by mass, add to acceleration
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(force);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0); //Add clearing the acceleration each time
  };

  this.display = function() {
    stroke(255);
    fill(255, 150);
    ellipse(this.position.x, this.position.y, this.mass * 10, this.mass * 10);
  };

  this.edges = function() {
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
  };
}

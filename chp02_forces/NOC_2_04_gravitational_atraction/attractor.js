//The Nature of code
//Elvin Ciqueira
//natureofcode.com

let Attractor = function() {
  this.position = createVector(width / 2, height / 2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    //Calculate direction of the force
    let force = p5.Vector.sub(this.position, p.position);
    //Distance between two objects
    let distance = force.mag();
    //Artificial constraint
    distance = constrain(distance, 5, 25);
    //Normalize vector
    force.normalize();
    //Calculate the gravitational force
    let strength = (this.G * this.mass * p.mass) / (distance * distance);
    //Get force vector ---> magnitude * direction
    force.mult(strength);
    return force;
  };

  //Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  };
};

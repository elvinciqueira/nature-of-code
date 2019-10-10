//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

//One particle, one attractor
let particle;
let attractor;

function setup() {
  createCanvas(640, 360);
  particle = new Particle();
  attractor = new Attractor(width / 2, height / 2);
}

function draw() {
  background(51);

  //Atractor attracts partcile
  let force = attractor.calculateAttraction(particle);
  particle.applyForce(force);

  particle.display();
  particle.update();

  attractor.display();
}

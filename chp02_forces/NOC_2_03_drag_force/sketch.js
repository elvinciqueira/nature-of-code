//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

let particles = [];
let liquid;

function setup() {
  createCanvas(640, 360);
  liquid = new Liquid(0, height / 2, width, height / 2, 0.01);
}

function mousePressed() {
  let particle = new Particle(mouseX, mouseY, random(1, 4));
  particles.push(particle);
}

function keyPressed() {
  if (key === " ") {
    particles.splice(0, 1);
  }
}

function draw() {
  background(127);

  //draw water
  liquid.display();

  for (let i = 0; i < particles.length; i++) {
    //Gravity is scaled by mass
    let gravity = createVector(0, 0.1, particles[i].mass);
    //Apply gravity
    particles[i].applyForce(gravity);

    particles[i].display();
    particles[i].update();
    particles[i].checkEdges();

    //Is the Mover in the liquid?
    if (liquid.contains(particles[i])) {
      //Calculate the drag force
      let dragForce = liquid.calculateDrag(particles[i]);
      //Apply drag force to mover
      particles[i].applyForce(dragForce);
    }
  }
}

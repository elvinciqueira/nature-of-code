//The Nature Of code
//Elvin Ciqueira
//natureofcode.com

let particles = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  let particle = new Particle(mouseX, mouseY, random(2, 4));
  particles.push(particle);
}

function keyPressed() {
  if (key === " ") {
    particles.splice(0, 1);
  }
}

function draw() {
  background(51);

  let wind = createVector(0.1, 0);

  for (let i = 0; i < particles.length; i++) {
    let gravity = createVector(0, 0.2 * particles[i].mass);
    particles[i].applyForce(gravity);

    // Wind applied only if the mouse is pressed
    if (mouseIsPressed) {
      particles[i].applyForce(wind);
    }

    particles[i].update();
    particles[i].display();
    particles[i].edges();
  }
}

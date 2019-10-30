//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

let oscillators = [];

function setup() {
  createCanvas(640, 360);
  //Inicialize all objects
  for (let i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(51);
  //Run all objects
  for (let i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}

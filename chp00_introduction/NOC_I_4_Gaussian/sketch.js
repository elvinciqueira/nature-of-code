//The Nature of Code
//Elvin Ciqueira
//http://natureofcode.com

function setup() {
  createCanvas(640, 360);
  background(255);
}

function draw() {
  //Get a Gaussian random number w/ mean of 0 and standart deviation of 1.0
  let xloc = randomGaussian();

  const sd = 60; // Define a standart deviation
  const mean = width / 2; //Define a mean value (middle of screen along the x-axis)
  xloc = sd * xloc + mean; //Scale the Gaussian random number by standart deviation and mean

  fill(0, 10);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
}

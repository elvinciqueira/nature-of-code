//The Nature of Code
//Elvin Ciqueira
//http://natureofcode.com

let xoff = 0;
let xincrement = 0.01;

function setup() {
  createCanvas(640, 360);
  background(0);
  noStroke();
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  let n = noise(xoff); //Get a noise value based on xoff and scale it according to the window's width

  let x = map(n, 0, 1, 0, width);

  //With each circle, increment xoff
  xoff += xincrement;

  //Draw ellipse produced at the value produced by perlin noise
  fill(200);
  ellipse(x, height / 2, 50, 50);

  print(n);
}

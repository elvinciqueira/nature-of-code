//The Nature of Code
//Elvin Ciqueira
//natureofcode.com

//An array to keep track of how often random numbers are picked

const randomCounts = [];
let total = 20;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(127);
  //pick a number and increase the count
  let index = floor(random(total));
  randomCounts[index]++;

  // Draw a rectagle to graph results
  stroke(0);
  strokeWeight(2);
  fill(255);

  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}

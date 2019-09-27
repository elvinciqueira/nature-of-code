//The Nature Of Code
//Elvin Ciqueira
//http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 360);
  walker = new Walker();
}

function draw() {
  background(51);
  walker.step();
  walker.render();
  walker.update();
}

class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2); //Cria um vetor no centro da tela
  }

  update() {
    this.vel = createVector(0, 0); //Adiciona velocidade

    let mouse = createVector(mouseX, mouseY); //Cria vetor na posição do mouse
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1); //altera a aceleração do vetor

    this.vel.add(this.acc); //Aceleração causando alteração na velocidade
    this.pos.add(this.vel); //Velocidade causando alteração na posição
  }

  render() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 40, 40);
  }

  step() {
    //Cria aleatoriedade
    var stepx = random(-5, 5);
    var stepy = random(-5, 5);

    this.pos.x += stepx;
    this.pos.y += stepy;
  }
}

//Nature of Code
//Elvin Ciqueira
//natureofcode.com

function Liquid(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;

  //Is the Mover on the Liquid?
  this.contains = function(m) {
    let l = m.position;
    return (
      l.x > this.x &&
      l.x < this.x + this.w &&
      l.y > this.y &&
      l.y < this.y + this.h
    );
  };

  //Calculate the drag force
  this.calculateDrag = function(m) {
    //Magnitude is coefficient * speed squared
    let speed = m.velocity.mag();
    let dragMagnitude = this.c * speed * speed;

    //Direction is inverse of velocity
    let dragForce = m.velocity.copy();
    dragForce.mult(-1);

    //scaling acordint to magnitude
    dragForce.setMag(dragMagnitude);
    return dragForce;
  };

  this.display = function() {
    noStroke();
    fill(50);
    rect(this.x, this.y, this.w, this.h);
  };
}

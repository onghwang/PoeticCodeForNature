class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(255);
    this.w = 10;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = 0;
    }
  }


  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
}

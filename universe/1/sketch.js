let ball;
let totalPts=300;
let steps = totalPts + 1;

function setup() {

  createCanvas(400, 400);
stroke(255);
  frameRate(1);
  ball = new Particle();
}


function draw() {
  background(0,34,102);
  ellipse(200, 200, 66, 66);

  gravity = createVector(0, 1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
  let rand = 0;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-10, 10);
  }
}

let totalPts=100;
let steps = totalPts + 1;

function setup() {

  createCanvas(400, 400);
  stroke(255);
  frameRate(1);
 ellipseMode(CENTER);
}

function draw() {
    background(0,34,102);
  fill(61,183,204);
  ellipse(200,200,50);


  fill(255,187,0);
  ellipse(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(220,10,0);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  ellipse(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
   let rand = 0;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-10, 10);
  }
}

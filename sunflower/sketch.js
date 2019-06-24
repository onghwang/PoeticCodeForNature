let ball;
var img;
var img2;

function preload()
{
  img = loadImage('flower.png');
  img2 = loadImage('sun_1.png');

}

function setup() {
  createCanvas(400, 400);

  ball = new Particle();
}


function draw() {
  background(100,190,300);

  image(img2,50,50,100,100);
  gravity = createVector(0, 0.1);
  ball.addForce(gravity);

  if (mouseIsPressed) {
    wind = createVector(0.1, 0);
    ball.addForce(wind);
  }

  ball.update();
  ball.show();
}

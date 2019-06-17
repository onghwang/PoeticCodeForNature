let ball;
var img;
var img2;

function preload()
{
  img = loadImage('flower.png');
  img2 = loadImage('sun-1.png');

}

function setup() {

  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   SolarSystem ");
  description = "\
  궤도를 도는 태양계를 표현하고자 하였다.  \
  ";
  text = createDiv(description);
  text.position(20, 600);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");
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

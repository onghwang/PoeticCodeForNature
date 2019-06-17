let ball;
var img;
var img2;

function preload()
{
  img = loadImage('flower.png');
  img2 = loadImage('sun-1.png');

}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   sunflower ");
  description = "\
  해바라기가 자신이 짝사랑하는 햇님을 조금 더 가까이 보기 위해 점프하고 있다. <br/>
  바람이 불어 햇님과 해바라기 사이를 갈라놓는다.<br/>
  해바라기는 과연 햇님과 만날 수 있을까?  \
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

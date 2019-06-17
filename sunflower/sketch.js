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
  wind가 해바라기와 햇님을 방해하는 장애물로 생각하였고, 
  햇님을 조금 더 가까이 보기 위해 점프하는 해바라기에게 마우스를 클릭해 wind를 주면
  햇님과 해바라기 사이가 멀어지는 형태로 작품을 만들게 되었다. \
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

var img;
var r = 0;
let ball;
let ball2;
let value=0;

function preload() {
  img = loadImage('earth.jpg');
  img2= loadImage('ast.png');

}

// draw a sphere with radius 200
function setup(){
  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   우주비행사 ");
  description = "\ 원래는 지구 위에 떠다니는 우주 비행사를 만들고 싶었지만, <br/>
  심심한 느낌이 들어, randomwalk를 이용해 만들었다.<br/>
   빨간 원,파란 원을 통해 대한민국을 나타냈고, 대한민국 우주비행사가 지구를 돌린다는 뜻이다. \";
  text = createDiv(description);
  text.position(20, 600);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");
  createCanvas(500, 500, WEBGL);

 ball = new Walker();
  ball2= new Walker();
}

function draw(){
  background(0,4,30);

  ball.update();
  ball.display();
  ball2.update();
  ball2.display();
image(img2, pmouseX,pmouseY,180,180);

  if (mouseIsPressed) {
    r += (mouseX - pmouseX) / 100;
  }



  translate(0, 0, -50);
  rotateY(r);
  texture(img);
  sphere(100);
  resetMatrix();

   fill(value);

}

class Walker {

  constructor() {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = 20;
    this.x2 = width/2;
  	this.y2 = height/2;
  	this.w2 = 30;
  }

  update() {

  	this.x = mouseX+ random(-3, 3);
  	this.y = mouseY + random(-3, 3);
    this.x2 = mouseX+ random(-15, 15);
  	this.y2 = mouseY + random(-15, 15);
  }

  display() {

	ellipse(this.x, this.y, this.w);
    fill(255,0,0);
    ellipse(this.x2, this.y2, this.w2);
    fill(0,0,255);
  }
}

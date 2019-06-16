let ball;
let ball2;
let value=0;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   RandomWalk ");
  description = "\
 마우스를 중심으로 random walk가 진행된다. \
  ";
  text = createDiv(description);
  text.position(20, 550);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  createCanvas(500, 500);
  ball = new Walker();
  ball2= new Walker();

}


function draw() {
  background(212,244,250,15);
  fill(value);
  ball.update();
  ball.display();
  ball2.update();
  ball2.display();
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
    fill(255,228,0);
    ellipse(this.x2, this.y2, this.w2);
    fill(83,83,83);
  }
}

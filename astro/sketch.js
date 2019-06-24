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
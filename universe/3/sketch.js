let b=[];



function setup() {
 
  createCanvas(400, 400);
 ellipseMode(CENTER);
  for (let i=0; i< 100; i++){
  b[i] = new Walker();
}
}

function draw() {
    background(0,34,102);
  for(let i = 0; i < 100; i++){
    b[i].update();
    b[i].display();
  }


  fill(61,183,204);
  ellipse(200,200,50);
  fill(255,187,0);
  ellipse(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(220,10,0);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  ellipse(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);

}

  function Walker(){

  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0.1,0.1);


  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x,this.pos.y,5);}

}

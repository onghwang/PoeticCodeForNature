let b=[];



function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   Third Planet ");
  ## 우주 속에 있는 태양 지구 달

  description = "\
  수업시간에 배운 particle을 우주에 있는 별로 생각해 배경으로 활용했다.<br>
  particle의 사이즈가 너무 커 별로 안보여 사이즈를 더 작게 만들었더니 별이 떠다니는 모습을 만들 수 있었다.


\
  ";
  text = createDiv(description);
  text.position(20, 550);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");
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

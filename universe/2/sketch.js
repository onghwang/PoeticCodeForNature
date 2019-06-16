let totalPts=100;
let steps = totalPts + 1;

function setup() {


  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   Second Planet ");
  description = "\

  을 활용해 지구를 중심으로 태양과 달의 위치가 바뀌는 모습을 만들어 보았다.<br/>
  우주쓰레기 속에 있는 태양 지구 달의 모양<br/>
  마우스의 움직임에 따라 우주쓰레기의 위치가 바뀌고, 태양 지구 달이 돌아간다.<br/> \
  ";
  text = createDiv(description);
  text.position(20, 550);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  

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

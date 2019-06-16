let ball;
let totalPts=300;
let steps = totalPts + 1;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> GO HOME!  </a>   우주쓰레기에서 탈출하다. ");
  description = "\

 를 응용해 만들었으며, 이 예제를 보고 우주에 돌아다니는 우주쓰레기같다는 생각이 들었다.<br/>
<br/>
 수업시간에 배운 것과 같이 사용해 본 결과 이런식으로 나왔고, 가운데 지구가 있으면 더욱 더 우주쓰레기 같다는 생각을 하게 되었다.<br/>
\
  ";
  text = createDiv(description);
  text.position(20, 550);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  createCanvas(400, 400);
stroke(255);
  frameRate(1);
  ball = new Particle();
}


function draw() {
  background(0,34,102);
  ellipse(200, 200, 66, 66);

  gravity = createVector(0, 1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
  let rand = 0;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-10, 10);
  }
}

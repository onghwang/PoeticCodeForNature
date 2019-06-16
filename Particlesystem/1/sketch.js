var img;
let particleSystem;

function preload()
{
  img = loadImage('popcorn.png');

}


function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem(createVector(width / 2, height/2));
}

function draw() {
  background(51);
  image(img, 230, 160,180,180,);
  particleSystem.addParticle();
  particleSystem.run();
}

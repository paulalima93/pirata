const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;
var angle;
var cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a palavra-chave new para criar um objeto torre. (Desafio 4)
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  //exibir a torre (Desafio 4)
  tower.show();
  cannon.show();
  cannonBall.show();
 
}

function keyReleased(){
  if(keyCode == 32){
    cannonBall.shoot();
  }
}

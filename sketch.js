
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;

var box1, box2;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box1 = new Box(200,200,50,50);
  box2 = new Box(225,150,50,80);

  ground = new Ground(200,390,800,60);
}

function draw() {
  Engine.update(myEngine);
  background(255,255,255);

  box1.display()
  box2.display()

  ground.display()
  }
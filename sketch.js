const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var block1;
var ground;
var engine, world;
var Polygon1;

var circles=[];
function setup() {
createCanvas(800,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(390,280,500,25)
//level two

block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);
//level three
block13 = new Box(370,195,30,40);
block14 = new Box(400,195,30,40);
block15 = new Box(430,195,30,40);
//top
block16 = new Box(400,155,30,40);


  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

Polygon1 = Matter.Bodies.polygon(50,200,50,20)
World.add(world,Polygon1);

  
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 ground.display();
 fill("blue");
 //level two

 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();



}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
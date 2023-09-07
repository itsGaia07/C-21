const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

//1. Declare var ball
var ball;

//7. Create btn1 and btn2 var
var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  //2. Set the options for ball:
  var ball_options = {
    restitution: 0.95
  }

  //3. Create the body for ball as a circle()
   ball = Bodies.circle(200,100,20, ball_options);
   World.add(world, ball);
  //8. Declare the characteristics for the buttons:
  btn1 = createImg('right.png');
  btn1.position(200,30);
  btn1.size(50, 50);
  btn1.mouseClicked(hForce);

  btn2 = createImg('up.png');
  btn2.position(260,30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  //4. Display the ellipse of the ball var:
ellipse(ball.position.x, ball.position.y, 20);

  //We call the function show() from ground.js to display the object on the canvas
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

//5. Create a hForce() function
function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}



//6. Create a vForce() function
function vForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.05});
}





















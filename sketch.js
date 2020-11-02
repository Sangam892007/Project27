
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var holder,ball,ball2,ball3,ball4,ball5;
var rope,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	holder = new Holder(400,100);
	ball = new Ball(300,500,40);
	ball2 = new Ball(350,500,40);
	ball3 = new Ball(400,500,40);
	ball4 = new Ball(450,500,40);
	ball5 = new Ball(500,500,40);
	rope = new ConstraintConnector(ball.body,holder.body,-100,0);
	rope2 = new ConstraintConnector(ball2.body,holder.body,-50,0);
	rope3 = new ConstraintConnector(ball3.body,holder.body,0,0);
	rope4 = new ConstraintConnector(ball4.body,holder.body,50,0);
	rope5 = new ConstraintConnector(ball5.body,holder.body,100,0);





  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255,255,255);
  holder.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}




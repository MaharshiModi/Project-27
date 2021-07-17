
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

	//Create the Bodies Here.
	roof1=new Roof(400,200,300,20);

	bobObject1=new Bob(300,350,50);
	bobObject2=new Bob(350,350,50);
	bobObject3=new Bob(400,350,50);
	bobObject4=new Bob(450,350,50);
	bobObject5=new Bob(500,350,50);

	rope1=new Chain(bobObject1.body, roof1.body, -50*2, 0);
	rope2=new Chain(bobObject2.body, roof1.body, -25*2, 0);
	rope3=new Chain(bobObject3.body, roof1.body, 0*2, 0);
	rope4=new Chain(bobObject4.body, roof1.body, 25*2, 0);
	rope5=new Chain(bobObject5.body, roof1.body, 50*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-100, y:-100});
	}
}


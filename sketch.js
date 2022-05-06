
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ground_options = {
		isStatic : true
	  }
	  ground = Bodies.rectangle(400,650,800,20,ground_options);
	  World.add(world,ground);
	  
	  var block1 = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0
	  }

	  quadrado = Bodies.rectangle(100,200,50,50, block1);
	  World.add(world,quadrado);

	  var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }

	  ball = Bodies.circle(200,10,50,ball_options);
  World.add(world,ball);

  var ball_options2 = {
	restitution : 0.20,
	frictionAir : 0.02
  }

  bola = Bodies.circle(400,10,100,ball_options2);
World.add(world,bola);

	Engine.run(engine);
  
}


function draw() {
	ellipseMode(RADIUS);
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,800,20);
  rect(quadrado.position.x,quadrado.position.y,50,50);
  ellipse(ball.position.x,ball.position.y,50);
  ellipse(bola.position.x,bola.position.y,100);
  drawSprites();
 
}




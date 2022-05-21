
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var flat, flut, flet, chao
function preload()
{
	
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	var options = {
		isStatic:false,
		restitution:0.8,
		friction:0.1,
		frictionAir:0.1,
	}
	var options2 = {
		isStatic:false,
		restitution:0.5,
		friction:0.01,
		frictionAir:0.1,
	}
	var options3 = {
		isStatic:false,
		restitution:0.5,
		friction:0.01,
		frictionAir:0.1,
	}
	var options4 = {
		isStatic:true,
	}

    flat=Bodies.rectangle(600,100,150,150,options);
	World.add(world, flat);

	flet=Bodies.rectangle(400,100,200,150,options2);
	World.add(world, flet);

	flut=Bodies.circle(150,100,100,options3);
	World.add(world, flut);

	chao=Bodies.rectangle(500,500,799,10,options4);
    World.add(world, chao);

	Engine.run(engine);
	
	fill("blue")
  
}


function draw() {
  rectMode(CENTER);

  background("green");

  Engine.update(engine);
  
  rect(flat.position.x,flat.position.y,150,150);

  rect(flet.position.x,flet.position.y,200,150);

  circle(flut.position.x,flut.position.y,170);

  rect(chao.position.x,chao.postion.y,799,10);

  drawSprites();

}




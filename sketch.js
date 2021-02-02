
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,groundSprite
var side1,bottom,side2
var paper3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

rectMode(CENTER)


groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color("yellow")


side1=createSprite(570,610,20,100,{restitution:3, isStatic:true});
	side1.shapeColor=color("red")

	bottom=createSprite(670,650,200,20,{restitution:3, isStatic:true});
	bottom.shapeColor=color("red")
	
	side2=createSprite(770,610,20,100,{restitution:3, isStatic:true});
	side2.shapeColor=color("red")

    engine = Engine.create();
	world = engine.world;
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper3 = new Paper (50,200,40,40)

	Engine.run(engine);



	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper3.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper3.body,paper3.body.position,{x:85,y:-85});
   
	 }
   }





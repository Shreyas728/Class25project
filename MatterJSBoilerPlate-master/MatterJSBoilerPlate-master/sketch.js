
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine ,world;

 

 
 
function preload()
{
	dustbin1.addImage(dustbingreen.png);
   paper1.addImage(Crumpled_Paper.png);

   
}

function setup() {
	createCanvas( 1600,700);

 
	


	


 
 

                                                                      

  engine = Engine.create();
  

	world = engine.world;
  Engine.run(engine);
  
	//Create the Bodies Here.
                                                                 
	                                                                                          
 
	 
	 
	dustbin1 = new dustbin(1200, 650);
	
	 paper1 = new paper(200, 100);
	
     ground1 = new ground();
     

     


   
}


function draw() {
  rectMode(CENTER);
background(180);








  drawSprites();
  
  paper1.display();
  dustbin1.display();
  ground1.display();


 
  
  
  
}



function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position.x,{x:140,y:-140})


}


}



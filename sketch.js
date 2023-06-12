
var trex ,trex_running;
var ground,ground_running;

function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");

  ground_running=  loadImage('ground2.png');

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex= createSprite(50,150,50,70);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  ground= createSprite(200,180,400,20);
  ground.addImage(ground_running);
 
}

function draw(){
  background(200);

  if(keyDown("space") && trex.y>=150.5){
    trex.velocityY=-10;
  }

  console.log(trex.y);

  trex.velocityY=trex.velocityY+0.5;

  ground.velocityX=-4;

  if(ground.x<0){
    ground.x=200;
  }
                    
  trex.collide(ground);
                  
  drawSprites();

}

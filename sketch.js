
var monkey , monkey_running
var bananaImage,banana,obstacle,obstacleImage;

var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime,score ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  survivalTime = 0;
  score = 0;
  
  monkey  = createSprite(80,320,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale =0.1;
  

  
  
  ground =createSprite(400,350,1000,10);
  ground.velocityX= -4;
  ground.x = ground.width/2;
  
bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
  
  
  if(keyDown("space")&& monkey.y >= 230){ 
   monkey .velocityY = -12; 
   
     }
 monkey.velocityY = monkey.velocityY +0.8;
  
monkey.collide(ground);
  
    
  if(obstacleGroup.isTouching(monkey)){ 
    ground.velocityX = 0; 
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0); 
    bananaGroup.setVelocityXEach(0); 
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1); 
    survivalTime =0;
    
  }
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }


food();
obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" +survivalTime ,100,50);
}

function food(){
    if(frameCount %80 ===0){
     banana  =createSprite(400,150,20,20);
     banana.addImage(bananaImage);
     banana.scale =0.1;
    banana.velocityX = -6; 
    banana.lifetime = 300;
      bananaGroup.add(banana);
  }
}

function obstacles(){
  
    if(frameCount %300 ===0){
    obstacle  =createSprite(800,330,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale =0.1;
    obstacle.velocityX = -5; 
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle);
  }
}




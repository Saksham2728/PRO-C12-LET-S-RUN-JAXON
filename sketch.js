var bomb;
var coin;
var path;
var power;
var energyDrink;
var runner;
var invisibleside;
var invisibleside1;


function preload(){
  //pre-load images
 bombImg = loadImage("bomb.png");
 coinImg = loadImage("coin.png");
 pathImg = loadImage("path.png");
 powerImg = loadImage("power.png");
 energyImg = loadImage("energyDrink.png");
 runnerImg = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4
  path.scale=1.3

  runner=createSprite(200,330,10,10)
  runner.addAnimation("Running",runnerImg);
  runner.scale=0.1;

  invisibleside=createSprite(395,200,5,500);
  invisibleside.visible=false;
  invisibleside1=createSprite(5,200,5,500);
  invisibleside1.visible=false;

  bomb = createSprite(200,60,5,5)
  bomb.addImage("bomb",bombImg)
  bomb.scale=0.1;

  coin = createSprite(75,150,5,5)
  coin.addImage("coin",coinImg)
  coin.scale=0.5;

  energyDrink = createSprite(325,70,5,5)
  energyDrink.addImage("energyDrink",energyImg)
  energyDrink.scale=0.1;

  power = createSprite(325,134,5,5)
  power.addImage("power",powerImg)
  power.scale=0.1
}

function draw() {
  background(0)

 if(path.y> 400){
   path.y = height/2
 }
 if(keyDown("LEFT_ARROW")){
   runner.velocityX = -2
 }
 if(keyDown("RIGHT_ARROW")){
  runner.velocityX = 2

 






}







drawSprites();
 

}

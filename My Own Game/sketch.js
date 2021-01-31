var playerImage; 


function preload(){
playerImage= loadAnimation("player1.png","player2.png");

}


function setup(){
createCanvas(400,400);
var player=createSprite(100,100,20,20)
player.addAnimation("playerImage",playerImage);
}


function draw(){

drawSprites();
}
var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life = 3;
var score = 0;
var gameState=  1

function preload(){
gunImg = loadImage("gun1.png")
blastImg = loadImage("blast.png")
bulletImg = loadImage("bullet1.png")
blueBubbleImg = loadImage("waterBubble.png")
redBubbleImg = loadImage("redbubble.png")
backBoardImg= loadImage("back.jpg")
}

function setup(){
createCanvas(800, 800);

backBoard= createSprite(50, width/2, 100,height);
backBoard.addImage(backBoardImg)
  
gun= createSprite(100, height/2, 50,50);
gun.addImage(gunImg)
gun.scale=0.2
  
bulletGroup = createGroup();   
blueBubbleGroup = createGroup();   
redBubbleGroup = createGroup();   
  
heading = createElement("h1")
scoreboard = createElement("h1")
}

function draw(){
background("#BDA297");

//display Score and number of lifes

if(gameState===1){
gun.y=mouseY  

if(keyDown("space")){
shootBullet();
}
if(frameCount % 80 == 0){
drawBlueBubble();
}
if(frameCount % 100 == 0){
drawRedBubble();
}

scoreboard.html("Score: "+scoreboard)
scoreboard.style('color:red')
scoreboard.position(width-350,20)

heading.html("Life: "+heading)
heading.style('color:blue')
heading.position(width-700,20)

drawSprites();
text(mouseX+", "+mouseY,mouseX,mouseY)
}
     
}

function shootBullet(){
bullet = createSprite(200,10,10,10)
bullet.velocityX = 10
bullet.y=gun.y-30
bullet.addImage(bulletImg)
bullet.Lifetime = 60
bullet.scale = 0.2
bulletGroup.add(bullet)
}

function drawBlueBubble(){
bluebubble = createSprite(800,random(20,780),10,10)
bluebubble.velocityX = -8
bluebubble.addImage(blueBubbleImg)
bluebubble.Lifetime = 400
bluebubble.scale = 0.1
blueBubbleGroup.add(bluebubble)
}

function drawRedBubble(){
redbubble = createSprite(800,random(20,780),10,10)
redbubble.velocityX = -10
redbubble.addImage(redBubbleImg)
redbubble.Lifetime = 400
redbubble.scale = 0.1
redBubbleGroup.add(redbubble)
}

function handleBubbleCollision(bubbleGroup){
if(life > 0){
score = score+1
blast = createSprite(bullet.x,bullet.y,10,10)
blast.addImage(blastImg);
blast.scale = 0.3
bubbleGroup.destroyEach();
bulletGroup.destroyEach();
}
}

function handleGameOver(bubbleGroup){

}
//creating variables for images
var destroyedShipImg, GameLoadImg, LargePointShipImg, playerImg, returnImg, rulesImg, alien1Img, alien2Img, alien3Img, laserImg;  

var gameState;
var game;

var player;


var alien1 = [];
var alien2 = [];
var alien3 = [];
var alien10, alien11, alien12, alien13, alien14, alien15, alien16, alien17, alien18, alien19;
var alien20, alien21, alien22, alien23, alien24, alien25, alien26, alien27, alien28, alien29;
var alien30, alien31, alien32, alien33, alien34, alien35, alien36, alien37, alien38, alien39;

gameState = 1;

function preload(){
  destroyedShipImg = loadImage("images/Destroyed_Ship.png");
  GameLoadImg = loadImage("images/GameLoad.png");
  LargePointShipImg = loadImage("images/LargePointShip.png");
  playerImg = loadImage("images/Player.png");
  returnImg = loadImage("images/Return.png");
  rulesImg = loadImage("images/Rules.png");
  alien1Img = loadImage("images/saucer1b.png");
  alien2Img = loadImage("images/saucer2b.png");
  alien3Img = loadImage("images/saucer3b.png");
  laserImg = loadImage("images/laser.png")
}
function setup(){
  
  player = createSprite(displayWidth/2, displayHeight - 200);
  player.addImage(playerImg);

  player.visible = false

  game = new Game();

  if(gameState === 1){
    game.start();
  } 
}


function draw(){
  createCanvas(displayWidth - 20, 930);
  background(0)
  

   if (gameState === 2){
    game.play();

    player.visible = true;
    //player.x = mouseX;
    

    if(keyDown(LEFT_ARROW)){
      player.x = player.x -10;
    } 
    else if (keyDown(RIGHT_ARROW)){
      player.x = player.x + 10;
    }
     

  }
  
  else if(gameState === 3){
    game.end();
  }

  drawSprites()
}
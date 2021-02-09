var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers =0;
var passedFinish;
var form, player, game;
var deadCount = 0;
var rand = 4;


var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/brown.png");
  car2_img = loadImage("../images/orange.png");
  car3_img = loadImage("../images/grey.png");
  car4_img = loadImage("../images/pink.png");
  ground = loadImage("../images/ground.png");
  bgImage = loadImage("../images/bg.jpg")
  bronze_img = loadImage("images/bronze.png");
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
  bg1 = loadImage("images/bg1.jpg")
  bg2 = loadImage("images/bg2.png")
  bg3 = loadImage("images/bg3.jpg")
  bg4 = loadImage("images/bg4.jpg")
  bg5 = loadImage("images/bg5.jpg")

  imposter = loadImage("images/imposter.png")
}

function setup(){
  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  // if(finishedPlayers === 4){
  //   game.update(2);
  // }
  if(deadCount === 3){
    background(0)
    game.end();
  }
  // if(gameState === 2 && finishedPlayers ===4){
  //   background(200, 200, 255);
  //   game.displayRanks();
  // }
}












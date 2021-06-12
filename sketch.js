var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var treeimg,riceimg,grassimg,birdimg,waterimg,wheatimg;
var tree,rice,grass,bird,water,wheat ,bucket,bucketimg;
var bg ;
var form,player,game;
var gameState=0
var playerCount;
var database;
var boy,boyrunning;boyimg, boyrunimg,houseimg,house,wellimg,well;
function preload() {
   treeimg=loadImage("images/tree img.jpg");
   riceimg=loadImage("images/rice.jpg");
   waterimg=loadImage("images/water.jpg");
   wheatimg=loadImage("images/wheat.jpg");
   grassimg=loadImage("images/grass.jpg");
   //birdimg=loadImage("image/bird.jpg");
   back_img= loadImage("images/grass.jpg");
   boyimg=loadImage("images/man image.jpg");
   boyrunimg=loadImage("images/running man.jpg");
   bucketimg=loadImage("images/bucketimg.jpg");
   houseimg=loadImage("images/houseimg.png");
   wellimg=loadImage("images/well.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   
}
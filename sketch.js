var canvas, backgroundIMG;
var statusgame = 0;
var playercount;
var database;
var form,game,player;
var allplayer;
var distance = 0;

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
    
}

function draw(){
  if(playercount === 4){
      game.update(1);
  }  
  if(statusgame === 1){
      clear();
      game.play();
  }
}





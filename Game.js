class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
          if (gameState === 0) {
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if (playerCountRef.exists()) {
                  playerCount = playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();

          }
          var boy=createSprite(200,500,30,20);
             boy.addImage(boyimg);
             boy.scale=0.2
             var well=createSprite(800,200,30,20);
             well.addImage(wellimg);;
             well.scale=0.5
             var house=createSprite(500,300,20,30);
             house.addImage(houseimg);
             house.scale=0.5

             if(keyDown("UP_ARROW")){
                boy.y=boy.y-10

            }
            if(keyDown("DOWN_ARROW")){
                boy.y=boy.y+10

            }

      }
  
  play(){
      
              form.hide();

              Player.getPlayerInfo();
               image(back_img, 0, 0, 1000, 800);
               var x =100;
               var y=200;
              
               drawSprites();
               for(var plr in allPlayers){
                  var index =0;
                   index = index+1;
                   x = 500-allPlayers[plr].distance;
                   y=500;

                  
                   
                   
                  
                       textSize(25);
                       fill("white");
                       text("Welcome"+allPlayers.player1.name ,50,50);
                      //text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score , 50, 100);
                      text("Welcome"+allPlayers.player2.name ,50,100);
               }
              
              
               

               
          
               
               
               
             
  }

  end(){
     console.log("Game Ended");
  }


}
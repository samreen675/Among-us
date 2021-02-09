class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    var deadCountRef  = database.ref('deadCount');
    deadCountRef.on("value",function(data){
       deadCount = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      background(bgImage);
    }

    car1 = createSprite(100,200,10,10);
    car1.scale = 0.05
    car1.addImage("car1",car1_img);
    
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car1.scale = 1

    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car1.scale = 1

    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    car1.scale = 1

    cars = [car1, car2, car3, car4];
    passedFinish= false;

  }

  play(){
    // var edges = createEdgeSprites()
    // car1.bounceOff(edges)
    // car2.bounceOff(edges)
    // car3.bounceOff(edges)
    // car4.bounceOff(edges)
   
    form.hide();
    
    Player.getPlayerInfo();
    player.getFinishedPlayers();    
    if(allPlayers !== undefined){
      background(track);
      image(bg1, 0,0,displayWidth,displayHeight)
      image(bg2,0,-displayHeight,displayWidth,displayHeight)
      image(bg3,0,displayHeight,displayWidth,displayHeight)
      image(bg4,displayWidth,0,displayWidth,displayHeight)
      image(bg5,-displayWidth,0,displayWidth,displayHeight)
      var index = 0;
      var x ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        x= allPlayers[plr].xdistance+ (allPlayers[plr].index *240)+75
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x;
          camera.position.y = cars[index-1].y;
        }

        if(player.index === 4){
          // var button1Show,button2Show,button3Show
          // var ref = database.ref("players/player1/dead")
          // ref.on("value", (data)=>{
          //   button1Show = data.val()
          // })
          // var ref = database.ref("players/player2/dead")
          // ref.on("value", (data)=>{
          //   button2Show = data.val()
          // })
          // var ref = database.ref("players/player3/dead")
          // ref.on("value", (data)=>{
          //   button3Show = data.val()
          // })
          // console.log(button1Show + " " + button2Show + " " +  button3Show)
          // if(button1Show){
            this.button1 = createButton('Kill Player 1');
            this.button1.position(displayWidth - 200, 100);
            this.button1.mousePressed(()=>{
              database.ref("players/player1").update({
                dead:true
              })
              deadCount++
              this.button1.hide()
  
            })
          // }
          // if(button2Show){
            this.button2 = createButton('Kill Player 2');
            this.button2.position(displayWidth - 200, 200);
            this.button2.mousePressed(()=>{
              database.ref("players/player2").update({
                dead:true
              })
              deadCount++
              this.button2.hide()
  
            })
          // }

          // if(button3Show){
            this.button3 = createButton('Kill Player 3');
            this.button3.position(displayWidth - 200, 300);
            this.button3.mousePressed(()=>{
              database.ref("players/player3").update({
                dead:true
              })
              deadCount++
              this.button3.hide()
  
            })
        }


      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.xdistance -=10
      console.log(player.xdistance)
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.xdistance +=10
      console.log(player.xdistance)
      player.update();
    }
    
    // if(player.distance > 460 && passedFinish===false){
    //   Player.updateFinishedPlayers();
    //   player.rank= finishedPlayers;
    //   player.update();
    //   // passedFinish= true;
    //  console.log(passedFinish)
    // }
   console.log("DeadCount "+deadCount)
   
    drawSprites();
  }

  // displayRanks(){
    
  //   camera.position.x =0;
  //   camera.position.y = 0;
     
  //   imageMode(CENTER);
  //   Player.getPlayerInfo();

  //   image(bronze_img, displayWidth/-4, -100 + displayHeight/9, 200, 240);
  //   image(silver_img, displayWidth/4, -100 + displayHeight/10, 225, 270);
  //   image(gold_img, 0, -100, 250, 300);

  //   textAlign(CENTER);
  //   textSize(50);
  //   for(var plr in allPlayers){
  //     if(allPlayers[plr].rank === 1){
  //       text("1st :  "+allPlayers[plr].name,0,85);
  //     }
  //     else if(allPlayers[plr].rank === 2){
  //       text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
  //     }else if(allPlayers[plr].rank === 3){
  //       text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
  //   }else{
  //       textSize(30);
  //       text("Honorable Mention: " + allPlayers[plr].name, 0, 225);
  //   }
  //   }
  // }
  end(){
    camera.position.x =0;
    camera.position.y = 0;
     
    imageMode(CENTER);
    
  }
}































class Player {
  constructor(){
    this.index = null;
    this.distance = 500;
    this.xdistance = 500;
    this.name = null;
    this.rank = 0;
    this.imposter = null
    this.dead = false
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      index : this.index,
      xdistance:this.xdistance,
      rank: this.rank,
      imposter:this.imposter,
      dead : this.dead
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinishedPlayers(){
    var finishedPlayersRef = database.ref('finishedPlayers');
    finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
    });
}
static updateFinishedPlayers(){
  database.ref('/').update({
      finishedPlayers: finishedPlayers + 1
  });
  this.rank += 1;
}

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}

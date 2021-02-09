class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createImg('../images/reset.png');
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() {
    this.title.html("Car Racing Game");
    this.title.position(displayWidth / 2 - 50, 0);

    this.input.addClass("input-field")
    this.input.position(displayWidth / 2 - 100, displayHeight / 2 - 80);
    this.button.addClass("play-button")

    this.button.position(displayWidth / 2 - 98, displayHeight / 2 - 20);
    this.reset.size(200, 150)
    this.reset.position(displayWidth - 220, -40);

    this.button.mousePressed(() => {
      background(imposter)
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      console.log(playerCount)
      player.index = playerCount;
      // if (rand === player.index) {
      //   player.imposter = true
      //   console.log("imposter:true")
      // }
      // else {
      //   player.imposter = false
      //   console.log("imposter:false")

      // }
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      database.ref("players").remove();
      database.ref("/").update({
        finishedPlayers: 0
      });
    });

  }
}

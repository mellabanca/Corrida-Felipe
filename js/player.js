class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
      var playercountRef = database.ref('playercount');
      playercountRef.on("value",function(data) => {
        playercount = data.val();
      })
    }

    updateCount(count){
      database.ref('/').update({
        playercount: count
      });
    }

    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getplayerinf(){
        var playerinfref = database.ref('players');
            playerinfref.on("value", function(data) => {
                allplayer = data.val();
            })    
    }
} 
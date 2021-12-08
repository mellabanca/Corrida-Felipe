class Game{
    constructor(){

    }
    getState(){
        var statusgameref = database.ref('statusgame');
        statusgameref.on("value", function(data){
            statusgame = data.val();
        })

    }
    update(state){
        database.ref('/').update({
            statusgame:state
        })

    }
    async start(){
    if(statusgame === 0){
        player = new Player();
        var playercountRef = await database.ref('playercount').once("value");
        if(playercountRef.exists()){
            playercount = playercountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
    }

    }
    play(){
        form.hide();
        textSize(30);
        text(" Lets´go ", 120,100);
        Player.getplayerinf();
        if(allplayer !== undefined){
            var displayposition = 130;
            for(var car in allplayer){
                if(car === "player" + player.index){
                    fill('blue');
                }
                else{
                    fill('black');
                }
                displayposition += 20;
                textsize(15);
                text(allplayer[car].name + ':' + allplayer[car].distance, 120,displayposition);
            
        
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();

        }

    }
}
class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.mensagem = createElement('h3');
        this.title = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.mensagem.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("car racing game");
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth-40,displayHeight/2-80);
        this.button.position(displayWidth+30,displayHeight/2);

        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);
            this.mensagem.html("Bem Vindo " +player.name);
            this.mensagem.position(displayWidth/2-70,displayHeight/4);

        })

    }
}
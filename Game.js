class Game {
    constructor(){}

    start(){
        this.title = createSprite(displayWidth/2, displayHeight/2 - 200);
        this.title.addImage(GameLoadImg);
        this.button = createButton("Play");

        this.button.position(displayWidth/2, displayHeight/2 + 100);
        this.button.mousePressed(()=>{
            gameState = 2;
        });
        
    }

    play(){

      
       for (var i = 100; i <= 1800; i+=200){
            alien1.push(new Alien1(i, 100))
            if (i === 1800){  
            }
            
          }
        for (var i = 100; i <= 1800; i+=200){
            alien2.push(new Alien2(i, 150))
          }
          for (var i = 100; i <= 1800; i+=200){
            alien3.push(new Alien3(i, 200))
          }

          if(keyWentDown("space")){
            var laser1 = createSprite(player.x, player.y);
            laser1.addImage(laserImg);
            laser1.scale = 0.1
            laser1.setVelocity(0, -6)
           
          }
          
          if(alien1.isTouching(laser1)){
            alien1.remove();
          }

          if(alien2.isTouching(laser1)){
            alien2.remove();
          }

          if(alien3.isTouching(laser1)){
            alien3.remove();
          }

        this.title.remove();
        this.button.hide();
        
       

        
          
    }

    end(){}
}
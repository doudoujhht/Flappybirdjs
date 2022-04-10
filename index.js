var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character")
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () =>{
    /*
     * retourne un nombre entre -150 et -450 
     */
    var random = -((Math.random()*300)+150);
    hole.style.top = random+"px";
    counter++;
});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump();
    }
  })

/*
set interval ca permet de rejouer la fonction a l'infini toute les 10 ms 10 est ecrit en bas la bas
a chaque fois la variable character top est egale a la position top de la balle
et a chaque fois on augmente la position de la balle de 3 ce qui la fait descendre
*/
setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if (jumping==0){
        character.style.top = (characterTop+3)+"px";
    }

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop= -(500-characterTop);

    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }

},10)

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (jumpCount<15)){
            character.style.top = (characterTop-6)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
    
        jumpCount++;
    },10);
}

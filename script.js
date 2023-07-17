

  
 

  let cards =[];
  let sum = 0 
  let hasBlackJack = false;
  let isAlive = false;
  let gamemessage = document.getElementById("message")
  let sumEl =document.querySelector("#sum-el")
  let cardsEl = document.getElementById("cards")
  let playerEl = document.getElementById("player")

  let player ={
     name :"Amine",
     chips :0

  }


  playerEl.textContent = `${player.name} : ${player.chips}$`;
 




  function getRandomCard(){

    let randomNum = Math.floor(Math.random()*13)+1; 
  
    if(randomNum === 1) {
            
          return 11;
    }
    else if (randomNum>10 && randomNum<14){ 
      return 10;
  
  }
  else {
    return randomNum
  }
  }
  

function startGame (){

isAlive=true

let firstCard =getRandomCard();
let secondCard=getRandomCard();
 
  cards = [firstCard,secondCard]
   sum= firstCard + secondCard

   
  renderGame();
 
}




  function renderGame(){

    
      cardsEl.innerHTML = "Cards: "; // Clear the previous card display

      for(let i = 0 ; i<cards.length;i++){
      cardsEl.innerHTML += cards[i] +" ";
      } 

      sumEl.textContent= `Sum: ${sum}`;

if ( sum <= 20 ){

  
  
  gamemessage.textContent = " Do u want to Draw a new card ?";

  
 

}
else if (sum === 21){

  gamemessage.textContent = "you won";

  
  player.chips++;
  playerEl.textContent = `${player.name} : ${player.chips}$`;
  hasBlackJack = true;

  /*credits++;
  creditsEl.innerHTML+=`Credits : ${credits}` */
  
}
else {
  gamemessage.textContent = " you lost";

  
  isAlive=false;
}



  }


  function newCard(){

    if (isAlive===true && hasBlackJack===false){
      let nCard = getRandomCard();
      sum = sum + nCard;
      cards.push(nCard);
      renderGame();
    }
  }
    
    
    


  


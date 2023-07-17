

  
 

  let player ={
     name :"Amine",
     chips :0

  }
  let cards =[];
  let sum = 0 
  /*let hasBlackJack = false;
  let isAlive = false;*/

  
  let gamemessage = document.getElementById("message")
  let sumEl =document.querySelector("#sum-el")
  let cardsEl = document.getElementById("cards")
  let playerEl = document.getElementById("player")
  let gameOver = false;



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

/*isAlive=true */
gameOver = false;
let firstCard =getRandomCard();
let secondCard=getRandomCard();
 
  cards = [firstCard,secondCard]
   sum= firstCard + secondCard

   
  renderGame();
 
}




function renderGame() {
  cardsEl.innerHTML = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    gamemessage.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    gamemessage.textContent = "You won!";
    player.chips++;
    playerEl.textContent = `${player.name} : ${player.chips}$`;
    gameOver = true;
  } else {
    gamemessage.textContent = "You lost!";
    gameOver = true;
  }
}

  function newCard(){

    if (gameOver===false){
      let nCard = getRandomCard();
      sum = sum + nCard;
      cards.push(nCard);
      renderGame();
    }
  }
    
    
    


  


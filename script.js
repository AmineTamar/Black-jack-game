


  let firstCard =6;
  let secondCard=9;
  let sum = firstCard + secondCard +6;
  let hasBlackJack = false;
  let isAlive = true;
  let gamemessage = document.getElementById("message")
  let sumEl =document.querySelector("#sum-el")


  function startGame(){

if ( sum <= 20 ){
  
  gamemessage.innerHTML = " do u want to Draw a new card ?";

  ;
  isAlive=true;

}
else if (sum === 21){

  gamemessage.innerHTML = "you won";

  hasBlackJack = true;
}
else {
  gamemessage.innerHTML = " you lost";

  
  isAlive=false;
}

sumEl.innerHTML= `sum :${sum}`;
  }
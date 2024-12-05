const playerText = document.querySelector("#playerText"); // Gets playertext so it can update player choice text
const compText = document.querySelector("#compText"); // Gets comptext so it can update the computers choice text
const resText = document.querySelector("#resText"); // Gets restext so it can update the result
const choiceBtns = document.querySelectorAll(".choiceBtn"); // Querys all choice buttons so it can see what you click
let player;
let comp;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    compTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${comp}`;
    resText.textContent = checkWinner();
    // When a button is pressed, it updates your choice and retreives a new computer choice. 
    // It then checks to see who won based on your choice.
}));


function compTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    // Gets a semi-random number to decide the computers choice
    switch(randNum){
      case 1:
        comp = "ROCK";
        break;
      case 2:
        comp = "PAPER";
        break;
      case 3:
        comp = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == comp){
      return "Draw! :|";
    }
    else if(comp == "ROCK"){
      return (player == "PAPER") ? "You Won! :)" : "You Lost! :("
    }
    else if(comp == "PAPER"){
      return (player == "SCISSORS") ? "You Won! :)" : "You Lost! :("
    }
    else if(comp == "SCISSORS"){
      return (player == "ROCK") ? "You Won! :)" : "You Lost! :("
    }
}

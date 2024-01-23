const playerText = document.querySelector("#playerText");
const compText = document.querySelector("#compText");
const resText = document.querySelector("#resText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let comp;

choiceBtns.forEach(button => button.addEventListener("click", () => {


    player = button.textContent;
    compTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${comp}`;
    resText.textContent = checkWinner();
}));


function compTurn(){


    const randNum = Math.floor(Math.random() * 3) + 1;


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

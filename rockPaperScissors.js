function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3); //Generate random number between 0 and 2
    if(randomNumber == 0){
        return "r";
    }else if(randomNumber == 1){
        return "p";
    }else if(randomNumber == 2){
        return "s";
    }
}

let playerScore = 0;
let computerScore = 0;

function game(playerSelection){
    computerSelection = getComputerChoice();
    if(playerScore == 5 || computerScore == 5){
        return; 
    }
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        resultText.textContent = "You lost the round :(";
        computerScore++;
        console.log(score);
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        resultText.textContent = "You won the round :)";
        playerScore++;
    }else if(computerSelection == playerSelection){
        resultText.textContent = "You tied this round :|";
    } 
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    if(playerScore == 5){
        resultText.textContent = "You won and are smarter than a computer!!! Good job :)"
    }else if(computerScore == 5){
        resultText.textContent = "You lost and are not as smart as a computer!!!! Bad job :("
    }
}

const playerScoreBoard = document.querySelector("#playerScore");

const computerScoreBoard = document.querySelector("#computerScore");

const resultText = document.querySelector("#results");

const rock = document.querySelector("#rock");
rock.addEventListener("click", function(){
    game("r");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(){
     game("p");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(){
    game("s");
});






























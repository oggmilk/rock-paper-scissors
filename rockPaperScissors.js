function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3); //Generate random number between 0 and 2
    if(randomNum == 0){ //assign game values based off these numbers
        return "r";
    }else if(randomNum == 1){
        return "p";
    }else if(randomNum == 2){
        return "s";
    }
}

function singleRound(playerSelection, computerSelection){
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        return "Lose";
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        return "Win";
    }else if(computerSelection == playerSelection){
        return "Tie";
    }
} //Establish win, lose, & tie conditions

function game(){
    let userScore = 0;   
    let computerScore = 0;
    for (let i =0; i < 5; i++){ 
        let userEntry = prompt("Rock, Paper, or Scissors?") //prompt and add variable for user entry
        let playerSelection = userEntry.toLowerCase().slice(0,1); //reformat user entry for code compatibility
        let computerSelection = getComputerChoice();  
        if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
            computerScore++;
        }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
            userScore++;
        } //adds points to scores after outcome
        console.log(singleRound(playerSelection, computerSelection)); //displays round outcome
        console.log("Your score:  ", userScore, "  Computer score:  ", computerScore); //displays score
    }
    if(userScore>computerScore){
        console.log("You won the game!");
    }else if (userScore<computerScore){
        console.log("You lost the game :(");
    }else{
        console.log("Tie Game: You are equally as smart as a computer nice!!!!")
    }    // declares winner or loser or tie for the 5 rounds
}

game(); //initializes game

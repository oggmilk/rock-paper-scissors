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

function singleRound(playerSelection){
    computerSelection = "r"; ////makes comp selection rock right now for testing,, CHANGE BACK TO GET COMPCHOICE cuntion
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        console.log("lose")
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        console.log("win")
    }else if(computerSelection == playerSelection){
        console.log("tie")
    }
}



const rock = document.querySelector("#rock");
rock.addEventListener("click", function(){
    singleRound("r")
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(){
     singleRound("p")
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(){
    singleRound("s")
});

// let computerSelection = getComputerChoice();  
// if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
//     computerScore++;
// }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
//     playerScore++;
// } //adds points to scores after outcome
// console.log(singleRound(playerSelection, computerSelection)); //displays round outcome
// console.log("Your score:  ", playerScore, "  Computer score:  ", computerScore); //displays score



























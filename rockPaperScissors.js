function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum == 0){
        return "r";
    }else if(randomNum == 1){
        return "p";
    }else if(randomNum == 2){
        return "s";
    }
}

function singleRound(playerSelection){
    let computerSelection = getComputerChoice();
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        console.log("Lose");
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        console.log("Win");
    }else if(computerSelection == playerSelection){
        console.log("Tie");
    }
}
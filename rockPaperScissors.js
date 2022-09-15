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

function singleRound(playerSelection, computerSelection){
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        return "Lose";
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        return "Win";
    }else if(computerSelection == playerSelection){
        return "Tie";
    }
}

let userEntry = prompt("r, p, or s?")

let playerSelection = userEntry.toLowerCase();

let computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));

for (let i =0; i < 5; i++){
    let userEntry = prompt("r, p, or s?")

let playerSelection = userEntry.toLowerCase();

let computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));
    
    
}
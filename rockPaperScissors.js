function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum == 0){
        console.log("r");
    }else if(randomNum == 1){
        console.log("p");
    }else if(randomNum == 2){
        console.log("s")
    }
}

function singleRound(playerSelection, computerSelection){
    if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
        console.log("Lose");
    }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
        console.log("Win");
    }else if(computerSelection == playerSelection){
        console.log("Tie");
    }



}
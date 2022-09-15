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
    for (let i =0; i < 5; i++){ 
        let userEntry = prompt("r, p, or s?") //prompt and add variable for user entry
    
        let playerSelection = userEntry.toLowerCase().slice(0,1); //reformat user entry for code compatibility
    
        let computerSelection = getComputerChoice();  
    
        console.log(singleRound(playerSelection, computerSelection));
        


        if(computerSelection == "r" && playerSelection == "s" || computerSelection == "p" && playerSelection == "r" || computerSelection == "s" && playerSelection == "p"){
            console.log("yoooooo")
        }else if(computerSelection == "s" && playerSelection == "r" || computerSelection == "r" && playerSelection == "p" || computerSelection == "p" && playerSelection == "s"){
            console.log("yooooo2o")
        }else if(computerSelection == playerSelection){
            console.log("yoo3oooo")
        } 

        


    }
}
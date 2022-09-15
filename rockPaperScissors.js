function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*2);
    if(randomNum == 0){
        console.log("r");
    }else if(randomNum == 1){
        console.log("p");
    }else if(randomNum == 2){
        console.log("s")
    }
}
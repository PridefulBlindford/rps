function getComputerChoice(){
    let computerChoiceNumber=Math.floor(Math.random()*3)+1;
    if(computerChoiceNumber === 1){
        return "rock";
    }
    else if(computerChoiceNumber === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
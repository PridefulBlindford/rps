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

function getHumanChoice(){
    let humanChoice=prompt("Please enter rock,paper,or scissors","");
    let lowerHumanChoice=humanChoice.toLowerCase();
    if(lowerHumanChoice === "rock" || lowerHumanChoice === "paper" || lowerHumanChoice === "scissors"){
        return lowerHumanChoice;
    }


}





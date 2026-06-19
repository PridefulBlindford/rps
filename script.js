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
function playGame(){
    
    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice,computerChoice){
        if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors.");
            humanScore++;
            return;
        }
        else if(humanScore === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock.");
            humanScore++;
            return;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            humanChoice++;
            return;
        }
        else if(computerChoice === "rock" && humanChoice === "scissors"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
            return;
        }
    
    else if(computerScore === "paper" && humanChoice === "rock"){
            console.log("you lose! Paper beats rock.");
            computerScore++;
            return;
        }
        else if(computerScore === "scissors" && humanChoice === "paper"){
    
    
            console.log("You lose! Scissors beats paper.");
            computerScore++;
            return;

        }
        else{
            console.log("It's a tie!");
            return;
        }
    }   
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    return;
    
    


}
playGame();

function getComputerChoice(){
    let computerChoiceNumber=Math.floor(Math.random()*3)+1;
    if(computerChoiceNumber === 1){
        return "rock";
    }
    else if(computerChoiceNumber === 2){
        return "paper";
    }
    else if(computerChoiceNumber === 3){
        return "scissors";
    }
}

let humanScore=0;
let computerScore=0;
let rockBtn=document.querySelector("#rock");
let paperBtn=document.querySelector("#paper");
scissorsBtn=document.querySelector("#scissors");
let roundResult=document.querySelector("#round-result");
let gameResult=document.querySelector("#game-result");
let runningScore=document.querySelector("#running-score");
let humanScoreHeader=document.createElement("h3");
let computerScoreHeader=document.createElement("h3");
humanScoreHeader.textContent=`Human Score: ${humanScore}`;
computerScoreHeader.textContent=`Computer Score: ${computerScore}`;
runningScore.appendChild(humanScoreHeader);
runningScore.appendChild(computerScoreHeader);
rockBtn.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
winGame();    
});
paperBtn.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
    winGame();
});
scissorsBtn.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice());
    winGame();
});
let roundResultHeader=document.createElement("h3");
let gameResultHeader=document.querySelector("h3");

function playRound(humanChoice,computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        roundResultHeader.textContent="You win! Rock beats scissors.";
        humanScore++;
        humanScoreHeader.textContent=`Human Score: ${humanScore}`;
        
        roundResult.appendChild(roundResultHeader);
        return;
    }
    else if(humanScore === "paper" && computerChoice === "rock"){
        resultRoundHeader.textContent="You win! Paper beats rock.";
        humanScore++;
        humanScore.textContent=`Human Score: ${humanScore}`;
        roundResult.appendChild(reoundResultHeader);
        return;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        roundResultHeader.textContent="You win! Scissors beats paper.";
        humanScore++;
        humanScoreHeader.textContent=`Human Score: ${humanScore}`;
        roundResult.appendChild(roundResultHeader);
        return;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        roundResultHeader.textContent="You lose! Rock beats scissors.";
        computerScore++;
        computerScore.textContent=`Computer Score: ${computerScore}`;
        roundResult.appendChild(roundResultHeader);
        return;
    }
    
    else if(computerScore === "paper" && humanChoice === "rock"){
        roundResultHeader.textContent="you lose! Paper beats rock.";
        computerScore++;
        computerScore.textContent=`Computer Score: ${computerScore}`;
        roundResult.appendChild(roundResultHeader);
        return;
    }
    else if(computerScore === "scissors" && humanChoice === "paper"){
    
    
        roundResultHeader.textContent="You lose! Scissors beats paper.";
        computerScore++;
        computerScoreHeader.textContent=`Computer Score: ${computerScore}`;
        roundResult.appendChild(roundResultHeader);
        return;

    }
    else{
        roundResultHeader.textContent="It's a tie!";
        roundResult.appendChild(roundResultHeader);
        return;
    }
}

function winGame(){
    if(humanScore === 5){
        gameResultHeaderdocument.textResult="You won!";
        gameResult.appendChild(gameResultHeader);
        return;
    }
    else if(computerScore === 5){
        gameResultHeader.textConent="You lose!";
        gameResult.appendChild(gameResultHeader);
        return;
    }
    else{
        return;
    }
}
   


    
       
   
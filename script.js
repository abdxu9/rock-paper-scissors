const buttons = document.querySelectorAll("button");
const score =document.querySelector("#score")

/*------------ definition of functions for the game ------------*/

function getComputerChoice(){
    // They are three possible choice "1: rock", "2: paper" or "3: scissor"
    return computerChoice = Math.floor(Math.random() * 3) + 1;
}

// getUserChoise
function getUserChoice(userChoice){
    if(userChoice == "rock"){
        return 1;
    }
    else if(userChoice == "paper"){
        return 2;
    }
    else if(userChoice == "scissors"){
        return 3;
    }
    else{
        console.log("Inval input. The value need to be rock, paper or scissors.")
        return null;
    }
}

// compareChoise
function compareChoice(computerChoice, userChoice){
    // They are three possible choice "1: rock", "2: paper" or "3: scissor"

    if (computerChoice == userChoice){
        return "Draw";
    }
    
    else if( (computerChoice == 1 && userChoice == 3) || (computerChoice == 2 && userChoice == 1) || (computerChoice == 3 && userChoice == 2)){
        return "Computer wins";
    }

    else{
        return "User wins";
    }

}

function printChoice(choice){
    switch(choice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default: return "Error";
    }
}


// mainFunction
// We get the computer answer
function playRound(computerChoice, userChoice){

    if(userChoice != null){
        console.log("Computer play " + printChoice(computerChoice));
        console.log("User play " + printChoice(userChoice));
        console.log(compareChoice(computerChoice, userChoice));
        return compareChoice(computerChoice, userChoice);
    }
    return "Invalid round";
}

//---------------------------------------------------------------------------------------------------//


function playGame(){
    let computerScore = 0;
    let userScore = 0;
    while( (computerScore!==5) || (userScore!==5)){
        const computerChoice = getComputerChoice();
        const userChoice = getUserChoice();
        const round = playRound(computerChoice, userChoice);
        if(round == "Computer wins"){
            computerScore++;
            score.textContent = `player : ${userScore} and computer : ${computerScore}`;
            console.log("Computer score: " + computerScore)
        }
        else if(round == "User wins"){
            userScore++;
            score.textContent = `player : ${userScore} and computer : ${computerScore}`;
            console.log("User score: " + userScore)
        }


        // Final result
        console.log("Final Scores:");
        console.log("Computer: " + computerScore);
        console.log("User: " + userScore);
        
        if (computerScore > userScore) {
            console.log("Computer wins the game!");
        } else if (userScore > computerScore) {
            console.log("User wins the game!");
        } else {
            console.log("The game is a draw!");
        }
    }
}



//playGame();

/*------------ Event listener ------------*/
console.log(buttons);
let computerScore = 0;
let userScore = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const userChoice = getUserChoice(button.textContent);
        const computerChoice = getComputerChoice()
        const round = playRound(computerChoice, userChoice);
        console.log(round);

        if(round == "Computer wins"){
            computerScore++;
            score.textContent = `player : ${userScore} and computer : ${computerScore}`;
            console.log("Computer score: " + computerScore);
        }
        else if(round == "User wins"){
            userScore++;
            score.textContent = `player : ${userScore} and computer : ${computerScore}`;
            console.log("User score: " + userScore);
        }
    
    
        // Final result
        console.log("Final Scores:");
        console.log("Computer: " + computerScore);
        console.log("User: " + userScore);
        
        if (computerScore===5 || userScore ===5) {
            if(computerScore > userScore){
                alert("Computer wins the game!");
            }
            else if (userScore > computerScore) {
                alert("User wins the game!");
            } 
            else {
                alert("The game is a draw!");
            }
        } 
    })
})

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score")
const history = document.querySelector("#game-history")

/*------------ definition of functions for the game ------------*/

function getComputerChoice(){
    // They are three possible choice "1: rock", "2: paper" or "3: scissor"
    return computerChoice = Math.floor(Math.random() * 3) + 1;
}

function printChoice(choice){
    switch(choice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default: return "Error";
    }
}

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

function playRound(computerChoice, userChoice){

    if(userChoice != null){
        return compareChoice(computerChoice, userChoice);
    }
    return "Invalid round";
}

//---------------------------------------------------------------------------------------------------//

let computerScore = 0;
let userScore = 0;

function playGame(button){
    const userChoice = getUserChoice(button.textContent);
    const computerChoice = getComputerChoice();
    const round = playRound(computerChoice, userChoice);
    const historyChild = document.createElement("p");
    console.log(`Round Result: ${round}`);

    historyChild.textContent = `- The Player Played ${button.textContent} and Computer played ${printChoice(computerChoice)}`;

    history.appendChild(historyChild);

    if (round === "Computer wins") {
        computerScore++;
        console.log("Computer score: " + computerScore);
    } else if (round === "User wins") {
        userScore++;
        console.log("User score: " + userScore);
    }

    // Update score display
    score.textContent = `Player: ${userScore} | Computer: ${computerScore}`;

    // Check for final result
    if (computerScore === 5 || userScore === 5) {
        if (computerScore > userScore) {
            alert("Computer wins the game!");
        } else if (userScore > computerScore) {
            alert("User wins the game!");
        } else {
            alert("The game is a draw!");
        }

        // Reset scores for a new game
        computerScore = 0;
        userScore = 0;
        score.textContent = `Player: ${userScore} | Computer: ${computerScore}`;
    }
}

/*------------ Event listener ------------*/

buttons.forEach((button) => {
    button.addEventListener("click", () => playGame(button)
    );
});


// Functions

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let selectedChoice;
    let randVal = Math.floor(Math.random() * 3);

    if (randVal === 0) selectedChoice = choices[0]; // rock 
    if (randVal === 1) selectedChoice = choices[1]; // paper
    if (randVal === 2) selectedChoice = choices[2]; // scissors 

    return selectedChoice;
}

function isValid(input) {
    if (input === "rock" | input === "paper" | input === "scissors") {
        return true;
    }
    return false;
}

/* TODO: Outsource validity check to other function */
function getHumanChoice() {
    let choice = prompt("Pick your move: ").toLowerCase();

    while (!isValid(choice)) {
        alert("Invalid move. Pick one of the following valid options: Rock, Paper, Scissors");
        choice = prompt("Pick your move: ");
    } 

    return choice; 
}

function playRound(computerChoice, humanChoice) {
    const winnerMessage = "You win! ";
    const loserMessage = "You lose! ";
    let announcement = "";

    /* -1 : Computer won
     *  0 : Draw
     *  1 : User won
     */
    let winVal;
    
    if (computerChoice === humanChoice) {
        announcement = `It's a draw! Both selected ${humanChoice}.`;
        winVal = 0;
    }
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            announcement = winnerMessage + "Paper beats Rock.";
            winVal = 1; 
        } 
        if (humanChoice === "scissors") {
            announcement = loserMessage + "Rock beats Scissors."; 
            winVal = -1;
        } 
    }
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            announcement = loserMessage + "Paper beats Rock.";
            winVal = -1;
        }
        if (humanChoice === "scissors") {
            announcement = winnerMessage + "Scissors beats Paper.";
            winVal = 1; 
        } 
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            announcement = winnerMessage + "Rock beats Scissors.";
            winVal = 1;
        } 
        if (humanChoice === "paper") {
            announcement = loserMessage + "Scissors beats Paper."; 
            winVal = -1;
        }
    }

    console.log(announcement);
    return winVal;
}

function determineWinner(computerScore, humanScore) {
    if (computerScore > humanScore) {
        return `The computer won the game with a score of ${computerScore}:${humanScore}!`;
    }
    if (humanScore > computerScore) {
        return `You won the game with a score of ${humanScore}:${computerScore}!`;
    }
    
    return `The game ended with a tie! The final score is ${humanScore}:${computerScore}!`; 
}

function playGame(gameCount) {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    let roundWinner;
    let winnerAnnouncement;

    for (let i = 0; i < gameCount; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        roundWinner = playRound(computerSelection, humanSelection);

        if (roundWinner === 1) humanScore++;
        if (roundWinner === -1) computerScore++;
    }

    winnerAnnouncement = determineWinner(computerScore, humanScore);
    console.log(winnerAnnouncement); 
}

// Global Variables

// Function Calls

playGame(5);
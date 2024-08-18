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

/* TODO: Outsource validity check to other function */
function getHumanChoice() {
    let choice = prompt("Pick your move: ");
    choice = choice.toLowerCase();

    while (!(choice === "rock" | choice === "paper" | choice === "scissors")) {
        alert("Invalid move. Pick one of the following valid options: Rock, Paper, Scissors");
        choice = prompt("Pick your move: ");
    } 

    return choice; 
}

function playRound(computerChoice, humanChoice) {
    const winnerMessage = "You win! ";
    const loserMessage = "You lose! ";
    let announcement = "";
    
    if (computerChoice === humanChoice) {
        announcement = `It's a draw! Both selected ${humanChoice}.`;
    }
    if (computerChoice === "rock") {
        if (humanChoice === "paper") annoucement = winnerMessage + "Paper beats Rock.";
        if (humanChoice === "scissors") announcement = loserMessage + "Rock beats Scissors."; 
    }
    if (computerChoice === "paper") {
        if (humanChoice === "rock") annoucement = loserMessage + "Paper beats Rock.";
        if (humanChoice === "scissors") announcement = winnerMessage + "Scissors beats Paper."; 
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") annoucement = winnerMessage + "Rock beats Scissors.";
        if (humanChoice === "paper") announcement = loserMessage + "Scissors beats Paper."; 
    }
    console.log("This is the announcement: " + announcement);
    console.log(announcement);
}

// Global Variables

let humanScore = 0;
let computerScore = 0;

// Function Calls

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let selectedChoice;
    let randVal = Math.floor(Math.random() * 3);

    if (randVal === 0) selectedChoice = choices[0]; // rock 
    if (randVal === 1) selectedChoice = choices[1]; // paper
    if (randVal === 2) selectedChoice = choices[2]; // scissors 

    return selectedChoice;
}
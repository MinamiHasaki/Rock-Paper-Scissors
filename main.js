const rock = "Rock";

const paper = "Paper";

const scissors = "Scissors";

let playerScore = 0;

let computerScore = 0;

function getRandomNumber() {
    return Math.floor((Math.random() * 3) + 1);
}

function getComputerChoice() {
    switch (getRandomNumber()) {
        case 1:
            return rock;
            break;
        case 2:
            return paper;
            break;
        case 3:
            return scissors;
            break;
    }
}

function getPlayerChoice() {
    let playerResponse = null;
    playerResponse = prompt("Welcome to Rock Paper Scissors, enter your choice!").toLowerCase();
    switch (playerResponse) {
        case "rock":
            return rock;
            break;
        case "paper":
            return paper;
            break;
        case "scissors":
            return scissors;
            break;
        default:
            console.log("Try again! Please type \"rock\", \"paper\", or \"scissors\".");
            playRound();
    }
}

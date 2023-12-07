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

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice == rock) {
        switch (computerChoice) {
            case rock:
                console.log("It's a tie, lets play again!");
                playRound();
                break;
            case paper:
                console.log("You lose! I chose paper, and paper beats rock.");
                computerScore++;
                break;
            case scissors:
                console.log("You win! I chose scissors, and rock beats scissors!");
                playerScore++
                break;
        }
    } else if (playerChoice == paper) {
        switch (computerChoice) {
            case rock:
                console.log("You win! I chose rock, and paper beats rock.");
                playerScore++;
                break;
            case paper:
                console.log("It's a tie, lets play again!");
                playRound();
                break;
            case scissors:
                console.log("You lose! I chose scissors, and scissors beats paper.");
                computerScore++;
                break;
        }
    } else if (playerChoice == scissors) {
        switch (computerChoice) {
            case rock:
                console.log("You lose! I chose rock, and rock beats scissors.");
                computerScore++;
                break;
            case paper:
                console.log("You win! I chose paper, and scissors beats paper.");
                playerScore++;
            case scissors:
                console.log("It's a tie, lets play again!");
                playRound()
                break;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log(`You win! You: ${playerScore} Computer: ${computerScore}`);
    }
    if (computerScore > playerScore) {
        console.log(`You lose! You: ${playerScore} Computer: ${computerScore}`);
    }
}

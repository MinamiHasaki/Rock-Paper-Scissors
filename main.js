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

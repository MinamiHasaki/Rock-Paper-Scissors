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

function addPlayerScore() {
    if (playerScore >= 5) {
        console.log(`You win! You: ${playerScore} Computer: ${computerScore}`);
        playerScore = 0;
        computerScore = 0
    } else {
        playerScore++;
        playerScoreDiv.textContent = `${playerScore}`;
    };
}

function addComputerScore() {
    if (playerScore >= 5) {
        console.log(`You win! You: ${playerScore} Computer: ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
    } else {
        computerScore++;
        computerScoreDiv.textContent = `${computerScore}`;
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice == rock) {
        switch (computerChoice) {
            case rock:
                console.log("It's a tie, pick again!");
                break;
            case paper:
                console.log("You lose! I chose paper, and paper beats rock.");
                addComputerScore();
                break;
            case scissors:
                console.log("You win! I chose scissors, and rock beats scissors!");
                addPlayerScore();
                break;
        }
    } else if (playerChoice == paper) {
        switch (computerChoice) {
            case rock:
                console.log("You win! I chose rock, and paper beats rock.");
                addPlayerScore();
                break;
            case paper:
                console.log("It's a tie, pick again!");
                break;
            case scissors:
                console.log("You lose! I chose scissors, and scissors beats paper.");
                addComputerScore();
                break;
        }
    } else if (playerChoice == scissors) {
        switch (computerChoice) {
            case rock:
                console.log("You lose! I chose rock, and rock beats scissors.");
                addComputerScore();
                break;
            case paper:
                console.log("You win! I chose paper, and scissors beats paper.");
                addPlayerScore();
            case scissors:
                console.log("It's a tie, pick again!");
                break;
        }
    }
}

const playerScoreDiv = document.querySelector("#player-score");

const computerScoreDiv = document.querySelector("#computer-score");

const rockButton = document.querySelector("#selection-rock");

const paperButton = document.querySelector("#selection-paper");

const scissorsButton = document.querySelector("#selection-scissors");

rockButton.addEventListener("click", () => {
    playRound(rock);
});

paperButton.addEventListener("click", () => {
    playRound(paper);
});

scissorsButton.addEventListener("click", () => {
    playRound(scissors);
});
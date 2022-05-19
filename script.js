function random() {
    return Math.floor(Math.random() * 3) + 1;
}

function computerPlay() {
    let randomNumber = random();
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const rounds = 5;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins++;
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return "You win! Scissors beats Paper.";
    } else {
        return "Draw!";
    }
}

for (i = 0; i <= rounds; i++) {
    if (playerWins >= 3 || i == 5 && playerWins > computerWins) {
        console.log("Player Wins!");
        break;
    } else if (computerWins >= 3 || i == 5 && computerWins > playerWins) {
        console.log("Computer Wins!");
        break;
    } else if (computerWins == playerWins && i == 5) {
        console.log("Draw game!");
        break;
    } else {
        console.log(playRound());
        console.log(i)
    }
}
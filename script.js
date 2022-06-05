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

let playerWins = 0;
let computerWins = 0;

const displayer = document.querySelector('.display');
const score = document.querySelector('.scorer');

function playRound(e, playerSelection, computerSelection) {

    if (playerWins == 5) {
        return;
    } else if (computerWins == 5) {
        return;
    } else {

        let playerID = e.target.id;
        computerSelection = computerPlay();

        if (playerID == 1) {
            playerSelection = 'rock';
        } else if (playerID == 2) {
            playerSelection = 'paper';
        } else {
            playerSelection = 'scissors';
        }

        if (playerSelection == "rock" && computerSelection == "paper") {
            computerWins++;
            displayer.textContent = 'You lose! Paper beats Rock.'
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWins++;
            displayer.textContent = "You win! Rock beats Scissors.";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerWins++;
            displayer.textContent = "You lose! Scissors beats Paper.";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerWins++;
            displayer.textContent = "You win! Paper beats Rock.";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerWins++;
            displayer.textContent = "You lose! Rock beats Scissors.";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWins++;
            displayer.textContent = "You win! Scissors beats Paper.";
        } else {
            displayer.textContent = "Draw!";
        }

        score.textContent = `Player: ${playerWins}  Computer: ${computerWins}`;
        
        if (playerWins == 5) {
            displayer.textContent = 'You win!!!';
            return;
        } else if (computerWins == 5) {
            displayer.textContent = 'You lose...';
            return;
        }
    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

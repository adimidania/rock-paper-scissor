// Functions
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "Draw! You both chose Scissors";
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection == 'Rock') {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == 'Scissors') {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "Draw! You both chose Paper";
        }

    }
    else {
        if (computerSelection == 'Paper') {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection == 'Rock') {
            return "You Lose! Rock beats Paper";
        }
        else {
            return "Draw! You both chose Scissors";
        }
    }
}

// Event listeners
const options = document.querySelectorAll("#ball-options button");
const playerScoreHolder = document.querySelector("#player-score p span");
const computerScoreHolder = document.querySelector("#computer-score p span");
const message = document.querySelector("#message");
const replay = document.querySelector("#replay");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

replay.addEventListener('click', function(e) {
    playerScore = 0;
    computerScore = 0;
    rounds = 0; 
    message.textContent = "Let's get started!";
    playerScoreHolder.textContent = playerScore;
    computerScoreHolder.textContent = computerScore;
})

options.forEach((option) => {
    option.addEventListener('click', function (e) {
        if (rounds < 5) {
            console.log(rounds);
            let computerSelection = getComputerChoice();
            result = playRound(option.id, computerSelection);
            if (result[4] == 'W') {
                playerScore += 1;
                playerScoreHolder.textContent = playerScore;
                rounds += 1;
            }
            else if (result[4] == 'L') {
                computerScore += 1;
                computerScoreHolder.textContent = computerScore;
                rounds += 1;
            }
            else {
                rounds += 1;
            }
            message.textContent = `Round ${rounds} : ${result}`;
            if (rounds == 5) {
                if (playerScore > computerScore) {
                    setTimeout(() => {
                        message.textContent = "You won the game!";
                    }, 600); 
                } else if (playerScore < computerScore) {
                    setTimeout(() => {
                        message.textContent = "You lost the game!";
                    }, 600); 
                } else {
                    setTimeout(() => {
                        message.textContent = "Draw!";
                    }, 600); 
                }
            }
        }
    })
})
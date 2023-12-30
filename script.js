// Functions
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection == 'Scissor') {
            return "You Win! Rock beats Scissor";
        } 
        else if (computerSelection == 'Paper') {
            return "You lose! Paper beats Rock";
        }
        else {
            return "Draw! You both chose Scissor";
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection == 'Rock') {
            return "You Win! Paper beats Rock";
        } 
        else if (computerSelection == 'Scissor') {
            return "You lose! Scissor beats Paper";
        }
        else {
            return "Draw! You both chose Paper";
        }

    } 
    else {
        if (computerSelection == 'Paper') {
            return "You Win! Scissor beats Paper";
        } 
        else if (computerSelection == 'Rock') {
            return "You lose! Rock beats Paper";
        }
        else {
            return "Draw! You both chose Scissor";
        }
    } 
}

// Event listeners
const options = document.querySelectorAll(".options button");
const playerScoreHolder = document.querySelector("#player-score p");
const computerScoreHolder = document.querySelector("#computer-score p");
const message = document.querySelector("#message");
const gameResult = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

options.forEach((option) => {
    option.addEventListener('click', function(e) {
        if (rounds <5) {
            let computerSelection = getComputerChoice();
            result = playRound(option.id, computerSelection);
            message.textContent = result;
            if (result[4] == 'W') {
                playerScore += 1;
                playerScoreHolder.textContent = playerScore;
                rounds += 1;
            }
            else if (result[4] == 'l') {
                computerScore += 1;
                computerScoreHolder.textContent = computerScore;
                rounds += 1;
            }
            else {
                console.log("Draw");
                rounds += 1;
            }
        } 
        else {
            if (playerScore > computerScore) {
                gameResult.textContent = "You won the game!";
            } else {
                gameResult.textContent = "You lost the game!"
            }
        }
    })
})


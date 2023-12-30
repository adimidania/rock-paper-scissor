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
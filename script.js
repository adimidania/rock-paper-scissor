function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection === 'Rock') {
        if (computerSelection == 'Scissor') {
            return "You Win! Rock beats Scissor";
        } 
        else if (computerSelection == 'Paper') {
            return "You lose! Paper beats Rock";
        }
        else {
            return "Tie! You both chose Scissor";
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
            return "Tie! You both chose Paper";
        }

    } 
    else if (playerSelection === 'Scissor') {
        if (computerSelection == 'Paper') {
            return "You Win! Scissor beats Paper";
        } 
        else if (computerSelection == 'Rock') {
            return "You lose! Rock beats Paper";
        }
        else {
            return "Tie! You both chose Scissor";
        }
    } 
    else {
        console.log("Invalid input.")
    }
}

function game() {
    for (i=0; i<5; i++) {
        const playerSelection = prompt("Enter your choice:");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
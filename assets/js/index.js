
/* Decleration of varibles used in the game */

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');

const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const result = document.getElementById('result');
const reset = document.getElementById('reset');
const allGameIcons = document.querySelectorAll('.far');

let playerScore = 0;
let computerScore = 0;
let computerChoice = '';

/* Obejct with gameChoices (game rules)  */

const gameChoices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
  

/* Function to process result and update score */

function resultScore(playerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'It is a Tie!';
    } else {
        const choice = gameChoices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            result.textContent = 'You Won this round!';
            playerScore++;
            playerScoreEl.textContent = playerScore;
        } else{
            result.textContent = 'You Lost this round!';
            computerScore++;
            computerScoreEl.textContent = computerScore;
        }
    }

}

/* Function for popup after game result */

function resetGamePopup() {
    const popup = document.getElementById("myPopup");
    const endResult = document.getElementById('endResult');
    const lost = document.getElementById('lost');
    const won = document.getElementById('won');
    popup.classList.toggle("show");
    endResult.textContent = result.textContent;
    if (endResult.textContent === 'You win!') {
        won.classList.add("showWon");
    } else {
        lost.classList.add("showLost");
    }
}
  
/* Function for resetting classes for images */

function resetClasses() {
    won.classList.remove("showWon");
    lost.classList.remove("showLost");
}

/* Function to end game after 5 rounds */

function endGame() {
    switch (playerScore) {
        case 5:
            result.textContent = 'You win!';
            resetGamePopup();
            break;
        default:
            break;
    }
    switch (computerScore) {
        case 5:
            result.textContent = 'You lost!';
            resetGamePopup();
            break;
        default:
            break;
    }
}

/* Function to reset the game */

function resetGame() { 
    playerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScore = 0;
    computerScoreEl.textContent = computerScore;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    result.textContent = '';
    resetSelected();
    resetGamePopup();
    resetClasses();
}

    
/* Function to process turn */

function processTurn(playerChoice) {
    resetSelected();
    computerRandomSelect();
    computerSelect(computerChoice);
    resultScore(playerChoice);
    endGame();
}

/* Function for resetting all 'selected' icons */

function resetSelected() {
    allGameIcons.forEach((icon) => {
      icon.classList.remove('selected');
    });
}

/* Function for random computer Selection */

function computerRandomSelect() {
    const computerNumber = Math.random();
    if (computerNumber < 0.2) {
        computerChoice = 'rock'; 
    } else if (computerNumber <= 0.4) {
        computerChoice = 'paper';
    } else if (computerNumber <= 0.6) {
        computerChoice = 'scissors';
    } else if (computerNumber <= 0.8) {
        computerChoice = 'lizard';
    } else {
        computerChoice = 'spock';
    }
}

/* Function for player selection */

function playerSelect(playerChoice) {
    processTurn(playerChoice);
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = ' - Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = ' - Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = ' - Scissors';
        break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = ' - Lizard';
        break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' - Spock';
            break;
        default:
            break;    
    }
}

/* Function for Computer selection */

function computerSelect(computerChoice) {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = ' - Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = ' - Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = ' - Scissors';
        break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = ' - Lizard';
        break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' - Spock';
            break;
        default:
            break;    
    }
    
}

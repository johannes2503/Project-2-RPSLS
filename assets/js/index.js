
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

const allGameIcons = document.querySelectorAll('.far');


let computerChoice = '';

/* Function to process turn */

function processTurn() {
    computerRandomSelect();
    computerSelect(computerChoice);
}


// Reset all 'selected' icons
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
        computerChoice = 'paper'
    } else if (computerNumber <= 0.6) {
        computerChoice = 'scissors'
    } else if (computerNumber <= 0.8) {
        computerChoice = 'lizard'
    } else {
        computerChoice = 'spock'
    }
}

/* Function for player selection */

function playerSelect(playerChoice) {
    resetSelected();
    processTurn();
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = ' --- Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = ' --- Scissors';
        break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = ' --- Lizard';
        break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;    
    }
}

/* Function for Computer selection */

function computerSelect(computerChoice) {
    resetSelected();
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = ' --- Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = ' --- Scissors';
        break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = ' --- Lizard';
        break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;    
    }
    
}
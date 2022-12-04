let playerScore = 0;
let computerScore = 0; 
let playerSelection;
let computerSelection;
let roundWinner;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playAgainBtn = document.querySelector('#play-again'); 

const computerChoiceDisplay = document.getElementById('comp-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const roundWinnerDisplay = document.getElementById('round-winner');
const resultDisplay = document.getElementById('result-display');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');


const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum];
}

// const getComputerChoice = () => {
    
//     //chooses random number between 1-3(inclusive)
//     const randomNumber = Math.floor(Math.random() * 3) +1;
//     //console.log(randomNumber);

//     //assigns number to rock, paper, & scissors
//     if (randomNumber == 1){
//        computerChoice = 'rock';
//     }
//     if (randomNumber == 2){
//         computerChoice = 'paper';
//     }

//     if (randomNumber == 3){
//         computerChoice = 'scissors';
//     }

//     //computerChoiceDisplay.innerText = computerChoice
//     //console.log(computerChoice);
// }


const playRound = (playerSelection, computerSelection) => {
 if (playerSelection === computerSelection) {
        roundWinner = 'It is a Tie!';
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            roundWinner =  'You Lose! Paper beats Rock';
            }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++ 
            roundWinner = 'You Lose! Scissors beats Paper';
            }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            roundWinner = 'You Lose! Rock beats Scissors';
            }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            roundWinner = 'You Win! Rock beats Scissors';
            }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
            roundWinner = 'You Win! Paper beats Rock';
            }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++
            roundWinner = 'You Win! Scissors beats Paper';
            }

    roundWinnerDisplay.innerText = roundWinner; 
    console.log(roundWinner);
}

const disableButtons = () => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        disableButtons();
        resultDisplay.innerText = `You beat the computer ${playerScore} to ${computerScore}! Impressive.`;
    } else if (computerScore === 5) {
        disableButtons()
        resultDisplay.innerText = `You got beat by the computer ${computerScore} to ${playerScore} Yikes.`;
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreDisplay.innerText = `${playerScore}`; 
    computerScoreDisplay.innerText = `${computerScore}`;
}

const refreshPage = () =>{
    window.location.reload();
}

rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    computerChoiceDisplay.innerText = computerSelection;
    console.log(computerSelection);
    playerChoiceDisplay.innerText = playerSelection;  
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});


paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    computerChoiceDisplay.innerText = computerSelection
    console.log(computerSelection);
    playerChoiceDisplay.innerText = playerSelection;
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    computerChoiceDisplay.innerText = computerSelection
    console.log(computerSelection);
    playerChoiceDisplay.innerText = playerSelection;
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});

playAgainBtn.addEventListener('click', refreshPage);

let playerScore = 0;
let computerScore = 0; 
let playerSelection;
let computerSelection;
let roundWinner;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playAgainBtn = document.querySelector('#play-again'); 
const finalMessage = document.querySelector('final-message')

const computerChoiceDisplay = document.getElementById('comp-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const roundWinnerDisplay = document.getElementById('round-winner');
const resultDisplay = document.getElementById('result-display');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

playerScoreDisplay.innerText = '0';
computerScoreDisplay.innerText = '0';

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
        roundWinner = `it\'s a tie! you both chose ${playerSelection}`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            roundWinner =  'you lose! paper covers rock';
            }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++ 
            roundWinner = 'you lose! scissors cuts paper';
            }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            roundWinner = 'you lose! rock crushes scissors';
            }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            roundWinner = 'you win! rock crushes scissors';
            }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
            roundWinner = 'you win! paper covers rock';
            }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++
            roundWinner = 'you win! scissors cuts paper';
            }

    roundWinnerDisplay.innerText = roundWinner; 
    console.log(roundWinner);
}

const disableButtons = () => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const toggleRefresh = () => {
    if (playerScore < 5 || computerScore < 5) {
    playAgainBtn.style.display = 'none';
} else if (playerScore === 5 || computerScore === 5){
    playAgainBtn.style.display = 'block';
}};

toggleRefresh();

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        disableButtons();
        playAgainBtn.style.display = 'block';
        resultDisplay.innerText = 'click the button below to play again.'
        roundWinnerDisplay.innerText = `game over! you win, cool.`;
    } else if (computerScore === 5) {
        disableButtons()
        playAgainBtn.style.display = 'block';
        resultDisplay.innerText = 'click the button below to play again.'
        roundWinnerDisplay.innerText = `game over! you lost, yikes.`;
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
   // computerChoiceDisplay.innerText = computerSelection;
    console.log(computerSelection);
   // playerChoiceDisplay.innerText = playerSelection;  
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});


paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  //  computerChoiceDisplay.innerText = computerSelection
    console.log(computerSelection);
  //  playerChoiceDisplay.innerText = playerSelection;
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
   // computerChoiceDisplay.innerText = computerSelection
    console.log(computerSelection);
  //  playerChoiceDisplay.innerText = playerSelection;
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
});

playAgainBtn.addEventListener('click', refreshPage);

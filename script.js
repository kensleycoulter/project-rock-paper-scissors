
//chooses random number between 1-3 (inclusive)
//let randomNumber = Math.floor(Math.random() * 3) +1;
//console.log(randomNumber);


let playerScore = 0
let computerScore = 0 

// assigns number to rock, paper, and scissors

//write function to randomly generate 'rock','paper', or 'scissors'


const getComputerChoice = () => {
    
    //chooses random number between 1-3(inclusive)
    const randomNumber = Math.floor(Math.random() * 3) +1;
    //console.log(randomNumber);

    //assigns number to rock, paper, & scissors
    if (randomNumber == 1){
       return 'rock';
    }
    if (randomNumber == 2){
        return 'paper';
    }

    if (randomNumber == 3){
        return 'scissors';
    }
}

//console.log(getComputerChoice());


//write a function for a single round 


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a Tie!';
    } 

    if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++
            return  'You Lose! Paper beats Rock';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++
            return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
            computerScore++
            return 'You Lose! Rock beats Scissors';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
            playerScore++
            return 'You Win! Rock beats Scissors';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
            playerScore++
            return 'You Win! Paper beats Rock';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
            playerScore++
            return 'You Win! Scissors beats Paper';
    }
}

//const playerSelection = 'Rock';

function game (){
    //loop
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, or Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
    }

    // keep score 
    if (playerScore > computerScore) {
        return 'You beat the computer! Impressive.'
    } else if (playerScore < computerScore) {
        return 'You were beat by the computer! Yikes.'
    } else {
        return 'You tied with the computer. cool'
    }
}


console.log(game());
 
//console.log(game()); 




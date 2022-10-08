
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
       return 'Rock';
    }
    if (randomNumber == 2){
        return 'Paper';
    }

    if (randomNumber == 3){
        return 'Scissors';
    }
}

//console.log(getComputerChoice());


//write a function for a single round 


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a Tie!';
    } 

    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
            return  'You Lose! Paper beats Rock';
    }
    if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
            return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
            return 'You Lose! Rock beats Scissors';
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
            return 'You Win! Rock beats Scissors';
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock'){
            return 'You Win! Paper beats Rock';
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
            return 'You Win! Scissors beats Paper';
    }
}

//const playerSelection = 'Rock';

function game (){
    for (let i = 0; i < 5; i++) {
       const playerSelection = prompt('Rock, Paper, or Scissors', 'Make a Choice');
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
    }
}

game();

//console.log(game()); 




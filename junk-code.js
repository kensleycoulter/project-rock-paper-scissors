const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
           roundWinner = 'You tied! You both picked ${playerSelection}';
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
       
      // game();
       //return roundWinner
       console.log(roundWinner);
   
       //computerChoiceDisplay.innerText = computerChoice
       roundWinnerDisplay.innerText = roundWinner; 
       //return;
      // console.log(roundWinner);
      // console.log(computerChoice);    
   }




rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
   // game();
    computerChoiceDisplay.innerHTML = computerChoice;
    console.log(computerChoice);
    playerChoiceDisplay.innerHTML = playerSelection;     
});



paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
   playRound('paper', computerSelection);
  // game();
   computerChoiceDisplay.innerHTML = computerChoice
   console.log(computerChoice);
   playerChoiceDisplay.innerHTML = playerSelection;

});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
   playRound('scissors', computerSelection);
  //game();
  computerChoiceDisplay.innerHTML = computerChoice
console.log(computerChoice);
  playerChoiceDisplay.innerHTML = playerSelection;
});



const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        result = 'You beat the computer ${playerScore} to ${computerScore}! Impressive.'
    } else if (computerScore === 5) {
        console.log('hey');
        result = 'You got beat by the computer ${computerScore} to ${playerScore} Yikes.';
    }
    resultDisplay.innerHTML = result;
}
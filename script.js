
//chooses random number between 1-3 (inclusive)
let randomNumber = Math.floor(Math.random() * 3) +1;
console.log(randomNumber);


// assings number to rock, paper, and scissors
function getComputerChoice (){

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
console.log(getComputerChoice(1));
console.log(getComputerChoice(2));
console.log(getComputerChoice(3));









//assigns number to string
//function getComputerChoice () {
    


    //if (randomNumber == 1)
    //return 'Rock'();
    //if (randomNumber == 2)
    //return 'Paper'();
    //if (randomNumber == 3)
    //return 'Scissors'();
//}
console.log(getComputerChoice());



// function getComputerChoice () {
    //return Math.floor(Math.random() * 3) + 1;
//}
//console.log(getComputerChoice);



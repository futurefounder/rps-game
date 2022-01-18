// 1. Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// 2. Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function computerPlay() {
    // Array for Rock, Paper, Scissors
    let compResult = ["rock", "paper", "scissors"]
    // RandomNumber to iterate through the Array
    let randomNumber = Math.floor(Math.random() * 3);
    // Return Random item between 0 - 2 from Array
    return compResult[randomNumber];
}

// Prompt to get User Input
let playerInput = prompt("What do you want to play?");

let playerScore = 0;
let computerScore = 0;
let computerWin = 0;
let playerWin = 0;

function playRound(playerSelection, computerSelection) {


    //Check if draw
    if (playerSelection === computerSelection) {
        return "🙅🏿‍♂️ Draw, lol";
    } 

    // Player has Rock variable für ergebnis speichern
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWin = computerScore++;
            return "😭 You loose! 👋🏽Paper beats ✊🏽 Rock";

        } else {

            playerWin = playerScore++;
            return "🤩 You Win! ✊🏽 Rock beats ✌🏽 Scissors";
        };
    }

    // Player has Paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {

            computerWin = computerScore++;
            return "😭 You loose! ✌🏽 Scissors beats 👋🏽 Paper";

        } else {

            playerWin = playerScore++;
            return "🤩 You Win! 👋🏽 Paper beats ✊🏽 Rock";

        };
    }

    // Player has Scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {

            computerWin = computerScore++;
            return "😭 You loose! ✊🏽 Rock beats ✌🏽 Scissors";
            
        } else {
            playerWin = playerScore++;
            return "🤩 You Win! ✌🏽 Scissors beats 👋🏽 Paper";
            
        };
    }       

}

// Playing variables with Player Input to Lower Case, so the user can type on big & small letters
let playerSelection = playerInput.toLowerCase();
let computerSelection = computerPlay();

function game() {
   let gameCounter = 0;

   const round1 = playRound(playerSelection, computerSelection);

   const round2 = playRound(playerSelection, computerSelection);

   return "Round 1:" + round1 + '\n' + "Player Score: " + playerWin + '\n' + "Computer Score: " + computerWin + '\n' + '\n' + "Round 2:" + round2 + playerScore + computerScore + playerWin + computerWin;

   
}

console.log(game());
console.log("Player:" + playerSelection);
console.log("Computer:" + computerSelection);






// Keyboard control for music

document.addEventListener("keyup", function(event) {

    //  Mute music by pressing 'm'
    if (event.keyCode === 77) {

        document.getElementById('background_audio').muted = true;
    };
    //  Play music by pressing 'p'

    if (event.keyCode === 80) {

        document.getElementById('background_audio').muted = false;
    }
});

// Game Start - Assign the computer a randon Rock, Paper or Scissors
function computerPlay() {

    // Array for Rock, Paper, Scissors
    let compResult = ["rock", "paper", "scissors"]
    // RandomNumber to iterate through the Array
    let randomNumber = Math.floor(Math.random() * 3);
    // Return Random Array Item between 0 - 2
    return compResult[randomNumber];
    }

    // Get player selection rock
    document.getElementById("buttonRock").addEventListener("click", function() {
      
      // Assign Rock to Variable  
      let playerSelection = "rock";

      // Assign the computerPlay() function to a new variable for better readability
      let computerSelection = computerPlay();

      // Call playRound() function to play a round with player and computer input and return a result  
      playRound(playerSelection, computerSelection);

    });

    // Get player selection Paper
    document.getElementById("buttonPaper").addEventListener("click", function() {
      
      //Assign Paper to variable
      let playerSelection = "paper";
      
      // Assign the computerPlay() function to a new variable for better readability
      let computerSelection = computerPlay();

      // Call playRound() function to play a round with player and computer input and return of result  
      playRound(playerSelection, computerSelection);

    });

    // Get player selection Scissors
    document.getElementById("buttonScissors").addEventListener("click", function() {

      // Assign Scissors to Variable  
      let playerSelection = "scissors";
      
      // Assign the computerPlay() function to a new variable for better readability
      let computerSelection = computerPlay();

      // Call playRound() function to play a round with player and computer input and return of result  
      playRound(playerSelection, computerSelection);

    });

    // Declare Score variables 
    let playerScore     = 0;
    let computerScore   = 0;
    let gameCounter     = 0;
    // let playingRounds   = 5;
    // console.log(playingRounds);

    // Game rounds
    function gameRounds() {
        let playingRounds = document.getElementById("gameRoundsInput").value;
        return gameRounds;
        console.log("playing rounds in GAMEROUND" + typeof(playingRounds))
       }
    
    function playRound(playerSelection, computerSelection) {
        // let innerRounds = parseInt(playingRounds);
        // console.log("playing rounds in playRound" + playingRounds)

        // This function check for the numbers of games played and declares a winner
        function announceWinner(gamecounter, computerScore, playerScore, playingRounds) {
            let innerRounds2 = playingRounds;

            // console.log("plaing rounds in WINNER" + typeof(innerRounds))
            
            if (gameCounter == 5) {
                if (computerScore > playerScore) {
                    alert("The world is doomed! Computer wins! 🤖");
                    location.reload(); 
                } else {
                    alert("Humans have a bright future! You win! 🎉 ");
                    location.reload(); 
                };
            };
        }

        // Check if draw
        if (playerSelection == computerSelection) {
            document.getElementById("result").innerText = "[Played] \n\n" + " 🙅🏿‍♂️ Draw, lol \n\n You have the same selection \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
            
        } 

        // Player has Rock
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                
                // Increase Computer Score
                computerScore = computerScore+1;

                // Increase Gamecount
                gameCounter   = gameCounter+1;

                // Return results in the result div
                document.getElementById("result").innerText = "[Played] \n\n" + " 😭 You loose! \n\n 👋🏽 Paper beats ✊🏽 Rock \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
               
            } else if (computerSelection === "scissors") {

                // Increase PlayerScore
                playerScore = playerScore+1;

                //Increase Gamecount
                gameCounter   = gameCounter+1;                

                document.getElementById("result").innerText = "[Played] \n\n" + " 🤩 You Win! \n\n ✊🏽 Rock beats ✌🏽 Scissors \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
             
            };
        }

        // Player has Paper
        if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                
                // Increase Computer Score
                computerScore = computerScore+1;

                // Increase Gamecount
                gameCounter   = gameCounter+1;

                document.getElementById("result").innerText = "[Played] \n\n" + " 😭 You loose! \n\n ✌🏽 Scissors beats 👋🏽 Paper \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
                      
            } else if (computerSelection === "rock") {
                // Increase PlayerScore
                playerScore = playerScore+1;

                // Increase Gamecount
                gameCounter   = gameCounter+1;

                document.getElementById("result").innerText = "[Played] \n\n" + " 🤩 You Win! \n\n 👋🏽 Paper beats ✊🏽 Rock \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
                     
            };
        }

        // Player has Scissors
        if (playerSelection === "scissors") {
            if (computerSelection === "rock") {

                 // Increase Computer Score
                computerScore = computerScore+1; 

                // Increase Gamecount
                gameCounter   = gameCounter+1;    

                document.getElementById("result").innerText = "[Played] \n\n" + " 😭 You loose! \n\n ✊🏽 Rock beats ✌🏽 Scissors \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
                    
            } else if (computerSelection === "paper") {
                
                // Increase PlayerScore
                playerScore = playerScore+1; 
                
                // Increase Gamecount
                gameCounter   = gameCounter+1;                
                
                document.getElementById("result").innerText = "[Played] \n\n" + " 🤩 You Win! \n\n ✌🏽 Scissors beats 👋🏽 Paper \n\n" + "You: " + playerSelection + "\n" + "Computer: " + computerSelection + "\n\n" + "[Scoreboard] \n\n" + "Rounds: " + gameCounter + "\n\nComputer: " + computerScore + "\n\nYou: " + playerScore;
                  
            };
        }       
        announceWinner();
        }

    
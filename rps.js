// Create a function called getComputerChoice that will randomly return Rock, Paper or Scissors

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Write a function that plays a single round of Rock Paper Scissor

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

}

//Write a function that calls for five times that keeps score and reports winner or loser at the end

function playGame (){                                                                       // Function Definition
    let playerScore = 0;                                                                    // Initize Scores
    let computerScore = 0;

    for (let i=0; i<5; i++) {                                                               // Loop for 5 rounds
        const playerSelection = prompt("Enter your choice (Rock, Paper or Scissors):");     // Prompting User for Input
        const computerSelection = getComputerChoice();                                      // Getting Computer's choice
        const result = playRound(playerSelection, computerSelection);                       // Playing a round

        console.log(result);                                                                // Logging the Result

        if (result.startsWith("You win!")) {                                                // Updating scores
            playerScore++;
        }   else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {                                                      // Determining Winner
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();                                                                                 // Function Invocation





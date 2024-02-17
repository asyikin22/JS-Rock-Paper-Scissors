# Rock Paper Scissors

This script sets up a simple Rock Paper Scissors game that can be played in the browser's console
It prompts the user for their choice and plays a rounf against the computer
It keeps track of scores for a total of 5 rounds and it will finally declares the winner based on the scores

# Step by step 
**Step 1**: The game is going to play against the computer, so we begin with a fuction called getComputerChoice() that will randomly return either 'Rock', 'Paper' or 'Scissors'
1. Write a Function Definition
2. Create an array that gives the option Rock, Paper, Scissors
3. Write a line that generates random selection
4. Write a 'Return Statement' that returns Rock/paper/scissors when it's called

**Step 2**: Write a function that plays a single round of the game that take two parameters 'playerSelection' and 'computerSelection' which will eventually evaluate the outcome based on choices made by computer and player
1. Define a function 'playRound' that takes two parameter
2. Convert the string to lower case to make sure the comparison between choices are not case sensitive
3. Write a function for game's logic that checks the outcomes of the round and define the conditions for player's victory using 'if, else if' statement
4. Write a ''Return Statement' to return result of the game round based on the outcome determined by the game's logic we have outlined
5. The return statement will returns a string thatthat indicates whether it's a tie game, player wins or player loses.

**Step 3**: Write a new function called playGame and use the previous function inside of this function to play five round game that keeps the score and reports winner and loser at the end of the game.
1. Define a function playGame. It does not take any parameter
2. Initialize variables that keeps track of the score
3. Write a loop that interates 5 times for 5 rounds of game
4. Prompt user to enter thier choice in each round inisde the loop.
5. with playRound function, a round of game will be played
6. Use 'if, else if' stamtement to update the scores. Either player's or computer's will be incremented
7. Use another 'if, else if' statmenet to determine the winner
8. Start the game by invoking playGame function.

function computerPlay() {
  let randomNumber;
  let computerChoice;
  // Generate random number between 0 and 2
  randomNumber = Math.floor(Math.random() * 3);

  // Set computer choice based on random number
  if (randomNumber == 0) {
    computerChoice = "Rock";
  } else if (randomNumber == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  // Return computer choice
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection == computerSelection) {
    console.log(`It's a tie game!`);
    result = null;
  } else if (
    // Here are the only cases in which the player can win
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    result = "PLAYER";
  } else {
    // Otherwise, the computer wins
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    result = "COMPUTER";
  }

  return result;
}

function game() {
  let playerChoice;
  let result;
  let playerScore = 0;
  let computerScore = 0;
  9;

  for (let i = 0; i < 5; i++) {
    // Get player choice
    playerChoice = prompt("Rock? Paper? or Scissors?");

    if (playerChoice !== null) {
      // Capitalize the playerChoice
      playerChoice = capitalize(playerChoice);
    } else {
      // Quit application avoiding the error when trying to capitalize null value
      return;
    }

    // Make sure player entry is spelled correctly
    while (
      playerChoice != "Rock" &&
      playerChoice != "Paper" &&
      playerChoice != "Scissors"
    ) {
      playerChoice = prompt(
        "There might be a typo in your choice. Make sure you type Rock, Paper or Scissors"
      );
    }

    // Get the winner of the current round
    result = playRound(playerChoice, computerPlay());

    // Add 1 to the round's winner score
    if (result == "COMPUTER") {
      computerScore += 1;
    } else if (result == "PLAYER") {
      playerScore += 1;
    }
  }

  displayWinner(playerScore, computerScore);
}

// HELPER FUNCTIONS

function capitalize(text) {
  // Get the first letter and capitalize it
  let firstLetter = text.slice(0, 1).toUpperCase();

  // Make the rest of the text lowercase
  let restOfText = text.slice(1).toLowerCase();

  // return the capitalized text
  return firstLetter + restOfText;
}

function displayWinner(playerScore, computerScore) {
  // Display result at the end of the game
  if (playerScore > computerScore) {
    console.log(
      `Your score: ${playerScore} - Computer Score: ${computerScore}`
    );
    console.log(`YOU WON!!!`);
  } else if (computerScore > playerScore) {
    console.log(
      `Your score: ${playerScore} - Computer Score: ${computerScore}`
    );
    console.log("YOU LOST");
  } else {
    console.log(
      `Your score: ${playerScore} - Computer Score: ${computerScore}`
    );
    console.log("TIE");
  }
}

game();

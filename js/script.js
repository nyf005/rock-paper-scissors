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

// Create a function to capitalize a given text
function capitalize(text) {
  // Get the first letter and capitalize it
  let firstLetter = text.slice(0, 1).toUpperCase();

  // Make the rest of the text lowercase
  let restOfText = text.slice(1).toLowerCase();

  // return the capitalized text
  return firstLetter + restOfText;
}

function playRound(playerSelection, computerSelection) {
  // Capitalize the playerSelection
  playerSelection = capitalize(playerSelection);
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
  let winner;
  let playerScore, computerScore;
  9;
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Rock? Paper? or Scissors?");
    console.log(playRound(playerChoice, computerPlay()));
  }
}

game();
// const playerSelection = "ROck";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

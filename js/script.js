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
    result = `It's a tie game!`;
  } else if (
    // Here are the only cases in which the player can win
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    // Otherwise, the computer wins
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  return result;
}

const playerSelection = "ROck";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

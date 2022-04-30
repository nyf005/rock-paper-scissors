function computerPlay() {
  let randomNumber;
  let computerChoice;
  // Generate random number between 0 and 2
  randomNumber = Math.floor(Math.random() * 3);

  // Set computer choice based on random number
  if (randomNumber == 0) {
    computerChoice = "ROCK";
  } else if (randomNumber == 1) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
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

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

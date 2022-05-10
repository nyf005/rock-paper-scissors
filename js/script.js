const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});
paperBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

const resultText = document.querySelector("#results p");
const userScore = document.querySelector(".user-score h1");
const compScore = document.querySelector(".computer-score h1");

function computerPlay() {
  let randomNumber;
  let computerChoice;

  randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    computerChoice = "Rock";
  } else if (randomNumber == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection == computerSelection) {
    resultText.textContent = `It's a tie game!`;
    result = null;
  } else if (
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    result = "PLAYER";
  } else {
    resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    result = "COMPUTER";
  }

  return result;
}

function game() {
  let playerChoice;
  let result;
  let playerScore = 0;
  let computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  //   playerChoice = prompt("Rock? Paper? or Scissors?");

  //   if (playerChoice !== null) {
  //     playerChoice = capitalize(playerChoice);
  //   } else {
  //     // Quit application avoiding the error when trying to capitalize null value
  //     return;
  //   }

  //   // Make sure player entry is spelled correctly
  //   while (
  //     playerChoice != "Rock" &&
  //     playerChoice != "Paper" &&
  //     playerChoice != "Scissors"
  //   ) {
  //     playerChoice = prompt(
  //       "There might be a typo in your choice. Make sure you type Rock, Paper or Scissors"
  //     );
  //   }

  //   result = playRound(playerChoice, computerPlay());

  //   if (result == "COMPUTER") {
  //     computerScore += 1;
  //   } else if (result == "PLAYER") {
  //     playerScore += 1;
  //   }
  // }

  displayWinner(playerScore, computerScore);
}

// HELPER FUNCTIONS

function capitalize(text) {
  let firstLetter = text.slice(0, 1).toUpperCase();
  let restOfText = text.slice(1).toLowerCase();
  return firstLetter + restOfText;
}

function displayWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    resultText.textContent = `YOU WON!!!`;
  } else if (computerScore > playerScore) {
    resultText.textContent = "YOU LOST";
  } else {
    resultText.textContent = "TIE";
  }

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

game();

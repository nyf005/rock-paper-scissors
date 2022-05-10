let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.querySelector("#results p");
const pScore = document.querySelector(".user-score h1");
const compScore = document.querySelector(".computer-score h1");

rockBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});
paperBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

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
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection == computerSelection) {
      resultText.textContent = `It's a tie game!`;
    } else if (
      (playerSelection == "Paper" && computerSelection == "Rock") ||
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
      resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      pScore.textContent = playerScore;
    } else {
      resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
      compScore.textContent = computerScore;
    }
  }

  if (playerScore == 5 || computerScore == 5) {
    displayWinner(playerScore, computerScore);
  }
}

// HELPER FUNCTIONS

function capitalize(text) {
  let firstLetter = text.slice(0, 1).toUpperCase();
  let restOfText = text.slice(1).toLowerCase();
  return firstLetter + restOfText;
}

function displayWinner(player, computer) {
  if (player > computer) {
    resultText.textContent = `YOU WON!!!`;
  } else {
    resultText.textContent = "YOU LOST";
  }

  pScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

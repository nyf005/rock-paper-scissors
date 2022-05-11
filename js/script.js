// Global variables for the game
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.querySelector("#results h1");
const pScore = document.querySelector("#player-box .score h1");
const compScore = document.querySelector("#computer-box .score h1");

const resultContainer = document.querySelector("#results div");

const restartBtn = document.createElement("button");

pScore.textContent = playerScore;
compScore.textContent = computerScore;

// Play round when user clicks on appropriate buttons
rockBtn.addEventListener("click", (e) => {
  rockBtn.classList.add("active");
  paperBtn.classList.remove("active");
  scissorsBtn.classList.remove("active");

  playRound(capitalize(e.target["id"]), computerPlay());
});
paperBtn.addEventListener("click", (e) => {
  rockBtn.classList.remove("active");
  paperBtn.classList.add("active");
  scissorsBtn.classList.remove("active");

  playRound(capitalize(e.target["id"]), computerPlay());
});

scissorsBtn.addEventListener("click", (e) => {
  rockBtn.classList.remove("active");
  paperBtn.classList.remove("active");
  scissorsBtn.classList.add("active");

  playRound(capitalize(e.target["id"]), computerPlay());
});

restartBtn.addEventListener("click", newGame);

function computerPlay() {
  let randomNumber;
  let computerChoice;
  const compChoice = document.querySelector("#computer-box a img");

  // While both players scores is under 5, make computer choose a random number
  if (playerScore < 5 && computerScore < 5) {
    randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
      computerChoice = "Rock";
      compChoice.setAttribute("src", "./img/rock.png");
    } else if (randomNumber == 1) {
      computerChoice = "Paper";
      compChoice.setAttribute("src", "./img/paper.png");
    } else {
      computerChoice = "Scissors";
      compChoice.setAttribute("src", "./img/scissors.png");
    }
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // Play a round while any of the player have reach 5
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection == computerSelection) {
      resultText.textContent = `It's a tie game!`;
    } else if (
      // Here are the only sets where player beats computer
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

  // Display result as soon as one player reaches 5
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
    resultText.textContent = `YOU WON !!!`;
  } else {
    resultText.textContent = "YOU LOST.";
  }
  createRestartBtn();
}

function createRestartBtn() {
  restartBtn.classList.add("restart");
  restartBtn.textContent = "Play again";

  resultContainer.appendChild(restartBtn);
}

function newGame() {
  // Reset global variables
  playerScore = 0;
  computerScore = 0;

  // Update the UI
  pScore.textContent = playerScore;
  compScore.textContent = computerScore;
  resultContainer.removeChild(restartBtn);
  resultText.textContent = "First player to reach 5 wins. Let's go !!!";
}

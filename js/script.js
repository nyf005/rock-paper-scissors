let playerScore = 0;
let computerScore = 0;
let endOfGame = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.querySelector("#results h1");
const pScore = document.querySelector("#player-box .score h1");
const compScore = document.querySelector("#computer-box .score h1");

const restartBtn = document.createElement("button");

newGame();

rockBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});
paperBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound(capitalize(e.target["id"]), computerPlay());
});

restartBtn.addEventListener("click", newGame);

function computerPlay() {
  let randomNumber;
  let computerChoice;
  const compChoice = document.querySelector("#computer-box a img");

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

  if ((playerScore == 5 || computerScore == 5) && !endOfGame) {
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
  endOfGame = true;
}

function createRestartBtn() {
  restartBtn.classList.add("restart");
  restartBtn.textContent = "Play again";

  const resultContainer = document.querySelector("#results .container");
  resultContainer.appendChild(restartBtn);
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  endOfGame = false;

  pScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

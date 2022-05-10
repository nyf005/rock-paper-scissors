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
    console.log(`It's a tie game!`);
    result = null;
  } else if (
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    result = "PLAYER";
  } else {
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

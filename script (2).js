let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["Stone", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = userChoice;
  document.getElementById("computer-choice").innerText = computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw 🤝";
  } else if (
    (userChoice === "Stone" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Stone") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win 🎉";
    userScore++;
  } else {
    result = "Computer Wins 😢";
    computerScore++;
  }

  document.getElementById("result").innerText = result;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
}

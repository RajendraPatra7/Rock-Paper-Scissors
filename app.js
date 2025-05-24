let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#usrScore");
const comScoreDisplay = document.querySelector("#compScore");

// to determine the users guess
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const usrGuess = choice.getAttribute("id");
    playgame(usrGuess);
  });
});

// to generate random computer choices
const genComChoices = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// draw game
const drawGame = () => {
  msg.innerText = "The game was draw , Play Again !";
  msg.style.backgroundColor = "#081b31";
};

// determine the winner and setting the scoreboard ~
const showWinner = (usrWin, usrChoice, comChoice) => {
  if (usrWin) {
    userScore++
    msg.innerText = `You Win ! Your ${usrChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
    userScoreDisplay.innerText = userScore;
  } else {
    compScore++
    msg.innerText = `You lose ! ${comChoice} beats your ${usrChoice}`;
    msg.style.backgroundColor = "red";
    comScoreDisplay.innerText = compScore;
  }
};

// main game function
const playgame = (usrChoice) => {
  // generated computer choices
  const comChoice = genComChoices();

  //setting the game mechanics
  if (usrChoice === comChoice) {
    // Draw game
    drawGame();
  } else {
    let usrWin = true;
    if (usrChoice === "rock") {
      // paper, scissors
      usrWin = comChoice === "paper" ? false : true;
    } else if (usrChoice === "paper") {
      // rock, scissors
      usrWin = comChoice === "rock" ? true : false;
    } else {
      // rock, paper
      usrWin = comChoice === "rock" ? false : true;
    }
    showWinner(usrWin, usrChoice, comChoice);
  }
};

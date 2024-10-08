let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let restartGameButton = document.getElementById("button");
const userInput = document.querySelectorAll(".userInput");
const select = ["Rock", "Paper", "Scissor"];
let move = 10;
let userScore = 0;
let compScore = 0;
function getStartGame() {
      //to restart the game
      restartGameButton.addEventListener("click", restartGame);

      function eventAdd() {
            userInput.forEach((btn) => {
                  btn.addEventListener("click", eventHendler);
            });
      }

      function eventHendler() {
            let moveleft = document.getElementById("moveLeft");
            move--;
            moveleft.innerText = move;

            playerChoice.innerText = `${this.value}`;

            let randselect = Math.floor(Math.random() * select.length);
            computerChoice.innerText = `${select[randselect]}`;
            checkWinner(playerChoice, computerChoice);

            if (move === 0) {
                  if (userScore != compScore) {
                        if (userScore > compScore) {
                              result.innerText = `Computer wins by ${
                                    userScore - compScore
                              } Rounds`;
                        }
                        if (userScore < compScore) {
                              result.innerText = `Computer wins by ${
                                    compScore - userScore
                              } Rounds`;
                        }
                  }
                  if (userScore == compScore) {
                        result.innerText = "it's A tie!";
                  }
                  userInput.forEach((btn) => {
                        btn.removeEventListener("click", eventHendler);
                  });
            } else {
                  restartGameButton.innerText = "Start Again";
            }
      }

      eventAdd();

      function checkWinner(player, computer) {
            let playerChoiceText = player.innerText.toLowerCase();
            let computerChoiceText = computer.innerText.toLowerCase();

            if (playerChoiceText == "rock") {
                  if (computerChoiceText == "scissor") {
                        result.innerText = "You Win!";
                        userScore++;
                  } else if (computerChoiceText == "paper") {
                        result.innerText = "You Lose!";
                        compScore++;
                  } else {
                        result.innerText = "It's a Tie!";
                  }
            } else if (playerChoiceText == "scissor") {
                  if (computerChoiceText == "rock") {
                        result.innerText = "You Lose!";
                        compScore++;
                  } else if (computerChoiceText == "paper") {
                        result.innerText = "You Win!";
                        userScore++;
                  } else {
                        result.innerText = "It's a Tie!";
                  }
            } else {
                  if (computerChoiceText == "rock") {
                        result.innerText = "You Lose!";
                        compScore++;
                  } else if (computerChoiceText == "scissor") {
                        result.innerText = "You Win!";
                        userScore++;
                  } else {
                        result.innerText = "It's a Tie!";
                  }
            }
      }
      function restartGame() {
            move = 10;
            moveLeft.innerText = move;
            result.innerText = "";
            playerChoice.innerText = "";
            computerChoice.innerText = "";
            restartGameButton.innerText = "Start";
            userInput.forEach((btn) => {
                  btn.addEventListener("click", eventHendler);
            });
      }
}

getStartGame();

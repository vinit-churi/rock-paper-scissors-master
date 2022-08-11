const rpsContainer = document.querySelector(".rps-container");
const rpsResult = document.querySelector(".rps-result");
const playAgain = document.querySelector(".play-again");
const reset = document.querySelector(".reset");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const yourChoiceImg = document.querySelector("#your-choice-img");
const opponentChoiceImg = document.querySelector("#opponent-choice-img");
const scissors = document.querySelector(".scissors");
const playerScore = document.getElementById("player-score");
const result = document.querySelector(".result");
// playerScore.innerText = 0;
// select random from the house
let score = 0;
const options = {
  1: {
    path: "./images/icon-rock.svg",
    class: "rock",
    loosesTo: "paper",
  },
  2: {
    path: "./images/icon-scissors.svg",
    class: "scissors",
    loosesTo: "rock",
  },
  3: {
    path: "./images/icon-paper.svg",
    class: "paper",
    loosesTo: "scissors",
  },
};

console.log(options["1"]["path"]);
function houseSelect(playerSelect) {
  // generate random number between 1 to 3
  let x = Math.floor(Math.random() * 3 + 1);
  yourChoiceImg.setAttribute("src", `./images/icon-${playerSelect}.svg`);
  opponentChoiceImg.setAttribute("src", options[x]["path"]);
  console.log(`your choice is ${playerSelect}`);
  console.log(
    `your opponent choice is ${options[x]["class"]} and it looses to ${options[x]["loosesTo"]}`
  );
  if (options[x]["loosesTo"] === playerSelect) {
    score += 1;
    playerScore.innerText = String(score);
    result.innerText = "you Win";
  } else if (options[x]["class"] === playerSelect) {
    result.innerText = "draw";
  } else {
    result.innerText = "you loose";
  }
}
console.log("is the js connected");
[scissors, paper, rock].forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log("is this working");
    // console.log(Array.from)
    // console.log(e.target.dataset.columns);
    // e.stopPropagation();
    // console.log(e.target);
    // console.log(e.target.dataset.type);
    console.log(e.currentTarget.dataset.type);
    houseSelect(e.currentTarget.dataset.type);
    rpsContainer.classList.toggle("hide");
    rpsResult.classList.toggle("hide");
  });
});

playAgain.addEventListener("click", (e) => {
  rpsContainer.classList.toggle("hide");
  rpsResult.classList.toggle("hide");
});
reset.addEventListener("click", (e) => {
  rpsContainer.classList.toggle("hide");
  rpsResult.classList.toggle("hide");
  playerScore.innerText = 0;
  score = 0;
});

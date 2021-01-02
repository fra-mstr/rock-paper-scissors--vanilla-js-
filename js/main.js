const selectionButtons = document.querySelectorAll(".card .emoji");

let userScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
userScore.innerHTML = 0;
computerScore.innerHTML = 0;

const scoreList = document.querySelector(".results-list");
// console.log(scoreList.firstElementChild);

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '&#9994;',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '&#9995;',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '&#9996;',
    beats: 'paper'
  },
]

selectionButtons.forEach(function(button, index){
  button.addEventListener("click", makeSelection)
})

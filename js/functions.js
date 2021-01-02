function makeSelection(e){
  let selectionName = e.target.classList[1];
  const playerChoice = SELECTIONS.find(selection => selection.name === selectionName);
  console.log("giocatore: ", playerChoice);
  const opponentChoice = computerSelection();
  console.log("computer: ", opponentChoice);

  const playerWinner = isWinner(playerChoice, opponentChoice);
  const computerWinner = isWinner(opponentChoice, playerChoice);
  console.log("ha vinto il giocatore?",playerWinner);
  console.log("ha vinto il computer?",computerWinner);

  addResultToGrid(playerChoice, opponentChoice, playerWinner, computerWinner);
}


function computerSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function isWinner (selection, opponentSelection){
  return selection.beats === opponentSelection.name
}

function addResultToGrid (playerResult, opponentResult, winPlayer, winComputer){
  const newScoreLine = document.createElement("div");
  newScoreLine.classList.add("result");
  scoreList.insertBefore(newScoreLine, scoreList.firstElementChild);

  const playerResultGrid = document.createElement("div");
  playerResultGrid.innerHTML = playerResult.emoji;
  const opponentResultGrid = document.createElement("div");
  opponentResultGrid.innerHTML = opponentResult.emoji;

  if (winPlayer){
    opponentResultGrid.classList.add("loser");
    userScore.innerHTML++;
  } else if (winComputer){
    playerResultGrid.classList.add("loser");
    computerScore.innerHTML++;
  } else {
    playerResultGrid.classList.add("loser");
    opponentResultGrid.classList.add("loser");
  }

  newScoreLine.appendChild(playerResultGrid);
  newScoreLine.appendChild(opponentResultGrid);
}

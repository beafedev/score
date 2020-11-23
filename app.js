const playerOne = {
  scoreBoard: document.querySelector('#playerOneScore'),
  score: 0,
  btn: document.querySelector('#playerOneBtn'),
  winMessage: document.querySelector('.p1'),
};

const playerTwo = {
  scoreBoard: document.querySelector('#playerTwoScore'),
  score: 0,
  btn: document.querySelector('#playerTwoBtn'),
  winMessage: document.querySelector('.p2'),
};

// select menu
const select = document.querySelector('select');

// Buttons
const resetBtn = document.querySelector('#resetBtn');

// Game Over
let gameOver = false;

// How many game to
let playTo = 5;

// ***add score function***
function addScore(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    // When Game reach the play to
    if (player.score === playTo) {
      gameOver = true;
      player.btn.disabled = true;
      opponent.btn.disabled = true;
      player.scoreBoard.style.color = 'green';
      opponent.scoreBoard.style.color = 'red';
      player.winMessage.classList.remove('hide');
    }
    player.scoreBoard.innerText = player.score;
  }
}

// ***reset game function***
function resetGame() {
  gameOver = false;
  for (let player of [playerOne, playerTwo]) {
    console.log(player);
    player.score = 0;
    player.scoreBoard.innerText = player.score;
    player.btn.disabled = false;
    player.scoreBoard.style.color = 'black';
    player.winMessage.classList.add('hide');
  }
}

//------------------ Events---------------------------
select.addEventListener('change', function (e) {
  playTo = parseFloat(e.target.value);
});

playerOne.btn.addEventListener('click', (e) => {
  addScore(playerOne, playerTwo);
});

playerTwo.btn.addEventListener('click', (e) => {
  addScore(playerTwo, playerOne);
});

resetBtn.addEventListener('click', (e) => {
  resetGame();
});

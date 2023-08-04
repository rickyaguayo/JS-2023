'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hiScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const guessFunc = function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    displayMessage('Please enter number!');

    // when player wins
  } else if (guess === number) {
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(number);

    if (score > hiScore) {
      hiScore = score;
      document.querySelector('.highscore').textContent = hiScore;
    }

    // when guess !== number
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over!');
      displayScore(0);
    }
  }
};

// reset function
const reset = function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  displayScore(20);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// check btn event handler
document.querySelector('.check').addEventListener('click', guessFunc);

// again btn event handler
document.querySelector('.again').addEventListener('click', reset);

'use strict';

let secreteNumber = Math.floor(Math.random() * 50) + 1;
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log('2', typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '💥 No Number';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#3CB371';
      document.querySelector('.number').style.width = '30rem';
      
      if (score > highscore) {
          highscore = score
          document.querySelector('.highscore').textContent = highscore
          
      }
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '	#FF6347';
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '	#FF6347';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 10;
  secreteNumber = Math.floor(Math.random() * 50) + 1;
  document.querySelector('.message').textContent = 'Start guessing.....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  document.querySelector('body').style.backgroundColor = '#222';
});

'use strict';

const initialScore = 20;
let secretNumber;
let score = initialScore;
let highscore = 0;
generateRandomNumber();

document.querySelector('.again').addEventListener('click', startAgain);
document.querySelector('.check').addEventListener('click', numberCheck);

function startAgain() {
    //restore guess and secretNumber
    generateRandomNumber();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


    //restore message and score
    displayMessage(' Start guessing...');
    score = initialScore;
    displayScore(score);


    //restore css  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

function numberCheck() {
    const guess = Number(document.querySelector('.guess').value);

    // when game is over - no tries are there
    if (score < 1) {
        displayMessage(' ❌  Game over! ❌');
        displayScore(0);
    }
    else {

        //when no input was added or th imput is not a number
        if (!guess) {
            displayMessage('🚫 No number added!');

            // when player wins the game
        } else if (guess === secretNumber) {
            displayMessage('🧐 Correct Number! 🧐');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            //when guess is wrong
        } else if (guess !== secretNumber) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            scoreUpdateMinus();
        }
    }
}

function scoreUpdateMinus() {
    score--;
    displayScore(score);
};

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
};

function generateRandomNumber() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
};

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}

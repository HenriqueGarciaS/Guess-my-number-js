'use strict';

let score = parseInt(document.querySelector('.score').textContent);
let number = Math.floor(Math.random() * 21);

function checkNumber(){
    let guessedNumber = parseInt(document.querySelector('.guess').value)
    if(guessedNumber === number){
        document.querySelector('.number').value = number;
        document.querySelector('.message').textContent = 'You guessed correctly';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = number
    }
    else if(guessedNumber < number){
        document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('.score').textContent = score
    }
    else {
        document.querySelector('.message').textContent = 'Too high';
        score--;
        document.querySelector('.score').textContent = score
    }
}

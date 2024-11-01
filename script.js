'use strict';

let score = parseInt(document.querySelector('.score').textContent);
let number = Math.floor(Math.random() * 21);

function checkNumber(){
    let wrongNumberMessage = '';
    let guessedNumber = parseInt(document.querySelector('.guess').value)
    if(guessedNumber === number){
        document.querySelector('.number').value = number;
        document.querySelector('.message').textContent = 'You guessed correctly';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = number
        document.body.style.backgroundColor = 'green';
        return 1;
    }
    else if(guessedNumber < number)
        wrongNumberMessage = 'Too low';
    else 
        wrongNumberMessage = 'Too high';
    document.querySelector('.message').textContent = wrongNumberMessage;
    score--;
    document.querySelector('.score').textContent = score
}

function playAgain(){
    document.querySelector('.number').value = 0;
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 100;
    document.body.style.backgroundColor = "#222";
    score = parseInt(document.querySelector('.score').textContent);
    number = Math.floor(Math.random() * 21);
}

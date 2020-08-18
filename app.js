// game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.getElementById('game'),
      
      minNum = document.querySelector('.min-num'),

      maxNum = document.querySelector('.max-num'),

      guessBtn = document.getElementById('guess-btn'),

      guessInput = document.getElementById('guess-input'),

      message = document.querySelector('.message');

// assigning UI min and max values

minNum.textContent = min;

maxNum.textContent = max;

// adding event listener to play again
game.addEventListener('mousedown', (e)=>{
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
// adding listener to button

guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){

        showMessage(`Enter a number between ${min} and ${max}`, 'red');

    }

    if(guess === winningNum){

        gameOver(true, `${guess} is correct, YOU HAVE WON!`);

        guessInput.disabled = true;

    }else {

        guessesLeft -= 1;

        if (guessesLeft === 0) {

            gameOver(false, `Game over, YOU HAVE LOST!`);

            guessInput.disabled = true;
            
        } else {

            showMessage(`${guess} is wrong, you have ${guessesLeft} guesses left `, 'red');
 
        }
        
    }

    guessInput.value = '';


});

// get random winning number

function getRandomNum(min, max){
    return Math.floor(Math.random()*((max - min) + 1));
}


function showMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won, msg){
    let color;

    won === true ? color = 'green' : color = 'red';

    guessInput.style.borderColor = color;

    message.style.color = color;

    showMessage(msg);

    // play again

    guessBtn.value = 'Play again';

    guessBtn.className += 'play-again';
}


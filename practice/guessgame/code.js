let random = (parseInt(Math.random()*100+1));

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startover = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

let prevguess = [];
let newGuess = 1;
let play = true;
const p = document.createElement('p');

//situation when game will start
if(play){
submit.addEventListener('click' , function(e){
    e.preventDefault();
  //taking value from user 
  const guess = parseInt(userInput.value);
  console.log(guess);
  validGuess(guess);
  
});
}
//function for guess the number
function validGuess(guess){
  if(isNaN(guess)){
    alert('please enter the right number')
  }
  else if(guess < 1){
    alert('enter the number greater than 1')
  }
  else if(guess >100){
    alert('enter the number less than 100')
  }
  else{
    prevguess.push(guess)
    //when user has it's 10th attempt
    if(newGuess === 11){
      displayMessage(`Game Over. Random number was ${random}`);
      displayGuess(guess);
      endgame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  } 
}

//check if our guess are right or wrong
function checkGuess(guess){
//when our guess === random no .
if(guess === random){
  displayMessage(`Correct Guess`);
  endgame();
} 
//if guess value is low 
else if(guess < random){
  displayMessage(`Guess slightly high value.`);
}
else if(guess > random){
  displayMessage(`Aree. Try to guess low value`);
}
}
//function for display guess
function displayGuess(guess){
userInput.value = '';
newGuess++;
remaining.innerHTML = `${12 - newGuess}`;
guessSlot.innerHTML += ` ${guess} `;
}

//function for display msg
function displayMessage(msg){
  lowOrHi.innerHTML = `<h2> ${msg} </h2>`;
}

//endgame
function endgame(){
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
startover.appendChild(p);
play = false;
newgame();
}
//newgame
function newgame(){
const newgame = document.querySelector('#newGame');
newgame.addEventListener( "click", function (e) {
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    newGuess = 1;
    prevguess = [];
    random = (parseInt(Math.random()*100+1));
    displayMessage('');
    startover.removeChild(p);
    play = true;
});
}









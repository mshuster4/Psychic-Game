
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9; 
var userChoices = [];

document.onkeyup = function(event) {

  var userGuess = event.key;

  var computerGuess = choices[Math.floor(Math.random() * choices.length)];

  if (choices.indexOf(userGuess) > -1){

    if (userGuess == computerGuess){
      wins++;
      guessesLeft = 9;
      userChoices = [];
    }

    else {
      guessesLeft--;
      userChoices.push(userGuess);

    }
    if (guessesLeft == 0){
      losses++; 
      guessesLeft = 9;
      userChoices = []; 
    }
  }
  else {
    alert("Pick a letter!");    
  }

  document.getElementById("wins-text").textContent = wins;
  document.getElementById("losses-text").textContent = losses;
  document.getElementById("guesses-text").textContent = guessesLeft;
  document.getElementById("guesses-so-far").textContent = userChoices;
  
}

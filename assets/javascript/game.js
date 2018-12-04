
var Choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9; 

document.onkeyup = function(event) {

  var userGuess = event.key;
  var userChoices = []; 
  userChoices.push(userGuess);

  var computerGuess = Choices[Math.floor(Math.random() * Choices.length)];

    if (userChoices == computerGuess){
      wins++;
    }
    else {
      guessesLeft--;
    }
    if (guessesLeft == 0){
      losses++; 
    }

  document.getElementById("wins-text").textContent = wins;
  document.getElementById("losses-text").textContent = losses;
  document.getElementById("guesses-text").textContent = guessesLeft;
  document.getElementById("guesses-so-far").textContent = userChoices;
  
}

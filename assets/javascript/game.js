//Document onkey event to listen for user input letter
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userGuesses = [ ];

var wins = 0;
var losses = 0;
var guesses = 9; 

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-text");
var userInputText = document.getElementById("user-input-text");

document.onkeyup = function(event) {

    var userGuesses = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    userInputText.textContent = userGuesses; 

  };


//With each input guess count -1


//When Guess Count == 0 

//If a variable in the user's array matches the computer's letter
//Wins + 1

//If none of the variables in the user's array matches the computer's letter 
//Losses +1

//Game resets
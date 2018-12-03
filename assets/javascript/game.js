//Document onkey event to listen for user input letter
document.onkeyup = function(event) {
    event.key;
    function writeGuesses() {
        var userInput = event.key;
        document.getElementById("userGuesses").innerhtml = userInput;
    }
}
//List user input under "your guesses" (array)

//With each input guess count -1

//Computer selects a random letter

//When Guess Count == 0 

//If a variable in the user's array matches the computer's letter
//Wins + 1

//If none of the variables in the user's array matches the computer's letter 
//Losses +1

//Game resets
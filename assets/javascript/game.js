// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessleft = 12;
var yourguesssofar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessleftText = document.getElementById("Guessleft-text");
var yourguesssofarText = document.getElementById("yourguesssofar-text");

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    yourguesssofar.push(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Reworked our code from last step to use "else if" instead of lots of if statements.

    //This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
        (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
        (userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
        (userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
        (userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
        (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
        (userGuess === "y") || (userGuess === "z")
    ) {

        if ((userGuess === computerGuess)
        ) {
            wins++;
            guessleft = 11;
            //reset();
        } else {
            losses++;
            guessleft--;
        }
        if (guessleft === 0) {
            losses++;
            guessleft = 12;
            prompt("No more guess left. Want to play again?");
            reset();
        }
        function reset() {
            guessleft = 12;
            losses = 0;
            wins = 0;
            yourguesssofar = [];

        }
        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/maxTries.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessleftText.textContent = "Guess left: " + guessleft;
        yourguesssofarText.textContent = "Your guess of letters so far : " + yourguesssofar;
    }

};

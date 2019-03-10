// Global variables

// Array of Star Wars words
var words = ["tatooine", "chewbacca", "lando", "ewoks", "empire", "hoth", "crosssaber", "rebels", "endor", "obiwan"];
// Choose word randomly function
var getRandomWord = Math.floor(Math.random() * words.length);
// Picks word from random word function
var chosenWord = words[getRandomWord];
// Array for right guesses
var rightGuesses = [];
// Array for wrong guesses
var wrongGuesses = [];
// Array for underscores
var underScores = [];


// Make sure words.length pulls up right number (10)
console.log(words.length)

// Function that creates underscores based on length of random word
function generateUnderscore () {
    // For Loop
    var i;
    for (i = 0; i < getRandomWord.length; i++) { 
    underScores.push("_");
    }
    return underScores;
}

// Function to set up ontouch for user to guess words
document.onkeyup = function(event) {
    // Gets users key stroke
    var keyword = String.fromCharCode(event.gitkeyCode);
    // Compare key code to randomly chosen word
    if(getRandomWord.indexOf(keyword) > -1) {
        // Pushes to right guesses array
        rightGuesses.push(keyword);
        // Replaces underscore with right letter
        underScores[getRandomWord.indexOf(keyword)] = keyword;
        // Checks to see if user word matches random word
        if(underscores.join("") == getRandomWord) {
            console.log(underscores);
            // alert for now
            alert("You Win!");
        }
    }

    else {
        // Pushes to wrong guesses array
        wrongGuesses.push(keyword);
        // testing 
        console.log(wrongGuesses);
    }
     
    };

// Prints underscores to HTML
document.getElementsByClassName("underscores").innerHTML = "event";

// If letter is in word, add to underscore. Else, mark as 1 guess

// Update number of guess remaining




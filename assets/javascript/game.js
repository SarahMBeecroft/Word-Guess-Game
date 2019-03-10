// All variables
// Array of Star Wars words
var words = ["tatooine", "poe dameron", "lando calrissian", "millennium falcon", "jyn erso", "battle droid", "cross saber", "rebel alliance", "endor", "tie interceptor"];
// Array for right guesses
var rightGuesses = [];
// Array for wrong guesses
var wrongGuesses = [];
// Array for underscores
var underscores = [];



// Generates random word between 0 and length of array
var randomWord = words[Math.floor(Math.random() * words.length)];

// Tests random word
console.log(randomWord);

// Make sure words.length pulls up right number (10)
console.log(words.length)

// Picks random word from words array  
var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

// Function that creates underscores based on length of random word
function generateUnderscore () {
    // For Loop
    var i;
    for (i = 0; i < randomWord.length; i++) { 
    underscores.push("_");
    }
    return underscores;
}

// Test generateUnderscore function
console.log(generateUnderscore());

// Function to set up ontouch for user to guess words
document.onkeyup = function(event) {
    // Gets users key stroke
    var keyword = String.fromCharCode(event.keyCode);
    // Compare key code to randomly chosen word
    if(randomWord.indexOf(keyword) > -1) {
        // Pushes to right guesses array
        rightGuesses.push(keyword);
        console.log(rightGuesses); 
    }

    else {
        // Pushes to wrong guesses array
        wrongGuesses.push(keyword);
        console.log(wrongGuesses);
    }
     
    };

// Prints underscores to HTML
document.getElementsByClassName("underscores").innerHTML = "event";


// If letter is in word, add to underscore. Else, mark as 1 guess

// Update number of guess remaining




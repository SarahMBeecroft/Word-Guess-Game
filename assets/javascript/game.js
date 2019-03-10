// Array of Star Wars words
var words = ["tatooine", "poe dameron", "lando calrissian", "millennium falcon", "sheev palpatine", "battle droid", "cross saber", "rebel alliance", "endor", "tie interceptor"];

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

// Create variables for underscores
var underscores = [];

// Function that creates underscores based on length of random word
function generateUnderscore () {
    // For Loop
    var i;
    for (i = 0; i < randomWord.length; i++) { 
    underscores.push("_")
}
}

// Set up ontouch for user to guess

// If letter is in word, add to underscore. Else, mark as 1 guess

// Update number of guess remaining




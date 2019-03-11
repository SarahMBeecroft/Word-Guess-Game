//Global variables

// Array of Star Wars words
var words = ["tatooine", "chewbacca", "lando", "ewoks", "empire", "hoth", "crosssaber", "rebels", "endor", "obiwan"];
// Sets max number of guesses
const maxGuess = 10
// Resets game
var pauseGame = false
// Letters user has guessed
var guessedLetters = [];
// Word user is guessing
var guessingWord = [];
// Compares user's guess to chosen word
var wordToMatch
// Shows number of user guesses
var numGuess
// Shows wins
var wins = 0

//============================================================================

// Game code

// Function to reset game
resetGame()

// Function to set up onkeypress for user to guess letters
document.onkeypress = function (event) {
    // Make sure key pressed is alpha character
    if (isAlpha(event.key) && !pauseGame) {
        // Sets letters to uppercase for display
        checkForLetter(event.key.toUpperCase())
    }
}

// Checks to see if letter guessed is in guessing word
function checkForLetter(letter) {
    var foundLetter = false

// Searches current string for letter guessed
    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter
            foundLetter = true
            // If guessing word matches random word
            if (guessingWord.join("") === wordToMatch) {
                // Adds +1 to wins
                wins++
                pauseGame = true
                updateDisplay()
                // Resets game after 5 seconds
                setTimeout(resetGame, 5000)
            }
        }
    }

    if (!foundLetter) {
        // Checks to see if inccorrect guess is already on the list
        if (!guessedLetters.includes(letter)) {
            // Add incorrect letter to guessed letter list
            guessedLetters.push(letter)
            // Decrease the number of remaining guesses
            numGuess--
        }
        if (numGuess === 0) {
            // Display word before resetting game
            guessingWord = wordToMatch.split()
            pauseGame = true
            setTimeout(resetGame, 5000)
        }
    }

    updateDisplay()

}

// Makes sure letter pressed is a-z (lower case or caps)
function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}

// Resets game once user reaches max guesses
function resetGame() {
    numGuess = maxGuess
    pauseGame = false

// Get a new word
wordToMatch = words[Math.floor(Math.random() * words.length)].toUpperCase()


// Reset word arrays
guessedLetters = []
guessingWord = []

// Reset the guessed word
    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        // Put a space instead of an underscore between multi word "words"
        if (wordToMatch[i] === " ") {
            guessingWord.push(" ")
        } else {
            guessingWord.push("_")
        }
    }

// Function to update the DOM
    updateDisplay()
}

// Updates HTML to show wins, curent word, remaining guesses, and letters already guessed
function updateDisplay() {
    document.getElementById("totalWins").innerHTML = wins
    document.getElementById("currentWord").innerHTML = guessingWord.join(" ")
    document.getElementById("remainingGuesses").innerHTML= numGuess
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ")
}

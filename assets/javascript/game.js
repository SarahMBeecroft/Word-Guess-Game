//Global variables

// Array of Star Wars words
var words = ["tatooine", "chewbacca", "lando", "ewoks", "empire", "hoth", "lightsaber", "rebels", "endor", "obiwan"];
// Sets max number of guesses
var maxGuess = 10
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
    // Audio for guesses
    var correctSound = document.createElement("audio")
    var incorrectSound = document.createElement("audio")
    var winSound = document.createElement("audio")
    var loseSound = document.createElement("audio")
    correctSound.setAttribute("src", "assets/audio/coolsaber.mp3")
    incorrectSound.setAttribute("src", "assets/audio/laserturret.mp3")
    winSound.setAttribute("src", "assets/audio/forcestrong.mp3")
    loseSound.setAttribute("src", "assets/audio/yodafail.mp3")


    // Searches current string for letter guessed
    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter
            foundLetter = true
            // Plays sound for correct guess
            correctSound.play()
            // If guessing word matches random word
            if (guessingWord.join("") === wordToMatch) {
                // Adds +1 to wins
                wins++
                // Plays winning audio
                winSound.play()
                pauseGame = true
                updateDisplay()
                // Resets game after 5 seconds
                setTimeout(resetGame, 5000)
            }
        }
    }
    // If letter is not in chosen word
    if (!foundLetter) {
        // Plays sound for incorrect guess
        incorrectSound.play()
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
            // Plays losing sound
            loseSound.play()
            pauseGame = true
            setTimeout(resetGame, 5000)
        }
    }

    updateDisplay()

}




// Images for guess
var tatooineImage = document.createElement("image")
tatooineImage.setAttribute("src", "assets/images/tatooine.jpg")




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
    document.getElementById("remainingGuesses").innerHTML = numGuess
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ")
}

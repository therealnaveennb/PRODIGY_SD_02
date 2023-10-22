let randomNumber, attempts;

function startNewGame() {
    // Initialize a new game
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('message').textContent = 'New Game ';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value= "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('submitGuess').disabled = true;
       
        if (confirm(`congratulations! You guessed the number ${randomNumber} in ${attempts} attempts. `)) {
            startNewGame.call();
          } else {
            window.alert("Thank YOU!");
          }

    } else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = 'Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Try a lower number.';
    }
}

// Start a new game when the page loads
window.onload = startNewGame;

// Add event listeners for the buttons
document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('newGame').addEventListener('click', startNewGame);

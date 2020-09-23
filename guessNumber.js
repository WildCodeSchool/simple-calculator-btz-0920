function guessNumber(numberToGuess, playerName = prompt("Your name please")) {
  const playerNumber = +prompt("Give me a number between 1 and 100");

  if (playerNumber === numberToGuess) {
    console.log(` ${playerName} wins. Youhou, this is right ! 🎉🎉🎉`);
  }

  if (numberToGuess > playerNumber) {
    console.log("It is more");
    guessNumber(numberToGuess, playerName);
  } else if (numberToGuess < playerNumber) {
    console.log("It is less");
    guessNumber(numberToGuess, playerName);
  }
}

let inputElement = document.getElementById("inputElement");
let gameResultElement = document.getElementById("gameResult");

let randomNumber = Math.ceil(Math.random() * 100);

function checkOff() {
  let guessedNumber = parseInt(inputElement.value);

  if (guessedNumber === randomNumber) {
    gameResultElement.textContent =
      "Congratulations! You guessed the correct number!";
    gameResultElement.style.backgroundColor = "green";
    gameResultElement.style.color = "white";
  } else if (guessedNumber > randomNumber) {
    gameResultElement.textContent = "Too High! Try Again!";
    gameResultElement.style.backgroundColor = "yellowgreen";
    gameResultElement.style.color = "black";
  } else if (guessedNumber < randomNumber) {
    gameResultElement.textContent = "Too Low! Try Again!";
    gameResultElement.style.backgroundColor = "orange";
    gameResultElement.style.color = "black";
  } else {
    gameResultElement.textContent = "Please Provide A Valid Input";
    gameResultElement.style.backgroundColor = "red";
    gameResultElement.style.color = "black";
  }
}

"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//method for the Check score button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    setMessage("Please enter a number to start guessing.");
  }
  //Guess is out of range
  else if (guess > 20 || guess < 1) {
    setMessage("Please enter a number between 1 and 20.");
  }
  //Game is won
  else if (guess === secretNumber) {
    setMessage("Correct Number!");
    setNumber(secretNumber);
    setCSS("#60b347", "30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(
        guess > secretNumber ? "Guess is too high." : "Guess is too low."
      );
      score--;
      setScore(score);
    } else {
      setMessage("You lost the game.");
      setScore(0);
    }
  }
});

//method for again button to reset the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setMessage("Start guessing...");
  setScore(score);
  setCSS("#222", "15rem");
  setNumber("?");
  document.querySelector(".guess").value = "";
});

//method to set the output message
const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//method to show the number
const setNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

//method to set the score
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

//method to set the CSS
const setCSS = function (background, number) {
  document.querySelector("body").style.backgroundColor = background;
  document.querySelector(".number").style.width = number;
};

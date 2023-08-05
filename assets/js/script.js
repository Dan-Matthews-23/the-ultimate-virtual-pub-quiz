"use strict";

// Hide 'quiz-section' on index.html

const showQuiz = document.getElementById("showQuizBtn");
const showInst = document.getElementById("showInstBtn");
const showHall = document.getElementById("showHallBtn");
const returnHome = document.getElementById("return-btn");

// Difficulty Buttons
//const selectEasy = document.getElementById("easy");
//const selectMedium = document.getElementById("medium");
///const selectHard = document.getElementById("hard");

// EVent Listeners, call functions, show sections
showQuiz.addEventListener("click", showQuizSection);
showInst.addEventListener("click", showInstructionsSection);
showHall.addEventListener("click", showHallofFameSection);
returnHome.addEventListener("click", returnHomeSection);
//selectEasy.addEventListener("click", chooseEasy);
//selectMedium.addEventListener("click", chooseMedium);
//selectHard.addEventListener("click", chooseHard);
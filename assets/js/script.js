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

function showQuizSection() {
  document.getElementById("quiz-section").classList.remove("hidden");
  //document.getElementById("difficulty-section").classList.remove("hidden");
  document.getElementById("instructions-section").classList.add("hidden");
  document.getElementById("hall-of-fame-section").classList.add("hidden");
  document.getElementById("return-section").classList.remove("hidden");
  document.getElementById("user-selection-section").classList.add("hidden");
}

function showInstructionsSection() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("instructions-section").classList.remove("hidden");
    document.getElementById("hall-of-fame-section").classList.add("hidden");
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
  }
  
  function showHallofFameSection() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("instructions-section").classList.add("hidden");
    document.getElementById("hall-of-fame-section").classList.remove("hidden");
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
  }
  
  function returnHomeSection() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("instructions-section").classList.add("hidden");
    document.getElementById("hall-of-fame-section").classList.add("hidden");
    document.getElementById("return-section").classList.add("hidden");
    document.getElementById("user-selection-section").classList.remove("hidden");
  }

  
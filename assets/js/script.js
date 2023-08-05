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

  // My Question Array
  const questionArray = 
  [
  { 
    ID: 0,
    question: `Which is the biggest planet in our solar system?`,
    correct_answer: `Jupiter`,
    incorrect_answer: [`Venus`, `Neptune`, `Mercury`]
     
},

{ 
    ID: 1,
    question: `Which is the smallest planet in our solar system?`,
    correct_answer: `Mercury`,
    incorrect_answer: [`Earth`, `Neptune`, `Mars`]
     
},

{ 
    ID: 2,
    question: `Which is the hottest planet in our solar system?`,
    correct_answer: `Venus`,
    incorrect_answer: [`Earth`, `Mercury`, `Mars`]
     
},

{ 
    ID: 3,
    question: `Which is the coldest planet in our solar system?`,
    correct_answer: `Uranus`,
    incorrect_answer: [`Earth`, `Mercury`, `Mars`]
     
},

  ];
 
  //Global Variables
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", retriveNextQuestion);

// URL for API
const difficultyEasy = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";


let connect = {};
let score = 0;
let id = 0;


// Function to connect to API. 
//-----This section of code was based on a template from Chris Minnick, from JavaScript ALL-IN-ONE for dummies, although I have written the code myself. See README for more information------
async function connectAPI(apiURL) {
  //try {
    const connection = await fetch(apiURL);
    if (connection.status >= 200 && connection.status <= 299) {
      connect = await connection.json();
      //return connection.json();
      getQuestionArray();
      getAnswerArray();
    } else {
      //throw Error("There was an error when trying to connect. Please try again later");
      window.location.assign("500.html");
    }
  }
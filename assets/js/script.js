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
const difficultyEasy = "https://opentdb.com/api.php?amount=20&type=multiple";


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

 // } catch (error) {
    //console.log(error);
  //}
  //console.log(connect.results);
//}
//----END OF CODE SNIPPET---------------------------------------------------------------------------------------------------------

  // Display the question in index.html in the part with an ID of 'question'. Do this based on where we are in the array (question number)
function getQuestionArray() {
    const question = (document.getElementById("question").innerHTML = connect.results[id].question);
    let displayScore = (document.getElementById("score").innerHTML = `Score: ${score}`);
  }


  

  
  // Get the list of answers to the question we just called. 
  
  function getAnswerArray() {
    const possibleAnswers = document.querySelectorAll(".answer");
    const answerCorrect = connect.results[id].correct_answer;
    const answerIncorrect = connect.results[id].incorrect_answers;
    const newAnswerDataset = answerIncorrect.concat(answerCorrect);

    shuffle(newAnswerDataset);
    
    for (let i = 0; i < possibleAnswers.length; i++) {
      possibleAnswers[i].innerHTML = newAnswerDataset[i];
      possibleAnswers[i].style.background = "";
      //possibleAnswers[i].classList.add("answerReset");
      possibleAnswers[i].disabled = false;
      possibleAnswers[i].removeEventListener("click", confirmAnswer);
        possibleAnswers[i].addEventListener("click", confirmAnswer);
    }
    
  }
  
  // Function to shuffle all answers in the array
//------This section of code was taken from Free Code Camp and slightly modified to suit the purposes of this function-----------------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //---END OF CODE SNIPPET----------

  function confirmAnswer() {
    const selectedAnswer = this.innerHTML;
    const answerCorrect = connect.results[id].correct_answer;
    
    if (selectedAnswer === answerCorrect) {
      this.style.background = "green";
      //this.classList.add("correct-answer");
      document.getElementById("next").classList.remove("hidden");
      const possibleAnswers = document.querySelectorAll(".answer");
      for (let j = 0; j < possibleAnswers.length; j++) {
        possibleAnswers[j].disabled = true;
        
      }
      calculateScore(score);
      
    
    } else {

      
      this.style.background = "red";
      /*
      document.getElementById("next").classList.remove("hidden");
      for (let j = 0; j < possibleAnswers.length; j++) {
      console.log(answerCorrect);
      possibleAnswers[j].disabled = true;
      this.classList.remove("incorrect-answer");
       
      }*/

      // Display the background color of the correct answer when user selects wrong answer
    const correctAnswerButtons = document.querySelectorAll('.answer');
    for (let j = 0; j < correctAnswerButtons.length; j++) {
      if (correctAnswerButtons[j].innerHTML === answerCorrect) {
        correctAnswerButtons[j].style.background = 'orange';
        document.getElementById("next").classList.remove("hidden");
        console.log(answerCorrect);
        break;
      }
    }
    const answerButtons = document.querySelectorAll('.answer');
    for (let j = 0; j < answerButtons.length; j++) {
      answerButtons[j].disabled = true;
    }
  



    } 


  }

  function retriveNextQuestion() {
    id++;
    
    if (id >= connect.results.length) {
      alert(`Quiz complete! Your score: ${score}/${connect.results.length}`);
      return;
    }
    getQuestionArray();
    document.getElementById("next").classList.add("hidden");
    getAnswerArray();
   // this.classList.remove("correct-answer");
   // this.classList.remove("incorrect-answer");
  }

  function calculateScore() {
    score++;
    //let displayScore = (document.getElementById("score").innerHTML = `Score: ${score}`);
    let currentScore = document.querySelectorAll(".score");
    let scoreCalc = currentScore.length - score;
    for (let i = currentScore.length - 1; i >= 0; i--) {
        let playerScore = currentScore[i];
        if (i === scoreCalc) {
            break;
        }
    }
    
}
  



  connectAPI(difficultyEasy);
  
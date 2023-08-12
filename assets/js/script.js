"use strict";

// Hide 'quiz-section' on index.html







//selectEasy.addEventListener("click", chooseEasy);
//selectMedium.addEventListener("click", chooseMedium);
//selectHard.addEventListener("click", chooseHard);



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
 
/*const highScoresArray = 

  { 
    playerID: [0, 1, 2, 3, 4],
    playerName: [`Morbid Honeybun`, `Doesthislookinfected`, `Gonk54`, `Youdaddy`, `Shamaladingdong`],
    playerHighScore: [500, 400, 300, 200, 100]
  };*/


  




  //Global Variables
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", retriveNextQuestion);

// URL for API
//const difficultyEasy = "https://opentdb.com/api.php?amount=20&type=multiple";
//const difficultyEasy = "https://opentdb.com/api.php?amount=2&type=multiple";
const difficultyEasy = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";

//const enterHighScoreBtn = document.getElementById("enter-high-score");
//enterHighScoreBtn.addEventListener('click', passNickname);

let connect = {};
let score = 0;
let id = 0;
//let username;



const showQuiz = document.getElementById("showQuizBtn");
const showInst = document.getElementById("showInstBtn");
const showHall = document.getElementById("showHallBtn");
const returnHome = document.getElementById("return-btn");
const enterUsernameBtn = document.getElementById("enter-username");
const viewHighScoresPostGame = document.getElementById("view-high-scores");

addEventListener('click', function (event) 
{
  if( event.target === enterUsernameBtn) 
  {
    
    document.getElementById("user-selection-section").classList.remove("hidden");
    document.getElementById("username-section").classList.add("hidden");

  } else if (event.target === showQuiz) 
  {
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");

  } else if (event.target === showInst) 
  {
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("instructions-section").classList.remove("hidden");

  } else if (event.target === showHall) 
  {
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("hall-of-fame-section").classList.remove("hidden");

  } else if (event.target === returnHome) 
  {
      window.location.assign("index.html");
  } else if  (event.target === viewHighScoresPostGame) 
  {
    
    createHighScores();
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("hall-of-fame-section").classList.remove("hidden");
    document.getElementById("game-over-modal").classList.add("hidden");
    
  }

})
// Function to connect to API. 
//---This section of code was based on a template from Chris Minnick, from JavaScript ALL-IN-ONE for dummies. See README for more information---//
async function connectAPI(apiURL) {
    const connection = await fetch(apiURL);
    if (connection.status >= 200 && connection.status <= 299) {
      connect = await connection.json();
      getQuestionArray();
      getAnswerArray();
       } else {
            window.location.assign("500.html");
    }
  }
//----END OF CODE SNIPPET-----//

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
//------This section of code was taken from Free Code Camp and slightly modified to suit the purposes of this function----//
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //---END OF CODE SNIPPET------//



  function confirmAnswer() {
    const selectedAnswer = this.innerHTML;
    const answerCorrect = connect.results[id].correct_answer;
    
    if (selectedAnswer === answerCorrect) {
      this.style.background = "green";
      //this.classList.add("correct-answer");
      document.getElementById("next").classList.remove("hidden");
      const possibleAnswers = document.querySelectorAll(".answer");
      for (let a = 0; a < possibleAnswers.length; a++) {
        possibleAnswers[a].disabled = true;
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
    for (let a = 0; a < correctAnswerButtons.length; a++) {
      if (correctAnswerButtons[a].innerHTML === answerCorrect) {
        correctAnswerButtons[a].style.background = 'orange';
        document.getElementById("next").classList.remove("hidden");
        console.log(answerCorrect);
        break;
      }
    }
    const answerButtons = document.querySelectorAll('.answer');
    for (let a = 0; a < answerButtons.length; a++) {
      answerButtons[a].disabled = true;
    }
      } 
 }


function createHighScores() 
  {
    console.log(score);
    const username = (document.getElementById("usernameValue").value);
    const playerID = Math.floor(Math.random() * (9999 - 1 + 1) ) + 1;
    const existingScores = JSON.parse(localStorage.getItem('existingScores')) || [];
    const setHighScoreArray = 
    {
      playerID: [playerID],
      playerName: [username],
      playerHighScore: [score]      
    }
    
    existingScores.push(setHighScoreArray);
    
  existingScores.sort((a, b) => b.score - a.score);
  existingScores.splice(5);

  localStorage.setItem('existingScores', JSON.stringify(existingScores));
  const inDocumentHighScores = document.getElementById("high-score-table");
  inDocumentHighScores.innerHTML = 
  existingScores.map(existingScores => {
  return `<ol>${existingScores.playerName}</td><td class="highscoreitem">${existingScores.score}</ol>`; }).join("");
  
  
//localStorage.clear();
  console.log(existingScores); // This is the new array
        


  
  }
  

  function retriveNextQuestion() {
    id++;
    
    if (id >= connect.results.length) {
      document.getElementById("game-over-modal").classList.remove("hidden");
      document.getElementById("quiz-section").classList.add("hidden");
      
      //alert(`Quiz complete! Your score: ${score}/${connect.results.length}`);
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
  
  
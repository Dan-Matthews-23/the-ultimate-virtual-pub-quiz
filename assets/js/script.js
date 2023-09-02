// URL for API
const apiURL = "https://opentdb.com/api.php?amount=100&type=multiple";

//---Set default variable values---//
let connect = {};
let score = 0;
let id = 0;
let qID = 1;
const scoreCounter = document.getElementById("score");
const questionCounter = document.getElementById("question-number");
//---End of default variables---//

//---Set the values of each button preperation for the Event Listeners---//
const showQuiz = document.getElementById("showQuizBtn");
const showInst = document.getElementById("showInstBtn");
const showHall = document.getElementById("showHallBtn");
const returnHome = document.getElementById("return-btn");
const returnHomeNoAlert = document.getElementById("return-btn-no-alert");
const enterUsernameBtn = document.getElementById("enter-username");
const viewHighScoresPostGame = document.getElementById("post-game-scores");
//const reset = document.getElementById("reset");
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", retriveNextQuestion);






//---Event Listeners---//
addEventListener('click', function (event) {
   if (event.target === showQuiz) {
      document.getElementById("return-section").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("username-section").classList.remove("hidden");
   } else if (event.target === enterUsernameBtn) {
      checkRoomCode();
   } else if (event.target === showInst) {
      document.getElementById("return-no-alert").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("instructions-section").classList.remove("hidden");
   } else if (event.target === showHall) {
      document.getElementById("return-no-alert").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("hall-of-fame-section").classList.remove("hidden");
      displayHighScore();
   
  // } else if (event.target === connectErrButton) {
     // window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html");

   } else if (event.target === returnHome) {
      confirmReturn();


   } else if (event.target === returnHomeNoAlert) {
      window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html");
   } else if (event.target === viewHighScoresPostGame) {
      addHighScore();
      document.getElementById("return-no-alert").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("hall-of-fame-section").classList.remove("hidden");
      document.getElementById("game-over-modal").classList.add("hidden");
      displayHighScore();
   }
});
//---End of Event Listeners---//

// ---Function to connect to API --- //
//---This section of code was based on a template from Chris Minnick, from JavaScript ALL-IN-ONE for dummies. See README for more information---//
async function connectAPI(apiURL) {
   const connection = await fetch(apiURL);
   if (connection.status >= 200 && connection.status <= 299) {
      connect = await connection.json();
      getQuestionArray();
         } else {
      window.location.assign("500.html");
   }
}
//----End of code snippet-----//
//----End of connect to API --- //

// ---Data validation for Username--- //
function checkUsername() {
   const username = (document.getElementById("usernameValue").value);
   if (username.length === 0) {
      alert("Please enter a username");
   } else if (username.length > 0 && username.length < 3) {
      alert("Please enter a username with more than 3 characters");
   } else if (username.length > 10) {
      alert("Please enter a username with no more than 10 characters");
   } else {
      document.getElementById("quiz-section").classList.remove("hidden");
      document.getElementById("return-section").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("username-section").classList.add("hidden");
   }
}
//----End of username validation --- //

// ---Data validation for Room Code--- //
function checkRoomCode() {
   const roomCode = document.getElementById("room-code-value").value;
   if (roomCode < 1 || roomCode === "" || isNaN(roomCode)) {
      alert("Please enter a valid room code");
   } else {
      checkUsername();
   }
}
//----End of Room Code validation --- //

// ---Alert Box on clicking Return to Main Menu--- //
function confirmReturn() {
   const ConfRet = confirm("Are you sure you want to return? You will lose all progress");
   if (ConfRet == true) {
      window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html");
   }
}
// ---End of Alert Box function --- //

//---Set the default elements which will then be replaced by variables---//
function getQuestionArray() {
   const question = (document.getElementById("question").innerHTML = connect.results[id].question);
   const displayScore = (document.getElementById("score").innerHTML = `Score: ${score}`);
   const setRawQuestionNumber = (document.getElementById("question-number").innerHTML = `Q: ${qID}`);
   getAnswerArray(question, displayScore, setRawQuestionNumber);
}
//---End of default setting---//

//---Function to call the next question, or end the game if reached the question limit---//
function retriveNextQuestion() {
   id++;
   if (id >= connect.results.length) {
      document.getElementById("game-over-modal").classList.remove("hidden");
      document.getElementById("return-section").classList.add("hidden");
      //document.getElementById("return-section-no-alert").classList.remove("hidden");

      const finalScore = document.getElementById('final-score');
      finalScore.innerHTML = (`<h2>Final score: ${score}</h2>`);
      document.getElementById("quiz-section").classList.add("hidden");
      return;
   }
   increaseQuestionNumber();
   getQuestionArray();
   document.getElementById("next").classList.add("hidden");
   getAnswerArray();
}
//---End of calling next question function---//

//---Function to get the array of answers---//
function getAnswerArray() {
   const possibleAnswers = document.querySelectorAll(".answer");
   const answerCorrect = connect.results[id].correct_answer;
   const answerIncorrect = connect.results[id].incorrect_answers;
   const newAnswerDataset = answerIncorrect.concat(answerCorrect);
   shuffle(newAnswerDataset);
   for (let i = 0; i < possibleAnswers.length; i++) {
      possibleAnswers[i].innerHTML = newAnswerDataset[i];
      possibleAnswers[i].style.background = "";
      possibleAnswers[i].disabled = false;
      possibleAnswers[i].removeEventListener("click", confirmAnswer);
      possibleAnswers[i].addEventListener("click", confirmAnswer);
   }
}
//---End of function to get answer array---//

//---Function to prevent correct answer appearing in same point in array - shuffle answer array---//
//------This section of code was taken from Free Code Camp and slightly modified to suit the purposes of this function----//
function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}
//---End of code snippet------//
//---End of shuffle answers array---//


















//---Function to check the chosen answer matches the correct answer in the API---//
function confirmAnswer() {
   const rawselectedAnswer = this.innerHTML;
   const rawCorrectAnswer = connect.results[id].correct_answer;

   //----This snippet of code was taken from Go Make Things (https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/)----//
   const decodeHTMLCorrect = function (html) {
      const txtCorrectAnswer = document.createElement('textarea');
      txtCorrectAnswer.innerHTML = html;
      return txtCorrectAnswer.value;
   };
   const decodeHTMLSelected = function (html) {
      const txtSelectedAnswer = document.createElement('textarea');
      txtSelectedAnswer.innerHTML = html;
      return txtSelectedAnswer.value;
   };
   const answerCorrectTemp = decodeHTMLCorrect(`${rawCorrectAnswer}`);
   const selectedAnswerTemp = decodeHTMLSelected(`${rawselectedAnswer}`);
   //----End of code snippet----//

   function correctAnswerChatEscape (answer) {
      const escapeCorrectAnswer = document.createElement('textarea'); escapeCorrectAnswer.innerHTML = answer; 
            return escapeCorrectAnswer.textContent.replace(/[\u2018\u2019]/g, "'");       
    }

    function selectedAnswerChatEscape (answer) {
      const escapeSelectedAnswer = document.createElement('textarea'); escapeSelectedAnswer.innerHTML = answer; 
            return escapeSelectedAnswer.textContent.replace(/[\u2018\u2019]/g, "'");       
    }

    answerCorrect = correctAnswerChatEscape(answerCorrectTemp);
    selectedAnswer = selectedAnswerChatEscape(selectedAnswerTemp);







   if (selectedAnswer === answerCorrect) {
      this.style.background = "green";
      console.log(`The correct answer is ${answerCorrect}, but you selected ${selectedAnswer}`);
      document.getElementById("next").classList.remove("hidden");
      const possibleAnswers = document.querySelectorAll(".answer");
      for (let a = 0; a < possibleAnswers.length; a++) {
         possibleAnswers[a].disabled = true;
      }
      increaseScore();
      //setTimeout(retriveNextQuestion, 1500);
      } else {
        this.style.background = "red";
      console.log(`The correct answer is ${answerCorrect}, but you selected ${selectedAnswer}`);
      // Display the background color of the correct answer when user selects wrong answer
      const correctAnswerButtons = document.querySelectorAll('.answer');
      //setTimeout(retriveNextQuestion, 1000);
      for (let a = 0; a < correctAnswerButtons.length; a++) {
         if (correctAnswerButtons[a].innerHTML === answerCorrect) {
            correctAnswerButtons[a].style.background = 'orange';
            document.getElementById("next").classList.remove("hidden");
            //break;
         }
      }
      const answerButtons = document.querySelectorAll('.answer');
      for (let a = 0; a < answerButtons.length; a++) {
         answerButtons[a].disabled = true;
      }
      
   }
}
//---End of check answer function---//

//---Function to increase score if answer correct---//
function increaseScore() {
   score += 10;
   scoreCounter.innerText = ` Score: ${score}`;
}
//---End of increase score function---//

//---Function to increase question number---//
function increaseQuestionNumber() {
   qID += 1;
   questionCounter.innerText = ` Q) ${qID}`;
}
///--End of increase question number function---//

//---Function to add score to Hall of Fame---//
function addHighScore() {
   const existingScores = JSON.parse(localStorage.getItem('existingScores')) || [];
   const roomCode = (document.getElementById("room-code-value").value);
   const username = (document.getElementById("usernameValue").value);
   const insertID = (existingScores.length + 1);
   const setHighScoreArray = {
      playerID: insertID,
      playerName: username,
      playerHighScore: score,
      playerRoom: roomCode
   };
   existingScores.push(setHighScoreArray);
   existingScores.sort((a, b) => b.playerHighScore - a.playerHighScore);
   localStorage.setItem('existingScores', JSON.stringify(existingScores));
}
//---End of function to add to hall of fame---//

//---Function to display high scores from hall of fame---//
function displayHighScore() {
   const pullExistingScores = JSON.parse(localStorage.getItem('existingScores')) || [];
   const pullInDocumentHighScores = document.getElementById('high-score-table');
   pullExistingScores.sort((a, b) => (b.playerRoom - a.playerRoom || b.playerHighScore - a.playerHighScore));
   pullInDocumentHighScores.innerHTML = pullExistingScores.map(entry => `
      <div class="col high-scores-list">${entry.playerName}</div>
      <div class="col high-scores-list">${entry.playerHighScore}</div>
      <div class="col high-scores-list">${entry.playerRoom}</div>`).join('');
}
//---End of function to dislay Hall of Fame---//

//---Call the API function---//
connectAPI(apiURL);
//--------//
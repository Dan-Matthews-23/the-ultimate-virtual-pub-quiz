// URL for API
const apiURL = "https://opentdb.com/api.php?amount=20&type=multiple";

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
const gameOverReturnBtn = document.getElementById("gameOverReturnBtn");
const enterUsernameBtn = document.getElementById("enter-username");
const viewHighScoresPostGame = document.getElementById("post-game-scores");
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", retriveNextQuestion);

//---Event Listeners---//
addEventListener("click", function (event) {
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
   } else if (event.target === returnHome) {
      confirmReturn();
   } else if (event.target === returnHomeNoAlert || event.target === gameOverReturnBtn) {
      window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html");
   } else if (event.target === viewHighScoresPostGame) {
      addHighScore();
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

// ---Data validation for Room Code--- //
function checkRoomCode() {
   // Get the value of room code input field
   const roomCode = document.getElementById("room-code-value").value;
   // If the value of room code is blank or anything but a number, or a number less than 1, display alert box
   if (roomCode < 1 || roomCode === "" || isNaN(roomCode)) {
      alert("Please enter a valid room code");
      // If the value of room code is valid, run checkUsername function to check the username validation
   } else {
      checkUsername();
   }
}
//----End of Room Code validation --- //

// ---Data validation for Username--- //
function checkUsername() {
   // Get the value of username input field
   const username = (document.getElementById("usernameValue").value);
   // If username is blank display alert box
   if (username.length === 0) {
      alert("Please enter a username");
      // If username is less than 3 characters display alert box
   } else if (username.length > 0 && username.length < 3) {
      alert("Please enter a username with more than 3 characters");
      // If username is more than 10 characters display alert box
   } else if (username.length > 10) {
      alert("Please enter a username with no more than 10 characters");
      // If none of these apply (the username input value is valid), set these classes which shows/hides these sections
   } else {
      document.getElementById("quiz-section").classList.remove("hidden");
      document.getElementById("return-section").classList.remove("hidden");
      document.getElementById("user-selection-section").classList.add("hidden");
      document.getElementById("username-section").classList.add("hidden");
   }
}
//----End of username validation --- //

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
   // If the ID of the question has reached the length of the question array (i.e. reached 20/20)
   if (id >= connect.results.length) {
      // Display the Game Over section and hide everything else
      document.getElementById("game-over-modal").classList.remove("hidden");
      document.getElementById("return-section").classList.add("hidden");
      const finalScore = document.getElementById("final-score");
      finalScore.innerHTML = (`<h1>Final score: ${score}</h1>`);
      document.getElementById("quiz-section").classList.add("hidden");
      return;
   }
   // Or if the question ID has not reached 20, call the next question, increase the score and get call the next set of answers
   increaseQuestionNumber();
   getQuestionArray();
   document.getElementById("next").classList.add("hidden");
   getAnswerArray();
}
//---End of calling next question function---//

//---Function to get the array of answers---//
function getAnswerArray() {
   // Set the set of answer buttons to a variable
   const possibleAnswers = document.querySelectorAll(".answer");
   // Set the correct answer to a variable
   const answerCorrect = connect.results[id].correct_answer;
   // Set the incorrect answers to a variable
   const answerIncorrect = connect.results[id].incorrect_answers;
   // Set the incorrect answers to a data set so they can be shuffled
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
      const txtCorrectAnswer = document.createElement("textarea");
      txtCorrectAnswer.innerHTML = html;
      return txtCorrectAnswer.value;
   };
   const decodeHTMLSelected = function (html) {
      const txtSelectedAnswer = document.createElement("textarea");
      txtSelectedAnswer.innerHTML = html;
      return txtSelectedAnswer.value;
   };
   const answerCorrectTemp = decodeHTMLCorrect(`${rawCorrectAnswer}`);
   const selectedAnswerTemp = decodeHTMLSelected(`${rawselectedAnswer}`);
   //----End of code snippet----//

   // Function within a function (1/2)
   function correctAnswerChatEscape(answer) {
      const escapeCorrectAnswer = document.createElement("textarea");
      escapeCorrectAnswer.innerHTML = answer;
      return escapeCorrectAnswer.textContent.replace(/[\u2018\u2019]/g, "'");
   }
   // Function within a function (2/2)
   function selectedAnswerChatEscape(answer) {
      const escapeSelectedAnswer = document.createElement("textarea");
      escapeSelectedAnswer.innerHTML = answer;
      return escapeSelectedAnswer.textContent.replace(/[\u2018\u2019]/g, "'");
   }
   // Assign the escaped values to variables
   let answerCorrect = correctAnswerChatEscape(answerCorrectTemp);
   let selectedAnswer = selectedAnswerChatEscape(selectedAnswerTemp);
   // If user chooses the correct answer
   if (selectedAnswer === answerCorrect) {
      this.style.background = "green";
      document.getElementById("next").classList.remove("hidden");
      const possibleAnswers = document.querySelectorAll(".answer");
      for (let a = 0; a < possibleAnswers.length; a++) {
         possibleAnswers[a].disabled = true;
      }
      increaseScore();
      // If the user chooses the wrong answer
   } else {
      this.style.background = "red";
      const correctAnswerButtons = document.querySelectorAll(".answer");
      for (let a = 0; a < correctAnswerButtons.length; a++) {
         if (correctAnswerButtons[a].innerHTML === answerCorrect) {
            correctAnswerButtons[a].style.background = "orange";
            document.getElementById("next").classList.remove("hidden");
            break;
         }
      }
      const answerButtons = document.querySelectorAll(".answer");
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
   // Get the values of the input fields and pull data from local storage
   const existingScores = JSON.parse(localStorage.getItem("existingScores")) || [];
   const roomCode = (document.getElementById("room-code-value").value);
   const username = (document.getElementById("usernameValue").value);
   document.getElementById("return-no-alert").classList.remove("hidden");
   const insertID = (existingScores.length + 1);
   // Create an array and assign values to each field
   const setHighScoreArray = {
      playerID: insertID,
      playerName: username,
      playerHighScore: score,
      playerRoom: roomCode
   };
   // Push the values to the array
   existingScores.push(setHighScoreArray);
   // Sort the values by score, highest to lowest
   existingScores.sort((a, b) => b.playerHighScore - a.playerHighScore);
   // Save array in local storage
   localStorage.setItem("existingScores", JSON.stringify(existingScores));
}
//---End of function to add to hall of fame---//

//---Function to display high scores from hall of fame---//
function displayHighScore() {
   // Pull the array out of local storage and assign them to variables
   const pullExistingScores = JSON.parse(localStorage.getItem("existingScores")) || [];
   const pullInDocumentHighScores = document.getElementById("high-score-table");
   // Do this by sorting by room code, then score, highest to lowest
   pullExistingScores.sort((a, b) => (b.playerRoom - a.playerRoom || b.playerHighScore - a.playerHighScore));
   // Seperate out the array into a MAP ENTITY, and push into seperate divs
   pullInDocumentHighScores.innerHTML = pullExistingScores.map(entry => `
      <div class="col high-scores-list">${entry.playerName}</div>
      <div class="col high-scores-list">${entry.playerHighScore}</div>
      <div class="col high-scores-list">${entry.playerRoom}</div>`).join('');
}
//---End of function to dislay Hall of Fame---//

//---Call the API function---//
connectAPI(apiURL);
//--------//
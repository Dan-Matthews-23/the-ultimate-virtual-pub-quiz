  //Global Variables
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", retriveNextQuestion);

// URL for API
const difficultyEasy = "https://opentdb.com/api.php?amount=20&type=multiple";

let connect = {};
let score = 0;
let id = 0;
let scoreCounter = document.getElementById("score");

const showQuiz = document.getElementById("showQuizBtn");
const showInst = document.getElementById("showInstBtn");
const showHall = document.getElementById("showHallBtn");
const returnHome = document.getElementById("return-btn");
const enterUsernameBtn = document.getElementById("enter-username");
const viewHighScoresPostGame = document.getElementById("post-game-scores");
const reset = document.getElementById("reset");

addEventListener('click', function (event) 
{
  if( event.target === showQuiz) 
  {
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("username-section").classList.remove("hidden");

  } else if (event.target === enterUsernameBtn) 
  {
    checkRoomCode()
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
    displayHighScore();

  } else if (event.target === reset) 
  {
     window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html"); // WHEN DEPLOYED
} else if (event.target === returnHome) 
  {
      confirmReturn();
     } else if  (event.target === viewHighScoresPostGame) 
  {
    addHighScore();
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("hall-of-fame-section").classList.remove("hidden");
    document.getElementById("game-over-modal").classList.add("hidden");
    displayHighScore();
    
  }

})

function checkRoomCode() {
  const roomCode = document.getElementById("room-code-value").value;
  if (roomCode < 1 || roomCode === "" || isNaN(roomCode)) {
    alert("Please enter a valid room code");
  } else {
    checkUsername();
  }
}

function confirmReturn(){

  let ConfRet = confirm("Are you sure you want to return? You will lose all progress");
  if (ConfRet == true) { window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html"); }
}

function checkUsername(){
  const username = (document.getElementById("usernameValue").value);

  if (username.length === 0) { alert("Please enter a username")}
  else if (username.length > 0 && username.length < 3) { alert("Please enter a username with more than 3 characters")}
  else if (username.length > 10) { alert("Please enter a username with no more than 10 characters")}
  else 
  { 
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("return-section").classList.remove("hidden");
    document.getElementById("user-selection-section").classList.add("hidden");
    document.getElementById("username-section").classList.add("hidden");
  }

}

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
    
    
    
    const rawselectedAnswer = this.innerHTML;
    const rawCorrectAnswer = connect.results[id].correct_answer;

    





    //----This snippet of code was taken from Go Make Things (https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/)----//
      const decodeHTMLCorrect = function (html) { const txtCorrectAnswer = document.createElement('textarea'); txtCorrectAnswer.innerHTML = html;  return txtCorrectAnswer.value; };
      const decodeHTMLSelected = function (html) { const txtSelectedAnswer = document.createElement('textarea'); txtSelectedAnswer.innerHTML = html;  return txtSelectedAnswer.value; };

    let answerCorrect = decodeHTMLCorrect(`${rawCorrectAnswer}`);
    let selectedAnswer = decodeHTMLSelected(`${rawselectedAnswer}`);
    //----End of code snippet----

   



   





    if (selectedAnswer === answerCorrect) {
      this.style.background = "green";
      console.log(`The correct answer is ${answerCorrect}, but you selected ${selectedAnswer}`);
      document.getElementById("next").classList.remove("hidden");
      const possibleAnswers = document.querySelectorAll(".answer");
      for (let a = 0; a < possibleAnswers.length; a++) {
        possibleAnswers[a].disabled = true;
              }
             
              increaseScore();
         
    } else {

            this.style.background = "red";
      console.log(`The correct answer is ${answerCorrect}, but you selected ${selectedAnswer}`);
     
      // Display the background color of the correct answer when user selects wrong answer
    const correctAnswerButtons = document.querySelectorAll('.answer');
    for (let a = 0; a < correctAnswerButtons.length; a++) {
      if (correctAnswerButtons[a].innerHTML === answerCorrect) {
        correctAnswerButtons[a].style.background = 'orange';
        document.getElementById("next").classList.remove("hidden");
       
        break;
      }
    }
    const answerButtons = document.querySelectorAll('.answer');
    for (let a = 0; a < answerButtons.length; a++) {
      answerButtons[a].disabled = true;
      
    }
      } 
 }


function increaseScore() {
  
  score += 10;
  scoreCounter.innerText = ` Score: ${score}`;
}

function addHighScore() {
  
  const existingScores = JSON.parse(localStorage.getItem('existingScores')) || [];
  const roomCode = (document.getElementById("room-code-value").value);
  const username = (document.getElementById("usernameValue").value);
  const setHighScoreArray = {
    playerID: (setHighScoreArray.length + 1),
    playerName: username,
    playerHighScore: score,
    playerRoom: roomCode
  };
  existingScores.push(setHighScoreArray);
  existingScores.sort((a, b) => b.playerHighScore - a.playerHighScore);
 
  
  localStorage.setItem('existingScores', JSON.stringify(existingScores));
 
}

function displayHighScore() {
    const pullExistingScores = JSON.parse(localStorage.getItem('existingScores')) || [];
    const pullInDocumentHighScores = document.getElementById('high-score-table');
   
    
    pullExistingScores.sort((a,b)=> (b.playerRoom - a.playerRoom || b.playerHighScore - a.playerHighScore  ));
   
    
    pullInDocumentHighScores.innerHTML = pullExistingScores.map(entry => `
    <div class="col high-scores-list">${entry.playerName}</div>
    <div class="col high-scores-list">${entry.playerHighScore}</div>
    <div class="col high-scores-list">${entry.playerRoom}</div>`).join('');
 
  }

function retriveNextQuestion() {
    id++;
    
    if (id >= connect.results.length) {
      document.getElementById("game-over-modal").classList.remove("hidden");
      document.getElementById("return-section").classList.add("hidden");
      const finalScore = document.getElementById('final-score');
      finalScore.innerText = (`Final score: ${score}`);




      document.getElementById("quiz-section").classList.add("hidden");
      
      
      return;
    }
    getQuestionArray();
    document.getElementById("next").classList.add("hidden");
    getAnswerArray();
  
  }


  connectAPI(difficultyEasy);
  
  
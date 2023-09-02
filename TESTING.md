## Testing

### Automated Testing

### Manual Testing


The project was built using Google Chrome and tested through Chrome Developer Tools. All elements were then tested with Firefox, Microsoft Edge and Safari (from my personal device). I have not tested the features using Internet Explorer as support ended for this browser on some operating systems in June 2022.


| Test Number|      Page     |   Browser      |   Feature (by class/ ID / name)       | Result     |  Comments |  
|------------ | ------------  | ------------  | ------------                          |------------| ------------             | 
| 001         |  style.css    | Chrome        |  Media Query / user-screen title      | Fail       | The title font size did not reduce with screen size. Tested on two viewports: 1500px and 480px. However all media query tests failed despite several attempts 
| **Before**                                          |   **After**          ||||
| ![001](/assets/testing/testing-images/test-one-b.webp)      |![001](/assets/testing/testing-images/test-one-a.webp) |             | | |
| 002         |  style.css    | Chrome        |  Media Query / user-screen title      | Pass       | Following the result in Test 001 I decided to use a ViewPort method rather than Media Query and set this to '5VW'. This resolved the issue I had in Test 001. 
| **Before**                                          |   **After**          ||||
| ![002](/assets/testing/testing-images/test-two-a.webp)      |![002](/assets/testing/testing-images/test-two-b.webp) |             | | |
| 003         |  script.js / index.html    | Chrome        |  function hideQuizSection() / div.quiz-section      | Fail       | A function built to hide the div.quiz-section on HTML when not active after studying the code on [W3 Schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp). I tried to send the output to console.log to find out why it wasn't working, however all tests failed
| **Before**                                          |   **After**          ||||
| ![003](/assets/testing/testing-images/test-three-a.webp) ![003](/assets/testing/testing-images/test-three-b.webp)      | |             | | |
| 004         |  script.js / index.html    | Chrome        |  function hideQuizSection() / section.quiz-section      | Pass       | After test failures in Test 003 I researched other ways to make the function work. I added an 'OnClick()' element to the button to call the function once it was clicked. It passed all tests. However after speaking to my mentor, I decided to use an Event Listener instead (see Other Feedback, test 005)
| **Before**                                          |   **After**          ||||
| ![004](/assets/testing/testing-images/test-four-a.webp) ![004](/assets/testing/testing-images/test-four-b.webp) ![678px](/assets/testing/testing-images/test-four-c.webp)      | |             | | |
| 005         |  script.js / index.html    | Chrome        |  function hideQuizSection() / section.quiz-section      | Fail       | After following advice from me mentor I attemped to create an EventListener() function in place of the OnClick() function. The quiz-section displayed as expected but the other sections (specifically the user-selection-section) did not hide. Tests failed. 
| **Before**                                          |   **After**          ||||
| ![005](/assets/testing/testing-images/test-five-a.webp) ![005](/assets/testing/testing-images/test-five-b.webp) ![005](/assets/testing/testing-images/test-five-c.webp)      | |             | | |
| 006         |  script.js / index.html    | Chrome        |  function showQuizSection() / section.quiz-section      | Pass       | After test failures in Test 005 I realised that .style.display="hide" is not a valid instruction. This should have been .style.display="none". After correcting, tests passed. 
| **Before**                                          |   **After**          ||||
| ![006](/assets/testing/testing-images/test-six-a.webp) ![006](/assets/testing/testing-images/test-six-b.webp) ![006](/assets/testing/testing-images/test-six-c.webp)      | |             | | |
| 007         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | Following from successful results in Tests 005 and 006 I have replicated the code for each of the three sections: quiz-section, instructions-section and Hall-of-fame-section. The code passed all tests 
| **Before**                                          |   **After**          ||||
| ![007](/assets/testing/testing-images/test-seven-a.webp) ![007](/assets/testing/testing-images/test-seven-b.webp) ![007](/assets/testing/testing-images/test-seven-c.webp) ![007](/assets/testing/testing-images/test-seven-d.webp)      | |             | | |
| 008         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | I asked my mentor if it was conventional to use the code from Test 007 to change the display of a HTML section in a JavaScript file. They said it was, but ideally I should be calliing a class and changing that rather than CSS. I researched how to do this on [W3 Schools](https://www.w3schools.com/howto/howto_js_remove_class.asp) and implemented it. The test passed first time. 
| **Before**                                          |   **After**          ||||
| ![008](/assets/testing/testing-images/test-eight-a.webp) | ![008](/assets/testing/testing-images/test-eight-b.webp)   ![008](/assets/testing/testing-images/test-eight-c.webp)      | |             | | |
| 009         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | I made amendments to the code from Test 008 to incorperate the user-selection and return-home sections. Below are the screenshots of each section as they are clicked. Note how other sections are hidden when the user has not selected them. However I am aware that these functions repeat, which is in breach of the [DRY principle ](https://www.digitalocean.com/community/tutorials/what-is-dry-development). I will further develop this at a later date
| **Before**                                          |   **After**          ||||
| ![009](/assets/testing/testing-images/test-nine-a.webp) | ![009](/assets/testing/testing-images/test-nine-b.webp)   ![009](/assets/testing/testing-images/test-nine-c.webp) ![009](/assets/testing/testing-images/test-nine-d.webp) ![009](/assets/testing/testing-images/test-nine-e.webp)     | |             | | |
| 010         |  script.js / index.html    | Chrome        |  showQuiz section     | Fail       |  I have created my own question array, however the function seems to be calling the last question in the data set rather than the first, and the buttons are not populating with the one correct and three incorrect answers. I have spent quite a bit of time researching this but still can't figure it out.
| **Before**                                          |   **After**          ||||
| ![010](/assets/testing/testing-images/test-ten-a.webp) | ![010](/assets/testing/testing-images/test-ten-b.webp)       | |             | | |
| 011         |  script.js / index.html    | Chrome        |  getQuestionArray      | Fail       | After trying to fix test 010, I tried to create a new function and call the question section to populate a new question. However the answers did not populate at all, and the question dissapeared. 
| **Before**                                          |   **After**          ||||
| ![011](/assets/testing/testing-images/test-eleven-a.webp) | ![011](/assets/testing/testing-images/test-eleven-b.webp)       | |             | | |
| 012         |  script.js / index.html    | Chrome        |  getQuestionArray      | Pass       | I realised that I was calling for the class, not the ID on question from index.html. Made changes and it worked.  
| **Before**                                          |   **After**          ||||
| ![012](/assets/testing/testing-images/test-twelve-a.webp) |       | |             | | |
| 013         |  script.js / index.html    | Chrome        |  getQuestionArray      | Fail       | In an attempt to refine my code for calling the questions and to correct a long-standing error from Test 010, I attempted to re-write the function. However the questions did not populate, and the automated testing (via console) gave an error
| **Before**                                          |   **After**          ||||
| ![013](/assets/testing/testing-images/test-thirteen-a.webp) |   ![013](/assets/testing/testing-images/test-thirteen-b.webp) ![013](/assets/testing/testing-images/test-thirteen-c.webp)    | |             | | |
| 014         |  script.js / index.html    | Chrome        |  getQuestionArray      | Pass       | After case conferencing with a peer I realised that I was not correctly indexing the questions from the array. I should have been using 'connect.results[id].correct_answer;' instead of 'connect.results.correct_answer'. Made adjustments and passed all tests. Questions are now working
| **Before**                                          |   **After**          ||||
| ![014](/assets/testing/testing-images/test-fourteen-a.webp) |       | |             | | |
| 015         |  script.js / index.html    | Chrome        |  getScore      | Fail       | From console logs and alert boses I know that my score is compiling as planned, but I can't get a static score to show on index.html. Attempts to push the score value through via innerHTML are failing. 
| **Before**                                          |   **After**          ||||
| ![015](/assets/testing/testing-images/test-fourteen-a.webp) |       | |             | | |
| 016         |  script.js / index.html    | Chrome        |  getScore      | Pass       | After rewriting the calculaeScore function I have the score now working. I intentially made the text large and red at the top of the page so I could see when it was working properly. 
| **Before**                                          |   **After**          ||||
| ![016](/assets/testing/testing-images/test-sixteen-a.webp)  ![016](/assets/testing/testing-images/test-sixteen-b.webp) |       | |             | | |
| 017         |  script.js / index.html    | Chrome        |  confirmAnswer      | Pass       | After almost twenty attempts, I have managed to get the function working so that it highlights the correct answer if the user selects an incorrect answer.  
| **Before**                                          |   **After**          ||||
| ![017](/assets/testing/testing-images/test-seventeen-a.webp)  ![017](/assets/testing/testing-images/test-seventeen-b.webp) |       | |             | | |
| 018         |  script.js / index.html    | Chrome        |  user-screen-container      | Fail       | I wanted to set the background to a transparent brown. I used the opaque CSS setting, but it did not work as planned, as this was applied to all child elements even though I'd redeclared it in the other classes. Failed tests  
| **Before**                                          |   **After**          ||||
| ![018](/assets/testing/testing-images/test-eighteen-a.webp)  ![018](/assets/testing/testing-images/test-eighteen-b.webp) |       | |             | | |
| 019         |  script.js / index.html    | Chrome        |  user-screen-container      | Pass       | Following test failures in Test 018, I did some research and discovered that what I wanted to do was not possible. On [Ww3 Schools] (https://www.w3schools.com/css/css3_colors.asp) I learned that I could convert the background colur to RGBA, where the 'alpha' part would determine the opacisty. The test passed all tests
| **Before**                                          |   **After**          ||||
| ![019](/assets/testing/testing-images/test-nineteen-a.webp)  ![019](/assets/testing/testing-images/test-nineteen-b.webp) |       | |             | | |
| 020         |  script.js / index.html    | Chrome        |  showQuizSection     | Fail       | Test 009 indicated that my code was in breach of the [DRY principle ](https://www.digitalocean.com/community/tutorials/what-is-dry-development). I asked a peer to review my code (see [Acknowledgments(#Acknowledgments)]). It was suggested to me that I use event.target rather than a function for each section. While the first section worked to show/hide the quiz section, the others did not. Tests failed
| **Before**                                          |   **After**          ||||
| ![020](/assets/testing/testing-images/test-twenty-a.webp)  ![020](/assets/testing/testing-images/test-twenty-b.webp) |       | |             | | |
| 021         |  script.js / index.html    | Chrome        |  showQuizSection     | Pass       | I realised that my event listener was 'listening' for only the showQuiz variable. I removed this part and the function worked as planned. 
| **Before**                                          |   **After**          ||||
| ![021](/assets/testing/testing-images/test-twenty-one-a.webp)  |       | |             | | |
| 022         |  script.js / index.html    | Chrome        |  passNickname     | Fail       | Following feedback on changing the order of my 'Enter Username' modal, I asked for the username first before the game starts. However the username was not pulling through to the passNickname function. My console log declared an undefined variable. 
| **Before**                                          |   **After**          ||||
| ![022](/assets/testing/testing-images/test-twenty-two-a.webp)  |  ![022](/assets/testing/testing-images/test-twenty-two-b.webp)      | |             | | |
 | 023         |  script.js / index.html    | Chrome        |  passNickname     | Pass       | Following several more variations of Test 022 I realised that that I had included a previous 'let username' before the functions. This effectivley meant that my username value was being reset every time the script ran. I corrected the error, inserted two extra lines into the function and it passed all tests
| **Before**                                          |   **After**          ||||
| ![023](/assets/testing/testing-images/test-twenty-three-a.webp)  |  ![023](/assets/testing/testing-images/test-twenty-three-b.webp)     | |             | | |
| 024         |  script.js / index.html    | Chrome        |  getHighScores     | Fail       | Upon completion of the quiz the user is presented with the High Scores section. However once back to the dashboard, if the user clicks High Scores (test-twenty-four-b), the array is not displaying. 
| **Before**                                          |   **After**          ||||
| ![024](/assets/testing/testing-images/test-twenty-four-a.webp)  |  ![024](/assets/testing/testing-images/test-twenty-four-b.webp)     | |             | | |
| 025         |  script.js / index.html    | Chrome        |  getHighScores     | Fail       | I have attempted to correct the issue in Test 024 by seperating the getHighScores function into two seperate functions. However this also failed tests, as the variables were not pulled through to displayScore function
| **Before**                                          |   **After**          ||||
| ![025](/assets/testing/testing-images/test-twenty-five-a.webp)  |  ![025](/assets/testing/testing-images/test-twenty-five-b.webp)     | |             | | |
| 026         |  script.js / index.html    | Chrome        |  displayHighScores     | Pass       | I tried to correct the errors in Tests 024 and 025, however I decided to try another way. I have reinstated the getHighScores function and created a seperate function called displayHighScores, but rather on rely on the variables of another functions I have replicated the last three lines from getHighScores and assigned them difference variable names. This means that I am accessing the array in exacly the same way without pushing any values or relying on other functions (see image b, replicated code is highlighted)
| **Before**                                          |   **After**          ||||
| ![026](/assets/testing/testing-images/test-twenty-six-a.webp)  |  ![026](/assets/testing/testing-images/test-twenty-six-b.webp)     | |             | | |
| 027         |  script.js / index.html    | Chrome        |  confirmAnswer     | Fail       | There seems to be an instance somewhere in confirmAnswer where the selected answer has characters inserted into the value. This is causing a mismatch error, but the Next button isn't showing either. 
| **Before**                                          |   **After**          ||||
| ![027](/assets/testing/testing-images/test-twenty-seven-a.webp)  |  ![027](/assets/testing/testing-images/test-twenty-seven-b.webp)     | |             | | |
| 028         |  script.js / index.html    | Chrome        |  confirmAnswer     | Fail       | I have made changes to the function in Test 027, but the error is still being generated. 
| **Before**                                          |   **After**          ||||
| ![028](/assets/testing/testing-images/test-twenty-eight-a.webp)  |  ![028](/assets/testing/testing-images/test-twenty-eight-b.webp)     | |             | | |
| 029         |  script.js / index.html    | Chrome        |  confirmAnswer     | Fail       | I have taken a function from an [online source](https://gomakethings.com/) in attempt to escape any special characters. It seems to work for almost all tests but then fails where there is an ampersand (&) in the answer. 
| **Before**                                          |   **After**          ||||
| There are no images for this test |    | |             | | |
| 030         |  script.js / index.html    | Chrome        |  confirmAnswer     | Pass       | I have create two additional functions to work alongside the function I took from an online source. I learned how to do this from an online tutorial and created my own based loosley on that. It passed all tests from a range of over 2000 questions. 
| **Before**                                          |   **After**          ||||
| ![028](/assets/testing/testing-images/test-thirty-a.webp)  |  ![028](/assets/testing/testing-images/test-thirty-b.webp     | |             | | |












### Automated Testing

#### HTML


### Testing User Stories

I have asked my peers to test and evaluate every aspect of this project to ensure it meets all user goals. Please see [Feedback from peers](/README.md) for information on how I've addressed these

| The User    | User Stories                                             | Has this been achieved?     |   How?                                      |  
|---          | ----                                                     | ----                        |  ----                                       |
|Pub User     | To receive the same user experience on multiple devices  | Yes                         |   This project has been designed with a 'mobile first' design. It's also been tested across various viewports, devices and browsers. The filenames have been kept conformative to ensure cross-platform compatibility   |
|Pub User     | To read instructions that are simple to understand       | Yes                         |   I have used a useful tool called [Rewordify](https://rewordify.com/index.php) to ensure the instructions are as simple as possible to understand   |
|Pub User     | To be challenged across a range of questions       | Yes                         |   Rather than focus on particular topics, where a pub user may have a strength in that field, I have chosen an API that draws upon multiple topics across varying difficulty   |
|Pub User     | To see my score once the quiz is over       | Yes                         |   At the end of the quiz the user is directed to a Game Over screen which provides a final score   |
|Pub User     | To compare my score with other scores       | Yes                         |   At the end of the quiz the user is directed to the Hall of Fame section which lists every score in descending order and by room code. The user can also view these scores before the quiz starts   |
|The facilitator     | To see the results of the users in the room once finished       | Yes                         |   The Hall of Fame section lists each score by room number as the first sort, then by descending score. This makes it easy for the facilitator to see the top scorer by room  |
|The facilitator     | To easily identify a winner amongst users in the room       | Yes                         |   As above  |
|Pub User     | To take part in an online virtual pub quiz  | Yes                         |   This project is fully virtual and can be accessed by any device with internet capability. It functions well across different devices   |
|Pub User     |  To be challenged in the right way (questions not too easy or too hard) | Yes                         |   This project incorperates a range of topics and difficulties to mitigate pub users with strengths in particular topics   |
|Pub User     |  To view my score at the end, and be able to compare to other scores | Yes                         |  The pub user can view the Hall of Fame at any time before or after the quiz     |
|The facilitator    |  To view scores of the users without havng to do the quiz myself | Yes                         |  The facilitator may view the Hall of Fame at any time while the pub users are doing the quiz or afterwards. There is no requirement to first complete the quiz     |
|The facilitator    |  To be able to identify a winner | Yes                         |  The Hall of Fame is organised in such a way that identifying a winner is easy.      |

*The Returning Visitor Goals, Frequent Visitor Goals and First Visitor Goals are all identical*


### Solved Bugs

Please view testing table for list of all solved bugs

### Known Bugs
|      Page   |   Feature                       | Element | Explanation                                                                                               |
| ------------| ------------                    | -----------  | -----------                                                                                          |
| inex.html   |   Quiz section                  |              |                                                                                                      |


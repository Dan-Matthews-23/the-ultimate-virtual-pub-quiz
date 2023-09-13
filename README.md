# Contents

- [The Ultimate Pub Quiz](#the-ultimate-pub-quiz)
- [User Experience](#user-experience)
  - [Background](#background)
  - [Key information](#key-information)
  - [About the user](#about-the-user)
  - [User Goals](#user-goals)
  - [First Time Visitor Goals](#first-time-visitor-goals)
  - [Returning Visitor Goals](#returning-visitor-goals)
  - [Frequent Visitor Goals](#frequent-visitor-goals)
- [Design](#design)
  - [Wireframes](#wireframes)
  - [Colour](#colour)
  - [Font](#font)
  - [Images](#images)
- [Features](#features)
  - [Sections](#sections)
    - [User Selection Screen section](#user-selection-screen-section)
    - [Quiz section](#quiz-section)
    - [Game Over section](#game-over-section)
    - [Hall of Fame section](#hall-of-fame-section)
    - [Instructions](#instructions)
    - [500 page](#500-page)
    - [404 page](#404-page)
  - [WAVE Report](#wave-report)
  - [Contrast Ratio](#contrast-ratio)
- [Justifications and reflections](#justifications-and-reflections)
- [Technologies Used](#technologies-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
  - [How to Fork](#how-to-fork)
  - [How to Clone](#how-to-clone)
- [Testing](#testing)
- [Feedback](#feedback)
  - [Peer Feedback](#peer-feedback)
  - [Responding to Peer Feedback](#responding-to-peer-feedback)
  - [Feedback from previous projects](#feedback-from-previous-projects)
  - [Responding to feedback from previous projects](#responding-to-feedback-from-previous-projects)
  - [Other Feedback](#other-feedback)
- [Functions Explained](#functions-explained)
- [Future Developments](#future-developments)
- [Credits](#contrast-ratio)
  - [W3 Schools](#w3-schools)
  - [Code Pen](#code-pen)
  - [Pexels](#pexels)
  - [Content](#content)
  - [Code Used](#code-used)
    - [function shuffle()](#function-shuffle)
    - [async function connectAPI()](#async-function-connectapi)
- [Acknowledgments](#acknowledgments)

  - - -

  ## The Ultimate Pub Quiz

![Am I responsive](/assets/images/responsive.webp)

[View The Ultimate Pub Quiz on Github](https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/)

The Ultimate Pub Quiz is an exciting development designed specifically for pub users and activity coordinators. Based on the principles of a "traditional Friday night pub quiz", the Ultimate Pub quiz is a way of having that same fun, only without the hassle of organising it. 

## User Experience

### Background

The Ultimate Virtual Pub Quiz is designed for pub users and activity coordinators and is a way for all participants to enjoy the same experience of a traditional pub quiz. Designed with a 'mobile-first' principle, this project is perfect for pub users to enjoy the same experience across a range of devices. This quiz has been developed based on a real need - a good friend who is also a pub landlord  - for an exciting experience without the hassle of having someone organise it. 

The quiz has several aims:

- Engage pub users.
- Respond to user input.
- Provide feedback.
- Provide a final score. 
- Display record of previous high scores .

### Key information

- A 'How to play section, which will give users instructions on how to play the game.
- A 'Hall of Fame' section, which will display a list of the highest scores in descending order.
- The quiz itself, which will allow the users to answer questions.

### About the user

This project has been designed with two end users in mind:

- The pub user, who is the user participating in the quiz. They will be able to access the quiz via a smart device through their own internet or Wi-Fi of the premises if they have it. They will be given a 'Room Number' that they must enter along with their username when they join the quiz. They will be given the Room ID by the facilitator. The instructions will need to be clear. 

- The facilitator, who is the person who will be facilitating the event. They will need to ensure everyone has the correct Room Code, and they need only advise the participants to begin at an allotted time. Once all participants have completed the quiz, the facilitator will be able to view the Hallf of Fame, which will be grouped and easy to identify a clear winner.  

### User Goals
The pub user:

- To receive the same user experience on multiple devices
- To read instructions that are simple to understand
- To be challenged across a range of questions
- To see my score once the quiz is over
- To compare my score with other scores

The facilitator:
- To see the results of the users in the room once finished
- To easily identify a winner amongst users in the room

### First Time Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged
- To view my score at the end and be able to compare it to other scores

The facilitator:
- To view the scores of the users without having to do the quiz myself
- To be able to identify a winner

### Returning Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged
- To view my score at the end and be able to compare it to other scores

The facilitator:
- To view the scores of the users without having to do the quiz myself
- To be able to identify a winner

### Frequent Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged
- To view my score at the end and be able to compare it to other scores

The facilitator:
- To view the scores of the users without having to do the quiz myself
- To be able to identify a winner

- - -

## Design

### Wireframes

Wireframes were created for desktop, tablet and mobile (1200px, 758px, and 476px respectively). 

[User Selection Screen Section Wireframe in Mobile View](/assets/images/wireframes/index.html-mobile.webp)

[User Selection Screen Section Wireframe in Tablet View](/assets/images/wireframes/index.html-tablet.webp)

[User Selection Screen Section Wireframe in Desktop View](/assets/images/wireframes/index.html.webp)

[Username Section Wireframe in Mobile View](/assets/images/wireframes/username.html-mobile.webp)

[Username Section Wireframe in Tablet View](/assets/images/wireframes/username.html-tablet.webp)

[Username Section Wireframe in Desktop View](/assets/images/wireframes/username.html.webp)

[Quiz Section Wireframe in Mobile View](/assets/images/wireframes/game.html-mobile.webp)

[Quiz Section Wireframe in Tablet View](/assets/images/wireframes/game.html-tablet.webp)

[Quiz Section Wireframe in Desktop View](/assets/images/wireframes/game.html.webp)

[Game Over Section Wireframe in Mobile View](/assets/images/wireframes/game.html-mobile.webp)

[Game Over Section Wireframe in Tablet View](/assets/images/wireframes/game-over.html-tablet.webp)

[Game Over Section Wireframe in Desktop View](/assets//images/wireframes/game-over.html.webp)

[Hall of Fame Section Wireframe in Mobile View](/assets/images/wireframes/high-scores.html-mobile.webp)

[Hall of Fame Section Wireframe in Tablet View](/assets/images/wireframes/high-scores.html-tablet.webp)

[Hall of Fame Section Wireframe in Desktop View](/assets/images/wireframes/high-scores.html.webp)

[Instructions Section Wireframe in Mobile View](/assets/images/wireframes/instructions.html-mobile.webp)

[Instructions Section Wireframe in Tablet View](/assets/images/wireframes/instructions.html-tablet.webp)

[Instructions Section Wireframe in Desktop View](/assets/images/wireframes/instructions.html.webp)



### Colour

![THE ULTIMATE QUIZ COLOUR PALETTE](/assets/images/colour-palette.webp)

[Also available as Coolors palette](https://coolors.co/1d110f-a37451-0e0807-8b5f48-67442c)

I have chosen the above colour palette from Coolors, which was generated based on the background image I used. However, I have slightly modified some of the shades in order to conform with the contrast ratio (see [Feedback](#feedback)). 

### Font

 The font I have chosen to use for this project is one called Poppins, which is part of the Sans Sarif family. It can be found [here](https://fonts.google.com/specimen/Poppins). I chose the 'Light 300' weighting as I felt that it would stand out a little more than the 'thin' preset. 

### Images

There is only one image used in the Virtual Pub Quiz, which serves as a background image relevant to the theme. The author is noted and is available to view in the [Credits](#credits) section.

## Features

### Sections

It's important to note here that the Virtual Pub Quiz is contained on a single page that is separated into different sections, each hidden and displayed, or toggled, by the user (see [Functions Explained](#functions-explained) for details on how the toggle works).

#### User Selection Screen section

![User Selection Screen](/assets/images/am-i-responsive-index.webp)

This is the first section the user is presented with. It has three buttons that, based on user input, will take the user to one of three sections: Username, Instructions or Hall of Fame. 

#### Username section

![Username Screen](/assets/images/am-i-responsive-username.webp)

This section is where the user enters a username and a room code. Both are input boxes and subject to validation to ensure the username is between 3 and 10 characters long and that the room code is numeric. In practice, the room code will be available from the facilitator. The user can either choose to return to the main menu or submit the username and room code.

#### Quiz section

![Quiz Screen](/assets/images/am-i-responsive-quiz.webp)

The Quiz section is where the user is asked a question and is given four possible answers to choose from. Only one of them is correct. Guessing the correct answer will cause the score to increment by 10 and the answer to be highlighted green while guessing the incorrect answer will cause the chosen answer to be highlighted red and the correct answer to be highlighted yellow. Once an answer has been selected, the 'Next' button will appear. Clicking this button will cause the next question to be called from the API. This will continue until the array has reached the question limit. At any time, the user may return to the main menu.

#### Game Over section

![Game Over Screen](/assets/images/am-i-responsive-game-over.webp)

Once the user has reached the question limit, the questions will no longer be displayed. All sections will hide, and the game Over section will display that will tell the user their final score. The user will be presented with two options: Return to the main menu or save their score into the Hall of Fame. 

#### Hall of Fame section

![Hall Of Fame Screen](/assets/images/am-i-responsive-scores.webp)

The Hall of Fame section lists all saved scores. They are sorted first by Room Number and then by score. Grouping the scores by room number first makes it easier for the facilitator to see who won the round. The user can then go back to the main menu by selecting the button, and they are taken back to the User Selection Screen section.

#### Instructions

![Instructions Screen](/assets/images/am-i-responsive-instructions.webp)

This section gives the user a set of instructions on how to play the quiz. The user has the option to return to the main menu. 

#### 500 page

![500 page](/assets/images/five-hundred-error.webp)

This is a seperate script to index.html. It should only be shown to the user if and when the connection to the API fails or times out. The user is presented with a button that directs back to the homepage.

#### 404 page

![404 page](/assets/images/four-hundred-four-error.webp)

This is a seperate script to index.html. It should only be shown to the user if and when they are directed to a page that does not exist, although I do not expect this tp occur even accidentally since the project is only on one page. The user is presented with a button that directs back to the homepage.





## Accessibility

I have been mindful during coding to ensure that the website is as accessible and friendly as possible. I have achieved this by:

- Using alternative text for interactive elements within the project
- Using an accessible colour palette
- Using a clear, accessible navigation system throughout that is guided by the user
- Using semantic scripts
- Using a good contrast ratio that passes contrasting tests (see feedback on previous projects for further information)

### WAVE Report

I have used [WebAIM's WAVE report](https://wave.webaim.org/) to assess the accessibility of my project against set guidelines. There were no errors and was deemed accessible with two alerts, one relating to no detection of a navigation bar (which I did not include, see [Justifications and reflections](#justifications-and-reflections)) and that I had underlined the word 'Instructions' on the Instructions section. I have removed this underline from the final version. For reference please see the WAVE report below:

![Summary](/assets/images/accessibility/wave-report-summary.webp)

![Details](/assets/images/accessibility/wave-report-details.webp)

![Structure](/assets/images/accessibility/wave-report-structure.webp)

![Underline](/assets/images/accessibility/wave-report-underline.webp)

![Contrast](/assets/images/accessibility/wave-report-contrast.webp)

### Contrast Ratio

As part of my drive to make sure this project is as accessible as possible, and to act upon feedback from previous project, I have used [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/bookmarklet). I have used this tool to test the Coolers template I used after it failed the contrast ratio tests to improve upon the contrast of background/foreground colours and ran the test again, which passed (see Justifications > Background Colour)



## Justifications and reflections

-  **Play Again** -  I had originally intended on creating a Play Again option to be presented on the game Over modal. However, I decided not to include this function in the final version of the product due to conflicts with the user story of the facilitator. This was intended to be a virtual pub quiz, and in a pub quiz, the participants are not generally allowed to submit their answers twice. Therefore, I have not included this option. However, it should be noted here that there must be a certain level of trust that the user will not start the quiz again but with a different username, just as there is a level of trust that the participants in a face-to-face will not confer with one another. There is no way to mitigate this risk further.  

-  **Hall Of Fame list** - In an earlier version of the project, I had a function that would allow the user to display all scores either by Room Number or Score by selecting from a drop-down menu and clicking a submit button. However, I later opted, out of personal preference and simplicity for the user, to create a function that groups the high scores by room and then sorts by score automatically in descending order. That means that both the facilitator and user stories are still met; easy to see who scored the most out of the room for the facilitator, and the players being able to see the top player easily which also meets their user stories. 

- **Separate pages for each section** - I did not include a page per section as I'd seen others do whilst doing some research and as per my original designs. This was purely a choice of personal preference; I wanted to create something unique and hadn't seen a quiz done on a single page in my research. In hindsight, it may have been easier to create this project using separate pages, particularly for my Hall of Fame section (as described above). My mentor had approved of this idea during one of our conferences. 

- **Facilitator login system** - Although I did not include these in my original designs, I had hoped to create a login for the facilitator so that they could create a room and then start it when all participants were ready. However, after speaking to my friend (the pub owner), they highlighted that while it was a good idea in principle, in application, it could prove to cause other issues. For one, it would require that the facilitator always had a live and stable internet connection, always had login details to hand and that they would have the knowledge to create a room. In addition, they highlighted concern with the fact that all participants would need to indicate they were ready before the facilitator started the room, which again assumed that all participants would be IT-savvy and have no internet connection issues. With all of these points in mind, I decided to omit that function completely and instead opted for a way in which all user stories would be met and that addressed all these points.

- **Lack of multimedia** - I have intentionally omitted any additional media from this project for several reasons:

1) As this quiz was designed for a real purpose with a real-world application, I had to take into account the environment in which it would be used. With that in mind, it's very unlikely that the pub user would be able to hear any background sounds due to the background noise generally associated with a pub setting.

2) It would be unreasonable to expect a pub user, who may be sharing an internet connection with all other pub users or on a limited data plan, to watch a video or have a background sound that would increase the bandwidth needed / date used, however small.

3) I did not find there was a need for any multimedia since the user stories were all met without and were not part of any of the assessment criteria. 

- **Background colour** - While this point is relatively minor, I feel it necessary to point out that I did not intend to use brown as a background for the user screen and user screen container, as well as the answer buttons. However, the colour palette was suggested by Coolors based on the background image I'd already selected, and because my eyes don't see contrasts and shades well, I felt it important to rely on that suggestion. However, it should be noted that I have also taken the advice of [WebAim](https://webaim.org/resources/contrastchecker/bookmarklet), which advised me that the Coolors palette was not accessible in its current form, and so I have modified the palette slightly so that it passed all tests (see [Feedback from previous projects](#feedback-from-previous-projects)).

- **Difficulty** - Most of the quizzes I'd seen during my research incorporated a difficulty setting where the user could decide on which level they would like to be challenged. I have decided not to include this function. I wanted to keep this project as close to a traditional pub setting as possible, and during a standard pub quiz, a pub user cannot choose the difficulty. While admittedly a bit of a risk, I consulted with my friend - the end user - and they agreed that we should not include a difficulty setting due to fairness (where it would not be fair to name a winner who has completed an easier quiz than the others). Instead, the questions would be of varying difficulty across all twenty questions. 

- **Navigation bar** - I have chosen not to conform to a standard navigation bar that a user would generally expect to find on a typical website, the reason being that this project, as a quiz, was designed with the elements in mind that a user would find on almost any interactive quiz. Therefore, the navigation across the quiz comes from buttons that display the relevant sections. So in essence, the buttons are the navigation.

- - -

## Technologies Used

|      Programme / feature      |   Technology used                                                                         | 
| ------------------------      | -------------------                                                                       | 
|  Languages                    | HTML and CSS                                                                              |
|  Framework                    | [Bootstrap version 5.3](https://getbootstrap.com/docs/5.3/)                               |
|  Colour Scheme                | [Coolors](https://coolors.co/?home/)                                                      |
|  Contrast Ratio               | [webAIM](https://webaim.org/)                                                             |
|  Accessibility (WAVE report)  | [webAIM](https://webaim.org/)                                                             |
|  Fonts                        | [Google Fonts](https://fonts.google.com/)                                                 |
|  **Images**                   |                                                                                           |
|                               |                                                                                           |
|  *Images*                     | [Pexels](https://www.pexels.com/)                                                         |
|  *Image Compression tools*    | [Image Resizer](https://imageresizer.com/)                                                |
|  *Image editing*              | [Image Resizer](https://imageresizer.com/)                                                |
|  *Responsiveness testing*     | [Am I Responsive?](http://ami.responsivedesign.is/)                                       |
|                               |                                                                                           |
|  Version control              | Git                                                                                       |
|  IDE / file storing           | [VS Code](https://code.visualstudio.com/)                                                 |
|  Wireframes                   | [Balsamiq](https://balsamiq.com/)                                                         |
|  HTML Code Validation         | [W3C Schools](https://validator.w3.org/)                                                  |
|  CSS Code Validation          | [W3C Schools](https://validator.w3.org/)                                                  |
|  JavaScript Code Validation   | [JS Hint](https://jshint.com/)                                                            |
|  Developer Tools              | Chrome Developer Tools                                                                    |
|  HTML Formatting              | [Free Formater](https://www.freeformatter.com)                                            |
|  CSS Formatting               | [Free Formater](https://www.freeformatter.com)                                            |
|  JavaScript Formatting        | [Free Formater](https://www.freeformatter.com)                                            |

- - -

## Deployment & Local Development

### Deployment

The Ultimate Virtual Pub Quiz was made live through GitHub. This is how to deploy:

1. Log in (or sign up) to GitHub.
2. Find the repository for this project, Dan-Matthews-23/the-ultimate-virtual-pub-quiz.
3. Click on the Settings link.
4. Click on the Pages link in the left-hand side navigation bar.
5. In the Source section, choose main from the drop-down select branch menu. Select Root from the drop-down select folder menu.
6. Click Save. Your live GitHub Pages site is now deployed at the URL shown.

### Local Development

### How to Fork

To fork this repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Dan-Matthews-23/the-ultimate-virtual-pub-quiz.
3. Click the Fork button in the top right corner.

### How to Clone

To clone this repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Dan-Matthews-23/the-ultimate-virtual-pub-quiz.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please see [Testing Readme](/TESTING.md) for all testing for this project

## Feedback

### Peer Feedback

I have worked closely with my peers on testing this product rigorously for any errors. The feedback is as follows:

1) How many questions do you have on your quiz? I've got to four, and the game just stops with no errors or alerts

2) When you get the correct answer, it changes to just 40, and then you click next and get a score of 40. It might be better to keep the score alongside the number when the answer is correct.

3) Your scores aren't working when I completed the quiz

4) On your instructions on mobile, use overflow: scroll

5) Your back-to-main menu buttons are giving me a 404 error

6) What happens if there's a draw? Should you not have a bonus round?

### Responding to Peer Feedback

I have taken the following actions in response to feedback:

1) For this particular error, I have used a function I found on  [Go Make Things](https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/). It puts the value of the correct answer into a blank text box and then pulls it back out in order to format or decode the value of the variable. 

2) I have amended the increaseScore function output to return score: ${score} rather than just the value of the score. 

3) I have re-designed the game Over modal to include a final high score which is clear

4) I have corrected the issue with the main container that was causing the content to spill out 

5) I have amended the code where ordinarily the user would be directed to ("index.html"), which is designed for localhost, not for external hosting

6) Some facilitators allow joint winners in a standard pub quiz. Also, I spoke to my friend (the pub owner) about this, who said that facilitators often come prepared with activities rather than questions in the event of a tie. With this in mind, I felt it important not to take away that option, and so I have not acted upon this feedback. 

### Feedback from previous projects

I received several pieces of feedback on my Heart Helpers project from my facilitators. These were:

1) Background and foreground are clear and easy to read; however, <u>in the future, the contrast ratio could be cross-checked during the design stage. (alt text has been used in the code)</u>

2) There are fewer spaces or capitalisation in the file <u>cross check for future development</u>

3) Clearly evidence the testing process for both unit testing and final usability testing. Test logs are included in the readme file to access functionality, usability and responsiveness. <u>For further development, do include screenshots of the actual result of tests</u>

4) Learners have presented code that is well-organised and easy to follow. The finished project has a clear, well-defined purpose addressing the needs of a particular target audience.  <u>For further development, make use of code and screenshots in the readme file for development stages</u>

5) Some documentation has been completed throughout development, as shown in the readme, although further and detailed documentation is required 

### Responding to feedback from previous projects

I have taken the following actions in response to feedback:

1) Because I am partially colour-blind, I've had to build this project using a tool called [WebAIM](https://webaim.org/resources/contrastchecker/bookmarklet) to aid me in checking the contrast ratio. I continue to use alternative text. However, I have also made the following adjustments to my Coolers template. The adjustments pass all validator tests and can be found in the Design section:

- Answer Buttons: Background: #9A6A4C, text: #FFFFFF

![678px ratio](/assets/testing/contrast-ratio-a.webp)

- Game Over Modal: Background: #1D110F, text: #a37451

![678px ratio](/assets/testing/contrast-ratio-b.webp)

 - Score Section: Background: #1D110F, text: #a37451

 ![678px ratio](/assets/testing/contrast-ratio-c.webp)

 I have also included a WAVE report, which passes all tests.

2) I have ensured that every filename contains no numbers, capital letters or underscores. Each file has been placed in an appropriate folder, and I've ensured each file is named correctly and appropriately. 

3) I have ensured that along with details of all of my testing, I've included as many before and after screenshots as possible. In some cases, it wasn't always possible to include both, but these tests are clearly marked with justification

4) Throughout the testing stages, I have included snippets of code along with screenshots of visual output of that code. 

5) I have attempted to be as thorough as possible throughout the development of this project.

### Other Feedback

My mentor - Harry - suggested that instead of creating four separate HTML documents as planned in my wireframes, I create one single page and then use Javascript to hide and show the sections I want. To that end, I have created a series of Event Listeners that will execute blocks of code when the correct button is clicked. In this context, it will show/hide parts of the page since the entire product exists in one document. It was also suggested that I add a second Return to Main Menu button that did not form an alert once it was clicked on pages such as Instructions (where the user is informed they will lose progress if clicked, but there is no progress to lose on this page). I have added this button as one of the last additions to this project.

- - -

## Functions Explained

The following section will explain in detail how each function works. All functions can be found in /assets/js/script.js. This section has been written with the aid of [Google Bard](https://bard.google.com/) and checked thoroughly for errors. 

|      Function   |   Explanation    |
| ------------    | ------------     |
|  connectAPI()   |  The JavaScript function connectAPI() is an async function that makes a request to the API specified by the apiURL parameter. The function first uses the fetch() method to make the request. The fetch() method returns a promise, which is a special object that represents the eventual result of an asynchronous operation. The connectAPI() function then uses the await keyword to wait for the promise to be resolved. Once the promise is resolved, the function checks the status code of the response. If the status code is between 200 and 299, the function parses the response as JSON and calls the getQuestionArray() function. Otherwise, the function redirects the user to the 500.html page. |
|  checkUsername()   |  The JavaScript function checkUsername() is a function that checks the validity of a username. The function first gets the value of the username input field using the document.getElementById() method. The value property of the getElementById() method returns the value of the element with the specified ID. Next, the function checks if the username is empty, less than 3 characters long, or more than 10 characters long using the following conditional statements: username.length === 0: This checks if the username is empty, username.length > 0 && username.length < 3: This checks if the username is more than 0 characters long but less than 3 characters long and username.length > 10: This checks if the username is more than 10 characters long. If any of the above conditions are met, the function displays an alert message that tells the user to enter a valid username. Otherwise, the function hides the username section and shows the quiz section. |
|  checkRoomCode()   |  The JavaScript function checkRoomCode() first gets the value of the room code input field using the document.getElementById() method. The value property of the getElementById() method returns the value of the element with the specified ID. Next, the function checks if the room code is less than 1, empty, or not an integer using the following conditional statements: roomCode < 1: This checks if the room code is less than 1, roomCode === "": This checks if the room code is empty and isNaN(roomCode): This checks if the room code is not an integer. If any of the above conditions are met, the function displays an alert message that says, "Please enter a valid room code". Otherwise, the function calls the checkUsername() function.  |
|  confirmReturn()   |  The JavaScript function confirmReturn() first uses the confirm() method to display a dialogue box with the message "Are you sure you want to return? You will lose all progress". The confirm() method returns a boolean value, true if the user clicks the OK button and false if the user clicks the Cancel button. Next, the function checks the value of the ConfRet variable. If ConfRet is true, the function uses the window.location.assign() method to redirect the user to the https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html page. Otherwise, the function does nothing  |
|  getQuestionArray()   |   The JavaScript function getQuestionArray() first gets the question from the connect.results array and sets it to the question variable. The connect.results array is an array of objects that contains the questions and answers for the quiz. The id variable is the index of the current question in the connect.results array. Next, the function sets the text of the question element to the value of the question variable. The question element is an HTML element that displays the question for the quiz. The function also updates the score and question number. The score variable stores the user's current score. The qID variable stores the number of the current question. Finally, the function calls the getAnswerArray() function. The getAnswerArray() function gets the answer choices for the current question and displays them on the page.  |
| retriveNextQuestion()    |   The JavaScript function retriveNextQuestion() first increments the id variable by 1. The id variable is the index of the current question in the connect.results array. Next, the function checks if the id variable is greater than or equal to the length of the connect.results array. If it is, the function displays a game over modal and hides the quiz section. Otherwise, the function calls the increaseQuestionNumber() function to update the question number. The increaseQuestionNumber() function increments the qID variable by 1. The function then calls the getQuestionArray() function to get the question for the next question. The getQuestionArray() function gets the question and answer choices for the current question and displays them on the page. Finally, the function hides the next button to prevent the user from moving to the next question before answering the current question.  |
| getAnswerArray()    | The JavaScript function getAnswerArray() first gets all of the answer elements on the page using the document.querySelectorAll() method. The querySelectorAll() method returns a collection of elements that match the specified selector. Next, the function gets the correct answer and incorrect answers for the current question from the connect.results array. The connect.results array is an array of objects that contains the questions and answers for the quiz. The function then concatenates the correct answers and incorrect answers into a new array. This is done so that the correct answer can be shuffled with the incorrect answers. The function then shuffles the new array using the shuffle() function. The shuffle() function randomly reorders the elements in an array. Finally, the function loops through the answer elements and sets their text, background colour, and disabled state. The text of each answer element is set to the corresponding element in the shuffled array. The background colour of each answer element is set to white. The disabled state of each answer element is set to false. The confirmAnswer() function is also attached to each answer element so that the user can click on it to submit their answer.    |
| shuffle()    | The JavaScript function shuffle() randomly reorders the elements in an array. The function takes an array as its input and returns the shuffled array. The function works by first getting the length of the array. Then, it loops through the array from the end to the beginning. For each iteration, the function generates a random number between 0 and the current index. The function then swaps the element at the current index with the element at the randomly generated index. This process is repeated until all of the elements in the array have been swapped.    |
|confirmAnswer()    |  The JavaScript function confirmAnswer() is used to submit an answer to a quiz question. The function takes an element as its input and returns nothing. The function works by first decoding the HTML entities in the selected answer and the correct answer. This is done so that the function can compare the two answers without any special characters. Next, the function checks if the selected answer is equal to the correct answer. If it is, the function sets the background colour of the selected answer to green and displays a message to the user that they answered correctly. The function also disables all of the answer buttons so that the user cannot change their answer. If the selected answer is not equal to the correct answer, the function sets the background colour of the selected answer to red and displays a message to the user that they answered incorrectly. The function also displays the correct answer in orange and disables all of the answer buttons.   |
| increaseScore()    | The JavaScript function increaseScore() is used to increase the score of the user by 10 points. The function takes no input and returns nothing. The function works by first incrementing the score variable by 10. Then, the function sets the text of the scoreCounter element to the new score.    |
| increaseQuestionNumber()    |  The JavaScript function increaseQuestionNumber() is used to increase the question number by 1. The function takes no input and returns nothing. The function works by first incrementing the qID variable by 1. Then, the function sets the text of the questionCounter element to the new question    |
| addHighScore()    | The JavaScript function addHighScore() is used to add a high score to the local storage. The function takes the username, room code, and score as input and returns nothing. The function works by first getting the existing high scores from local storage. If there are no existing high scores, the function creates an empty array. Next, the function generates a unique player ID by incrementing the length of the existing high scores array by 1. The function then creates an object with the following properties: playerID, The unique player ID, playerName: The username of the player, playerHighScore: The score of the player and then playerRoom: The room code of the quiz. The function then pushes the object into the existing high-score array. Finally, the function sorts the existing high scores array in descending order based on the player's high scores. The function then saves the sorted high scores array to local storage.    |
| displayHighScore()    |  The JavaScript function displayHighScore() is used to display the high scores in the DOM. The function takes no input and returns nothing. The function works by first getting the existing high scores from local storage. If there are no existing high scores, the function creates an empty array. Next, the function sorts the existing high scores array in descending order based on the player room or player high score if the player rooms are the same. The function then gets the element that will contain the high scores table. Finally, the function uses the map() method to iterate through the existing high scores array and create a string of HTML code for each high score. The function then sets the inner HTML of the high scores table element to the string of HTML code.   |

- - -

 ## Future Developments

There are several improvements I would like to make to Heart Helpers in the future when my knowledge and experience are improved.

|      Page     |   Future Development Ideas  | Reason not added in this release  |
| ------------  | ------------                |                                   |
| index.html    |  Facilitator Login System   | I would like to see a login system for the facilitator in future development, although this can only work by using a server-side script, probably Python, in conjunction with SQL. It would not work on this project in its current form, and I don't believe there is a way to do this using only client-side scripts.                                  |

- - -

## Credits

I've spent a long time researching different quizzes and websites for inspiration for my own project. Ultimately, I decided to create a pub quiz after taking inspiration from that of [Kera Cudmore](https://github.com/kera-cudmore/TheQuizArms). I reached out to my friend, who is the manager of a pub, to consult on what should be the aims and user stories of this project and to align it with as much of a real-life application as possible. It is my intention to share this product with the pub manager for use so that they might give feedback for future developments. 

### W3 Schools

The vast majority of coding I have learned for this project has come from [W3 Schools](https://www.w3schools.com). A few examples of this are [local storage](https://www.w3schools.com/jsref/prop_win_localstorage.asp), the theory behind [async functions](https://www.w3schools.com/js/js_async.asp) and [innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp).

### Code Pen

After my mentor advised me to use EventListeners, I studied online material to learn how to do this. Code Pen taught me how to successfully use EventListners. The article can be found [here](https://codepen.io/mohdizz/pen/VweZBQO)

### Pexels

I have used one image in this project, which can be found at Pexels, credits to [Marcus Herzberg](https://www.pexels.com/photo/group-of-people-gathering-inside-bar-1058277/)

### Content

Content for the website was written by Dan Matthews.

### Code Used

There are two sections of this project where the code has been taken directly from other sources. These have been clearly identified in the script. 

#### function shuffle()

![shuffle function](/assets/images/shuffle-function-code-used.webp)

This function can be found at its source [here](https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/)

#### async function connectAPI()

![connectapi function](/assets/images/api-connect-function-code-used.webp)

The source of this code is a book. See below in the Acknowledgements for further details.

- - -

## Acknowledgments

Finally, I want to take the opportunity to thank and acknowledge the following for their support and patience in helping me create my first-ever project:

- Kera Cudmore, whose project gave me the inspiration I needed for my own project, and her useful tips and advice along the way.
- Craig Hudson, who has helped me in this project with testing and his technical troubleshooting
- Ross Epsley, who has provided me with technical troubleshooting along the way  
- [Harry Dhillon](https://github.com/Harry-Leepz), who is my mentor at the Code Institute, for their continued support and guidance. 
- Kofi Afriyie, who is my facilitator from West Herts College, for their time, patience and encouragement in helping me develop this project. 
- Chris Minnick, who is the author of JavaScript ALL-IN-ONE for dummies (which can be found on [Amazon](https://www.amazon.co.uk/JavaScript-All-Dummies-Chris-Minnick/dp/1119906830)). It was from Chris that I learned how to connect to an API (lines 70 - 86 in script.js), and I have based my code upon that template. 
- James Q. Quick, whose video (which can be found [here](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10)) taught me how to utilise local storage, which was an integral part of this project

- - -
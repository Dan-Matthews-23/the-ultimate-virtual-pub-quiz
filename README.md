# Contents
- [The Ultimate Pub Quiz](#the-ultimate-pub-quiz)
  - [User Experience (UX)](#user-experience)
    - [Background](#background)
    - [Key information](#key-information-for-the-site)
    - [User Goals](#user-goals)
    - [First Time Visitor Goals](#first-time-visitor-goals)
    - [Returning Visitor Goals](#returning-visitor-goals)
    - [Frequent Visitor Goals](#frequent-visitor-goals)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Colour](#colour)
    - [Font](#font)
    - [Images](#videos)
  - [Features](#features)
    - [Header](#header)
    - [Footer](#footer)
    - [Home Page](#home-page)
    - [Get Involved](#get-involved)
    - [Contact Us](#contact-us)
    - [Thank you](#thank-you)
    - [Testimonies](#testimonies)
  - [Accessibility](#accessibility)
  - [Reflection](#reflection)
    - [Design](#design)
  - [Technologies Used](#technologies-used)
  - [Deployment and Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
    - [How to fork](#how-to-fork)
    - [How to clone](#how-to-clone)
  - [Testing](#testing)
    - [Solved Bugs](#solved-bugs)
    - [Known Bugs](#known-bugs)
    - [Peer Feedback](#peer-feedback)
    - [Validation and formatting](#validation-and-formatting)
    - [Testing User Stories](#testing-user-stories)
  - [Future Developments](#future-developments)
  - [Credits](#credits)
    - [Content](#content)
    - [Code Used](#code-used)
  - [Acknowledgments](#acknowledgments)

  - - -

  ## The Ultimate Pub Quiz

![Am I responsive](/assets/images/responsive.png)

[View The Ultimate Pub Quiz on Github](https://dan-matthews-23.github.io/java-project/)

The Ultimate Pub Quiz is an exciting development designed specifically for pub users and activity coordiators. Based on the principles of a "traditional Friday night pub quiz", the Ultimate Pub quiz is a way of having that same fun, only without the hastle of organising it. 

## User Experience
### Background

The Ultimate Pub Quiz is designed for pub users and activity coordinators and is a way for all participants to enjoy the same experience of a traditional pub quiz. It's an online quiz that users can access by using a range of devices, although they will be limited to smart devices (e.g. laptops. tablets, smart phones).

This quiz has been developed based on a real need - a good friend who is also a pub landlord  - for an exciting experience without the hastle of having someone try to organise it. 

The quiz has several aims:

- Engage pub users
- Suitabily challenge users
- Respond to user input
- Provide feedback
- Provide a final score. 
- Display record of previous high scores 

### Key information

- A 'How to play' section, which will give users instructions on how to play the game
- A 'High Scores' section, which will display a list of the highest scores in descending order
- The quiz itself

### About the user

This project has been designed with two end users in mind:

- The pub user, who is the user participating in the quiz. They will be able to access the quiz via a smart device through their own internet or Wifi of the premises, if they have it. Part of the 'How to Play' instructions will be guiding users how to switch on their device wi-fi, or hotspot to another device. They will be given a 'Room ID' that they must enter along wth their name when they join the quiz. They will be given the Room ID by the faciltator. The instructions will need to be clear. 

- The organiser, who is the person who will be facilitating the event. They will already have facilitator login details and will be able to create a 'room' for the users to join. They will have the option to start the quiz once a certian number of users have joined the room. The login system will need to be quick and simple, and must give the facilitator control over starting the quiz, although ending the quiz will be automated and pausing will not be an option. 

### User Goals
The pub user:

- To receive the same user experience on multiple devices
- To read instructions that are simple to understand
- To be challenged across a range of questions
- To see my score once the quiz is over
- To compare my score with other people's scores


The facilitator:
- To be able to log on and create a 'room'
- To start the quiz at my discresion
- To see the results of the users in the room once finished
- To easily identify a winner amongst users in the room


### First Time Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged in the right way (questions not too easy or too hard) ((!! Will solve this by choosing range of questions from range of topics))
- To view my score at the end, and be able to compare to other scores

The facilitator:
- To create a 'room' for the users to join
- To start the quiz
- To collate scores of the users


### Returning Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged in the right way (questions not too easy or too hard)
- To not be given the same questions as I had on the last quiz, as this will present less of a challenge
- To view my score at the end, and be able to compare to other scores

The facilitator:
- To create a 'room' for the users to join
- To start the quiz
- To collate scores of the users

### Frequent Visitor Goals

The pub user:
- To take part in an online virtual pub quiz
- To be challenged in the right way (questions not too easy or too hard)
- To not be given the same questions as I had on the last quiz, as this will present less of a challenge
- To view my score at the end, and be able to compare to other scores

The facilitator:
- To create a 'room' for the users to join
- To start the quiz
- To collate scores of the users

- - -

## Design

### Wireframes

Wireframes were created for desktop, tablet and mobile (1200px, 758px, 476px respectively).

[Home Page Wireframe in Mobile View](/assets/images/wireframes-index-mobile.webp)

[Home Page Wireframe in Tablet View](/assets/images/wireframes-index-tablet.webp)

[Home Page Wireframe in Desktop View](/assets/images/wireframes-index-desktop.webp)


[About Us Page Wireframe in Mobile View](/assets/images/wireframes-aboutus-mobile.webp)

[About Us Page Wireframe in Tablet View](/assets/images/wireframes-aboutus-tablet.webp)

[About Us Page Wireframe in Desktop View](/assets/images/wireframes-aboutus-desktop.webp)


[Get Involved Page Wireframe in Mobile View](/assets/images/wireframes-getinvolved-mobile.webp)

[Get Involved Page Wireframe in Tablet View](/assets/images/wireframes-getinvolved-tablet.webp)

[Get Involved Page Wireframe in Desktop View](/assets/images/wireframes-getinvolved-desktop.webp)

### Colour

![THE ULTIMATE QUIZ COLOUR PALETTE](/assets/images/colour-palette.webp)

[Also available as Coolors palette](https://coolors.co/1d110f-a37451-0e0807-8b5f48-67442c)

I have chosen the above colour palette for the Heart Helpers website because I wanted to use a palette that was easy for the users to see. I did research on what colours would be the most accessible to use. [The Office for National Statistics](https://style.ons.gov.uk/data-visualisation/using-colours/accessibility-and-colours/) suggest three helpful rules to consider when creating accessible websites:

- “Get it right in black and white”

- “The safest hue is blue”

- “Red and green should never be seen”

To that end, I have chosen a mixture of black and white font, and primarily a mixture of deep red with orange to break up sections of the pages. I've kept these colours a darker shade so that the white font would be easily seen. I did struggle with the colour set. I'm partially colour blind myself which means I don't see shades of secondary or tertiary colours well at all. I've had to get feedback consistently on how easy the colours blended. I've also had a lot of support through the paid subscription of [Coolors](https://coolors.co/), which was recommended to me by a peer at the Code Institute. The service allowed me to create a colour scheme based on the image I uploaded, which really did help. Overall, I’m confident that I have chosen a colour scheme that is accessible that meets my design specification. 

### Font

The font I have chosen to use for Heart Helpers is one called Caveat. While this font type isn't considered to be the most easy to read, it serves a purpose, which is to mimic handwriting as closely as possible. It can be found [here](https://fonts.google.com/specimen/Caveat?preview.text=The%20Ultimate%20Pub%20Quiz&preview.text_type=custom). I chose the 'bold 700' weighting as I felt that it would look better for a title. 

### Images

All of the images used on the Heart Helpers website are from Pexels.com, and the icons are from Font Awesome and Flaticon. The authors are noted and are available to view in the #Credits section.

### Videos

There is one video in this project that was added as a late addition, which is an embedded YouTube video from the British Heart Foundation regarding Heart Attacks. 

## Features

### Header

My header will be comprised of the Heart Helpers logo (see above for images) that will also act as a hyperlink that will always bring the user back to the Home page. It will also contain the navigation bar which will change depending on the user's device.

### Footer

My footer will contain links to LinkedIn, GitHub, Facebook and Twitter. 



### Home Page

![Homepage Snippet](/assets/images/features-index-snip.webp)

My Home page will begin with the Next Event with a large image (see Images) and a block of text describing what the event is, with a button just below called 'Sign Up'. If clicked, the button will take the user to the Get Involved page so that they can sign up to this event. 

The next section will be a part of the Testimonies page, with part of one testimony. The user will be able to click to view more and be taken to the testimonies.html page




### Get Involved

![Get-Involved-Snippet](/assets/images/features-get-involved-snip.webp)

Get Involved will be where the user can sign up to the next event by using a form that captures (through POST) the user's name, email address and date of birth. There is also a 'Confirm Email' address and a date selection for the date of birth, although neither of them has validation assigned to it (see Future Developments).

There is also a checkbox with a 'I agree with the Terms of Service' label assigned to it. There will be no data validation assigned to this checkbox. The label will carry a hyperlink that will take the user to the Terms of Service page. The form once submitted will guide the user to a thank you page 




### Thank You

![Thank-You-Snippet](/assets/images/features-thank-you-snip.webp)

Thank You will be a very short page confirming that the registration is being processed. I am constrained in what I can do with this because of my lack of JavaScript knowledge, however I have documented this in Future Developments. It will also have on it an embedded information video from the British Heart Foundation Youtube Channel available [here](https://www.youtube.com/watch?v=bw_Vv2WRG-A)



### Contact Us

![Contact-Us-Snippet](/assets/images/features-contact-us-snip.webp)

The Contact Us page will be a form where the user inputs some of their information. The form will be a POST method and will take the user to a confirmation page. There will be a drop-down menu, checkbox, submit button and text boxes available. The form once submitted will guide the user to a confirmation page




### Message Sent

![Message-Sent-Snippet](/assets/images/features-message-sent-snip.webp)

The Message Sent is a confirmation page for the user that will inform the user that the message has been sent sucessfully. It will also have on it an embedded information video from the British Heart Foundation Youtube Channel available [here](https://www.youtube.com/watch?v=bw_Vv2WRG-A)




### Testimonies

![Testimonies](/assets/images/features-testimonies-snip.webp)

This page will be a collection of testimonies from previous volunteers and/or people who have benefited from Heart Helpers. 




## Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

- Using alternative text for all images throughout the Heart Helpers website
- Using an accessible colour palette and contracts suitable for all users
- Using an easy to access navigation bar that clearly highlights which page the user is currently viewing
- Where possible, using screen reading tools where there is no alternative text available and the user is presented with an important feature (e.g., button, icon)
- Using semantic scripts


## Reflection

### Design

Referring back to my original design ideas, the end result was slightly different to what I initially planned in the following ways:

- **Heart Helpers Logo** - I did not include a logo in my end result project as I originally planned for two reasons:
  1) I could not find an image that was appropriate to the colour scheme, related to the theme of the project and could be scaled for responsiveness.
  2) After doing some research on other websites, I deemed it was not essential for a logo to be present on the website, since it did not affect the end user. 


- **Contact Us** - I originally planned to have the contact details for all twelve branches on the website, however I felt that it was too much information for the user to absorb. Instead, I integrated a drop-down menu into the Contact Us page so that a message could be sent to the local branch the user selects (obviously with added JavaScript and/or Python which I don't know at this point).


- **Responsiveness.** - My ideas for responsiveness across the pages was limited to what I knew at that point. I planned for Bootstrap to do most of the work, however I chose to use only a small portion of bootstrap for several reasons: 
  1) I wanted to exert as much creative control over my project as possible
  2) Bootstrap is either limited in what it can do, or I lacked the knowledge to use it properly. 

  Instead, I used Media Queries to do the things that I wanted Bootstrap to do, which I feel was a good choice to make as it gave me a great deal of flexibility. 

  - **About Us, Previous Events** - I originally planned to have an About Us and Previous Events page alongside my end result pages, however I was advised by my mentor that the requirements for a pass is three pages, and advised me to write these pages only if I had time. Unfortunately, I did run out of time, but I would add these pages at a later date if I had the time. 

  - **Confirm Sign-Up, confirmation email** - I had planned to integrate a 'method="POST"' function to the user form on the Get Involved and Contact Us pages that would take the user to another page that confirmed the user's name and send them a confirmation email as well as check their age. I chose not to do that for the following reasons:
  1) I ran out of time to learn how to code a user form to send an automated email to the address the user supplies. I am confident that this will not take long to learn, however to make sure it works well and is fit for purpose, this should be added to the list of future developments. Instead, I created a simple 'thankyou' page that the user should be directed to.
  2) The 'POST' element to the form would not work, and would not take the user to the confirmation page. I contacted Tutor Support who told me that the 'POST' function will not work unless I code it with JavaScript or a server-side language. They advised me to remove the 'method="POST' part completely and have only action="thankyou.html", which I did. 

  **Elements not included**
  I have chosen not to include any videos or audio in my project, simply because Heart Helpers is a fictional organisation and there is no material available that would be appropriate to include. I perhaps could have contacted the British Heart Foundation to ask for permission to use a promotional video, but due to the time constraints on this project that wasn't possible. If I were going to create this project for a client, I would ask for all promotional material (which could include YouTube videos, audio clips, multimedia) before I finalised the project so I could include it. I do feel as though a video about the facts of heart disease could have helped the end user and it is something I would include if I were to add future developments.
  **EDIT: A video has now been included in the latest addition of the project. Please see Peer Feedback for more information** 

- - -

## Technologies Used

|      Programme / feature      |   Technology used                                                               | 
| ------------------------      | -------------------                                                             | 
|  Languages                    | HTML and CSS                                                                    |
|  Framework                    | [Bootstrap version 5.3](https://getbootstrap.com/docs/5.3/)                     |
|  Colour Scheme                | [Coolors](https://coolors.co/?home/)                                            |
|  Fonts                        | [Google Fonts](https://fonts.google.com/)                                       |
|  **Images**                   |                                                                                 |
|                               |                                                                                 |
|  *Icons*                      | [Font Awesome](https://fontawesome.com/) and [Flaticon](https://www.flaticon.com/)     |
|  *Image Compression tools*    | [Image Resizer](https://imageresizer.com/)                                                |
|  *Image editing*              | [Image Resizer](https://imageresizer.com/)                                                  |
|  *Responsiveness testing*     | [Am I Responsive?](http://ami.responsivedesign.is/)                             |
|            |                                               |
|                               |                                                                                 |                                                                            
|  Version control              | Git                                                                             |
|  IDE / file storing           | [Gitpod](https://gitpod.io/), [Code Anywhere](https://app.codeanywhere.com/)  and [VS Code](https://code.visualstudio.com/)|
|  Wireframes                   | [Balsamiq](https://balsamiq.com/)                                               |
|  Code Validation              | [W3C Schools](https://validator.w3.org/)                                        |
|  Developer Tools              | Chrome Developer Tools                                                          |
|  Code Formatting              | [Free Formater](https://www.freeformatter.com/html-formatter.html)                                                          |

- - -

## Deployment & Local Development

### Deployment

The Heart Helpers website was made live through GitHub. This is how to deploy Heart Helpers again:

1. Log in (or sign up) to GitHub.
2. Find the repository for this project, Dan-Matthews-23/heart-helpers.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live GitHub Pages site is now deployed at the URL shown.

### Local Development

### How to Fork

To fork the Heart Helpers repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Dan-Matthews-23/heart-helpers.
3. Click the Fork button in the top right corner.

### How to Clone

To clone the Heart Helpers repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Dan-Matthews-23/heart-helpers.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

The project was built using Google Chrome and tested through Chrome Developer Tools. All elements were then tested with Firefox, Microsoft Edge and Safari (from my personal device). I have not tested the features using Internet Explorer as support ended for this browser on some operating systems in June 2022.

NOTE: USING RESIZER GO FOR 200PX WHEN ADDING TO TESTING

### Testing User Stories

| User Stories| Has this been achieved?     |   How?                                                               |  
|------------ | ------------                | ------------                                                         |




### Behaviour-Driven Development Testing (Manual testing)

| Test Number|      Page     |   Browser      |   Feature (by class/ ID / name)       | Result     |  Comments |  
|------------ | ------------  | ------------  | ------------                          |------------| ------------             | 
| 001         |  style.css    | Chrome        |  Media Query / user-screen title      | Fail       | The title font size did not reduce with screen size. Tested on two viewports: 1500px and 480px. However all media query tests failed despite several attempts 
| **Before**                                          |   **After**          ||||
| ![1500px ratio](/assets/testing/test-images/test-one-a.webp)      |![15480px ratio](/assets/testing/test-images/test-one-b.webp) |             | | |
| 002         |  style.css    | Chrome        |  Media Query / user-screen title      | Pass       | Following the result in Test 001 I decided to use a ViewPort method rather than Media Query and set this to '5VW'. This resolved the issue I had in Test 001. 
| **Before**                                          |   **After**          ||||
| ![1500px ratio](/assets/testing/test-images/test-two-a.webp)      |![480px ratio](/assets/testing/test-images/test-two-b.webp) |             | | |
| 003         |  script.js / index.html    | Chrome        |  function hideQuizSection() / div.quiz-section      | Fail       | A function built to hide the div.quiz-section on HTML when not active after studying the code on [W3 Schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp). I tried to send the output to console.log to find out why it wasn't working, however all tests failed
| **Before**                                          |   **After**          ||||
| ![1500px ratio](/assets/testing/test-images/test-three-a.webp) ![480px ratio](/assets/testing/test-images/test-three-b.webp)      | |             | | |
| 004         |  script.js / index.html    | Chrome        |  function hideQuizSection() / section.quiz-section      | Pass       | After test failures in Test 003 I researched other ways to make the function work. I added an 'OnClick()' element to the button to call the function once it was clicked. It passed all tests. However after speaking to my mentor, I decided to use an Event Listener instead (see Other Feedback, test 005)
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-four-a.webp) ![678px ratio](/assets/testing/test-images/test-four-b.webp) ![678px ratio](/assets/testing/test-images/test-four-c.webp)      | |             | | |
| 005         |  script.js / index.html    | Chrome        |  function hideQuizSection() / section.quiz-section      | Fail       | After following advice from me mentor I attemped to create an EventListener() function in place of the OnClick() function. The quiz-section displayed as expected but the other sections (specifically the user-selection-section) did not hide. Tests failed. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-five-a.webp) ![678px ratio](/assets/testing/test-images/test-five-b.webp) ![678px ratio](/assets/testing/test-images/test-five-c.webp)      | |             | | |
| 006         |  script.js / index.html    | Chrome        |  function showQuizSection() / section.quiz-section      | Pass       | After test failures in Test 005 I realised that .style.display="hide" is not a valid instruction. This should have been .style.display="none". After correcting, tests passed. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-six-a.webp) ![678px ratio](/assets/testing/test-images/test-six-b.webp) ![678px ratio](/assets/testing/test-images/test-six-c.webp)      | |             | | |
| 007         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | Following from successful results in Tests 005 and 006 I have replicated the code for each of the three sections: quiz-section, instructions-section and Hall-of-fame-section. The code passed all tests 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-seven-a.webp) ![678px ratio](/assets/testing/test-images/test-seven-b.webp) ![678px ratio](/assets/testing/test-images/test-seven-c.webp) ![678px ratio](/assets/testing/test-images/test-seven-d.webp)      | |             | | |
| 008         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | I asked my mentor if it was conventional to use the code from Test 007 to change the display of a HTML section in a JavaScript file. They said it was, but ideally I should be calliing a class and changing that rather than CSS. I researched how to do this on [W3 Schools](https://www.w3schools.com/howto/howto_js_remove_class.asp) and implemented it. The test passed first time. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-eight-a.webp) | ![678px ratio](/assets/testing/test-images/test-eight-b.webp)   ![678px ratio](/assets/testing/test-images/test-eight-c.webp)      | |             | | |
| 009         |  script.js / index.html    | Chrome        |  showQuizSection / showInstructions / showHallOfFame      | Pass       | I made amendments to the code from Test 008 to incorperate the user-selection and return-home sections. Below are the screenshots of each section as they are clicked. Note how other sections are hidden when the user has not selected them. However I am aware that these functions repeat, which is in breach of the [DRY principle ](https://www.digitalocean.com/community/tutorials/what-is-dry-development). I will further develop this at a later date
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-nine-a.webp) | ![678px ratio](/assets/testing/test-images/test-nine-b.webp)   ![678px ratio](/assets/testing/test-images/test-nine-c.webp) ![678px ratio](/assets/testing/test-images/test-nine-d.webp) ![678px ratio](/assets/testing/test-images/test-nine-e.webp)     | |             | | |
| 010         |  script.js / index.html    | Chrome        |  showQuiz section      | Fail       | I have created my own question array, however the function seems to be calling the last question in the data set rather than the first, and the buttons are not populating with the one correct and three incorrect answers. I have spent quite a bit of time researching this but still can't figure it out.
| **Before**                                          |   **After**          ||||

| ![678px ratio](/assets/testing/test-images/test-ten-a.webp) | ![678px ratio](/assets/testing/test-images/test-ten-b.webp)       | |             | | |
| 011         |  script.js / index.html    | Chrome        |  getQuestionArray      | Fail       | After trying to fix test 010, I tried to create a new function and call the question section to populate a new question. However the answers did not populate at all, and the question dissapeared. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-eleven-a.webp) | ![678px ratio](/assets/testing/test-images/test-eleven-b.webp)       | |             | | |
| 012         |  script.js / index.html    | Chrome        |  getQuestionArray      | Pass       | I realised that I was calling for the class, not the ID on question from index.html. Made changes and it worked.  
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twelve-a.webp) |       | |             | | |
 013         |  script.js / index.html    | Chrome        |  getQuestionArray      | Fail       | In an attempt to refine my code for calling the questions and to correct a long-standing error from Test 010, I attempted to re-write the function. However the questions did not populate, and the automated testing (via console) gave an error
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-thirteen-a.webp) |   ![678px ratio](/assets/testing/test-images/test-thirteen-b.webp) ![678px ratio](/assets/testing/test-images/test-thirteen-c.webp)    | |             | | |
 014         |  script.js / index.html    | Chrome        |  getQuestionArray      | Pass       | After case conferencing with a peer I realised that I was not correctly indexing the questions from the array. I should have been using 'connect.results[id].correct_answer;' instead of 'connect.results.correct_answer'. Made adjustments and passed all tests. Questions are now working
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-fourteen-a.webp) |       | |             | | |
 015         |  script.js / index.html    | Chrome        |  getScore      | Fail       | From console logs and alert boses I know that my score is compiling as planned, but I can't get a static score to show on index.html. Attempts to push the score value through via innerHTML are failing. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-fourteen-a.webp) |       | |             | | |
 016         |  script.js / index.html    | Chrome        |  getScore      | Pass       | After rewriting the calculaeScore function I have the score now working. I intentially made the text large and red at the top of the page so I could see when it was working properly. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-sixteen-a.webp)  ![678px ratio](/assets/testing/test-images/test-sixteen-b.webp) |       | |             | | |
 017         |  script.js / index.html    | Chrome        |  confirmAnswer      | Pass       | After almost twenty attempts, I have managed to get the function working so that it highlights the correct answer if the user selects an incorrect answer.  
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-seventeen-a.webp)  ![678px ratio](/assets/testing/test-images/test-seventeen-b.webp) |       | |             | | |
 018         |  script.js / index.html    | Chrome        |  user-screen-container      | Fail       | I wanted to set the background to a transparent brown. I used the opaque CSS setting, but it did not work as planned, as this was applied to all child elements even though I'd redeclared it in the other classes. Failed tests  
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-eighteen-a.webp)  ![678px ratio](/assets/testing/test-images/test-eighteen-b.webp) |       | |             | | |
 019         |  script.js / index.html    | Chrome        |  user-screen-container      | Pass       | Following test failures in Test 018, I did some research and discovered that what I wanted to do was not possible. On [Ww3 Schools] (https://www.w3schools.com/css/css3_colors.asp) I learned that I could convert the background colur to RGBA, where the 'alpha' part would determine the opacisty. The test passed all tests
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-nineteen-a.webp)  ![678px ratio](/assets/testing/test-images/test-nineteen-b.webp) |       | |             | | |
 020         |  script.js / index.html    | Chrome        |  showQuizSection     | Fail       | Test 009 indicated that my code was in breach of the [DRY principle ](https://www.digitalocean.com/community/tutorials/what-is-dry-development). I asked a peer to review my code (see [Acknowledgments(#Acknowledgments)]). It was suggested to me that I use event.target rather than a function for each section. While the first section worked to show/hide the quiz section, the others did not. Tests failed
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-a.webp)  ![678px ratio](/assets/testing/test-images/test-twenty-b.webp) |       | |             | | |
 021         |  script.js / index.html    | Chrome        |  showQuizSection     | Pass       | I realised that my event listener was 'listening' for only the showQuiz variable. I removed this part and the function worked as planned. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-one-a.webp)  |       | |             | | |
 022         |  script.js / index.html    | Chrome        |  passNickname     | Fail       | Following feedback on changing the order of my 'Enter Username' modal, I asked for the username first before the game starts. However the username was not pulling through to the passNickname function. My console log declared an undefined variable. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-two-a.webp)  |  ![678px ratio](/assets/testing/test-images/test-twenty-two-b.webp)      | |             | | |
 023         |  script.js / index.html    | Chrome        |  passNickname     | Pass       | Following several more variations of Test 022 I realised that that I had included a previous 'let username' before the functions. This effectivley meant that my username value was being reset every time the script ran. I corrected the error, inserted two extra lines into the function and it passed all tests
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-three-a.webp)  |  ![678px ratio](/assets/testing/test-images/test-twenty-three-b.webp)     | |             | | |
024         |  script.js / index.html    | Chrome        |  getHighScores     | Fail       | Upon completion of the quiz the user is presented with the High Scores section. However once back to the dashboard, if the user clicks High Scores (test-twenty-four-b), the array is not displaying. 
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-four-a.webp)  |  ![678px ratio](/assets/testing/test-images/test-twenty-four-b.webp)     | |             | | |
025         |  script.js / index.html    | Chrome        |  getHighScores     | Fail       | I have attempted to correct the issue in Test 024 by seperating the getHighScores function into two seperate functions. However this also failed tests, as the variables were not pulled through to displayScore function
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-five-a.webp)  |  ![678px ratio](/assets/testing/test-images/test-twenty-five-b.webp)     | |             | | |
026         |  script.js / index.html    | Chrome        |  displayHighScores     | Pass       | I tried to correct the errors in Tests 024 and 025, however I decided to try another way. I have reinstated the getHighScores function and created a seperate function called displayHighScores, but rather on rely on the variables of another functions I have replicated the last three lines from getHighScores and assigned them difference variable names. This means that I am accessing the array in exacly the same way without pushing any values or relying on other functions (see image b, replicated code is highlighted)
| **Before**                                          |   **After**          ||||
| ![678px ratio](/assets/testing/test-images/test-twenty-six-a.webp)  |  ![678px ratio](/assets/testing/test-images/test-twenty-six-b.webp)     | |             | | |




### Testing-Driven Development Testing (Red, Green, Refactor)

### Solved Bugs

Please view testing table for list of all solved bugs

### Known Bugs
|      Page   |   Feature                       | Element | Explanation                                                                                               |
| ------------| ------------                    | -----------  | -----------                                                                                          |
|             |                                 |              |                                                                                                      |


### Peer Feedback

I have worked closely with my peers on testing this product rigorously for any errors. The feedback is as follows:

1) How many questions do you have on your quiz? I've got to four and the game just stops with no errors or alerts

2) When you get correct answer it changes to just 40 then you click next and get score 40, might be better to keep score alongside he number when answer correct.

3) Your scores aren't working when I completed the quiz

4) On your instructions on mobile use overflow: scroll

5) Your back to main menu buttons are giving me a 404 error


### Responding to Peer Feedback

I have taken the following actions in response to feedback:

1) 

2) I have amended the increaseScore function output to return "Score: ${score} rather than just the value of score. 

3) I have re-designed the Game Over modal to include a final high score which is clear

4) I have corrected the issue with main container that was causing the content to spill out 

5) I have ameded the code where ordinarily the user would be directed to ("index.html") which is designed for localhost, not for external hosting























### Functions in further detail

The following section will explain in detail how each function works. All functions can be found in /assets/js/script.js


|      Function   |  Code Snippet                                 | Line   | Explanation    |
| ------------    | ------------                                  | -----  |-----------   |
|  connectAPI()   | async function connectAPI(apiURL)             |        | The 'async' in this function is crutial as it makes the function return a 'promise' |
|  connectAPI()   | const connection = await fetch(apiURL);       |        | This line uses the await() method, which works in conjunction with 'async'. It makes a function wait for a 'promise'. In this instance, the variable 'connection' is set as the value of await() |
|  connectAPI()   | if (connection.status >= 200 && connection.status <= 299)      |        | This will determine the 








 |







### Other Feedback

My mentor - Harry - suggested that instead of creating four seperate HTML documents as planned in my wireframes, that I create one single page and then use Javascript to hide and show the sections I want. To that end, I have created a series of Event Listeners that will execute blocks of code when the correct button is clicked. In this context, it will show/hide parts of the page since the entire product exists in one document. 






### Validation and formatting
**Jigsaw validator**

I used W3 School's Jigsaw Validator for my CSS. The validator picked up 53 errors. 25 of these were relating to Bootstrap. However the remaining 28 errors were from my style.css file, overwhelmingly relating to invalid references I'd made (e.g. .header-text-font  Property font-display doesn't exist : block). As the vast majority of my CSS was created through manipulating code and learning the end result, I expected more than a few errors during the first check. There were also 419 warnings flagged, but again these related to Bootstrap and was not something I could fix. I addressed all CSS issues, ran the validator again and it passed all validation with the output: Congratulations! No Error Found. This document validates as CSS level 3 + SVG !

I have also used Jigsaw to validate my HTML code. There were 23 errors identified which mainly covered my 'alt' tags, which I found were placed inappropriately. I resolved all HTML issues and ran the validator again. It showed no further errors. I re-ran the code after I made changes based on feedback from my peers.


**Formatting**
I've used [Formatter.com](https://www.freeformatter.com/html-formatter.html) to format my HTML and CSS code. I feel it was necessary to use a tool like this after I'd validated it, simply because this is my first project and I am very inexperienced as a developer at this point. I formatted my code again after I made changes to the code following peer feedback. 

### Testing User Stories

I had several people test the site for its main aims, which was to:
- **Receive the same user experience on multiple devices** - which I've demonstrated through use of Media Queries and Bootstrap to provide the same information across all devices with the exception of larger images which dissapear on smaller screens. 

- **To find out about previous and upcoming events easily** - which is met by having a link to the next event in the first section the user sees, and the opportunity to sign up. 
- **To sign up to volunteer on the next national event** - as above, the user form allows the user to sign up quite easily
- **To allow users to find information on their local branch** - although I changed the way the user can get this information, I felt it more practical to have the form come through a system for a message to be sent to the local branch, rather than the user being able to get the details. From experience this will reduce the chance of human error when dealing with multiple queries a day
- **To allow the user to contact someone if they need more information** - an easy to use contact form is available for the user to contact the national/local branch.

- - -

 ## Future Developments

There are several improvements I would like to make to Heart Helpers in the future when my knowledge and experience are improved.


|      Page     |   Future Development Ideas  | Reason not added in this release  |
| ------------  | ------------ | ------------ |
|  Get Involved | On:Hover option that explains why DOB is required  |  Limited knowledge of JavaScript |
|  Get Involved | JavaScript that will identify if the user is under 18. If yes, refer to sign-up-on-hold page, await parental consent  | Limited knowledge of JavaScript  |
|  Get Involved | Data validation on Confirm Email Address | Limited knowledge of JavaScript  |
|  Get Involved | Data validation on Terms of Service checkbox | Limited knowledge of JavaScript  |
|  Contact Us   | Data validation on Contact Us form to detect value submission (more than 0, less than 'X') |  Limited knowledge of JavaScript  |
|  Contact Us   | Data validation on other input values (email address format, numerical only for telephone) | Limited knowledge of JavaScript  |
|  About Us     | Interactivity on central rounded image so that when user clicks, information sections are shown | Limited knowledge of JavaScript  |
| Know the Facts | This is not a page I was able to create, but it was something I was going to create if I had more time. I would include many facts about Heart Disease and perhaps even an information video, possibly a link to YouTube (if such a video exists).| This was not added to the end project simply due to time constraints on the project, although there was a technical skills gap involved too, as I'm unsure how to add videos to code at this time. UPDATE: This has now been included following peer feedback |
| style.css | import URL| To make things flow better on the style.css I would like to use the @import "header.css"; function for header, footer and the different web pages. This is to keep things more organised |


## Credits

The vast majority of my time spent developing this project was spent by creating code from various sources, adapting, testing and evaluating. At the start of this project I had next to no coding experience. However, one of my skills is to find relevant information from various sources and adapt it to suit my own needs. Apart from one instance, I have not used any code written by others anywhere in this project, but feel it important to note from where I've taken inspiration. 

**W3 Schools**

The vast majority of coding I have learned for this project has come from [W3 Schools](https://www.w3schools.com). A few examples of this are [rounded borders](https://www.w3schools.com/css/css3_borders.asp), [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) and [background properties](https://www.w3schools.com/cssref/css3_pr_background.php). The information and resources are brilliant and have been a major factor in my completing this project.

**Code Pen**

After my mentor advised me to use EventListeners I studied online material to learn how to do this. Code Pen taught me how to sucessfully use EventListners. The article can be found [here](https://codepen.io/mohdizz/pen/VweZBQO)


**Pexels**

All of the images on this website come from Pexels, and can be found via the following links:

[Photo by Marcus Herzberg](https://www.pexels.com/photo/group-of-people-gathering-inside-bar-1058277/)

**Flaticon**

Some of the icons on this website come from [Flaticon](https://flaticon.com). 



### Content

Content for the website was written by Dan Matthews.

### Code Used




## Acknowledgments

Finally, I want to take the opportunity to thank and acknowledge the following for their support and patience in helping me create my first ever project:


- Kera Cudmore, whose project gave me the inspiration I needed for my own project, and her useful tips and advice along the way.
- Craig Hudson, who has helped me in this project with testing and for his technical troubleshooting  
- [Harry Dhillon](https://github.com/Harry-Leepz), who is my mentor at the Code Institute, for their continued support and guidance. 
- Kofi Afriyie, who is my facilitator from West Herts College, for their time, patience and encouragement in helping me develop this project. 
- Chris Minnick, who is the author of JavaScript ALL-IN-ONE for dummies (which can be found on [Amazon](https://www.amazon.co.uk/JavaScript-All-Dummies-Chris-Minnick/dp/1119906830)). It was from Chris that I learned how to connect to an API (lines 70 - 86 in script.js), and I have based my code upon that template. 
- James Q. Quick, whose video (which can be found [here](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10)) taught me how to utliize local storage, which was an intregal part of this project
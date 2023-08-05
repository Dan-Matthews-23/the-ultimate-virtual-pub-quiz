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

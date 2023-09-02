const connectErrButton = document.getElementById("connect-err-btn");
const pageNotFoundErrButton = document.getElementById("not-found-err-btn");
addEventListener("click", function (event) {
  
    if (event.target === connectErrButton || event.target === pageNotFoundErrButton) {
    window.location.assign("https://dan-matthews-23.github.io/the-ultimate-virtual-pub-quiz/index.html");
  }
});
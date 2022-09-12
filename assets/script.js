document.getElementById("start").addEventListener("click", startQuiz);
//  -- start quiz

var secondsLeft = 75;
var numberQuestions = 5,
  index = 0;

//  -- Function for quiz
function startQuiz() {
  // display question[i]
  showQuestion(question[i]);
  // display list of answers[i][j]
  for (j = 0; j < 4; j++) {
    showAnswer(answers[i][j]);
  }
  //
}
function showQuestion(s) {
  alert("show question " + s);
}

function showAnswer(s) {
  alert("show answer " + s);
}

//  -- function for timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //ENDS GAME
      sendMessage();
    }
  }, 1000);
}
//  -- function for display score

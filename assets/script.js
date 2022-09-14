//  -- call start quiz functions
document.getElementById("start").onclick = startQuiz;

// variable of seconds for timer
var secondsLeft = 75;

//  -- variable for quiz index
var quizIndex = 0;

// variable for score
var score = 0;

// array of questions and correct answers
var questions = [
  {
    currentQuestion: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    currentQuestion:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    currentQuestion: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    currentQuestion:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
  {
    currentQuestion:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
];

//  -- Function for quiz
function startQuiz() {
  console.log("startQuiz test");
  setTime();
  displayQuestion();
}
function displayQuestion() {
  // display text of current question
  document.getElementById("mainContainer").innerHTML = "";
  var displayedQuestion = questions[quizIndex].currentQuestion;
  document.getElementById("mainContainer").innerHTML = displayedQuestion;

  //   create buttons and add answer text
  for (i = 0; i < questions[quizIndex].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[quizIndex].choices[i];
    button.addEventListener("click", checkAnswer);
    document.getElementById("mainContainer").appendChild(button);
  }
}
function checkAnswer(event) {
  // check for right answer
  userChoice = event.target.innerText;
  if (userChoice === questions[quizIndex].answer) {
    quizIndex++;
    score = score + 10;
    // check for wrong answer
  } else {
    quizIndex++;
    secondsLeft = secondsLeft - 10;
  }

  document.getElementById("displayScore").textContent =
    "Current Score: " + score;

  // check if all quetions have been answered, if so end the quiz
  if (quizIndex === questions.length || secondsLeft === 0) {
    displayUserInfo();
    return;
  } else {
    displayQuestion();
  }
}
//  -- function for timer
function setTime() {
  console.log("timer test");
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      //ends quiz
      document.getElementById("time").textContent = "Time is 0";
      console.log("Timer is 0");
    }
  }, 1000);
}
// ask for user initals and display final score
function displayUserInfo() {
  var userInitials = prompt("Please enter your initials");
  document.getElementById("mainContainer").innerHTML =
    userInitials + " Final Score =  " + score;
}

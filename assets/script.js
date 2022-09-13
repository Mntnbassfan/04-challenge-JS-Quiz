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
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
];

//  -- Function for quiz
function startQuiz() {
  console.log("startQuiz test");
  setTime();
  displayQuestion();

  //  -- clear container

  //  -- loop through array of questions / answers
  //   for (i = 0; i < questions.length; i++) {
  //     console.log(i);
  //     //      -- add value of question from array to displayedQuestion
  //     var displayedQuestion = questions[quizIndex].currentQuestion;
  //     console.log(displayedQuestion);

  //     //   -- show question
  //     document.getElementById("mainContainer").innerHTML = displayedQuestion;

  //     //  -- create 4 buttons and add answer text to them
  //     for (var j = 0; j < 5; j++) {
  //       var displayedAnswer = document.createElement("button");
  //       displayedAnswer.textContent = questions[j];
  //       displayedAnswer.addEventListener("click", userChoice);

  //       //  -- wait for click
  //       //  -- check for correct answer
  //       function userChoice() {
  //         if (e.target.button !== questions[quizIndex].answer) {
  //           //   -- if subtract 10 seconds from time
  //           //  display "incorrect" in window
  //         } else {
  //           //  -- add 10 points to score
  //           // display "correct" in window
  //         }
  //       }
  //       //  -- check to see if either questions have been completed or timer is 0
  //       //  -- if not repeat
  //     }
  //   }
}
function displayQuestion() {
  document.getElementById("mainContainer").innerHTML = "";
  var displayedQuestion = questions[quizIndex].currentQuestion;
  document.getElementById("mainContainer").innerHTML = displayedQuestion;
  for (i = 0; i < questions[quizIndex].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[quizIndex].choices[i];
    button.addEventListener("click", checkAnswer);
    document.getElementById("mainContainer").appendChild(button);
  }
}
function checkAnswer(event) {
  userChoice = event.target.innerText;
  if (userChoice === questions[quizIndex].answer) {
    quizIndex++;
    displayQuestion();
  } else {
    quizIndex++;
    secondsLeft = secondsLeft - 10;
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
      document.getElementById("time").textContent = "finished";
      console.log("Timer is 0");
    }
  }, 1000);
}

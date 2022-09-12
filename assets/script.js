//  -- call start quiz functions
document.getElementById("start").onclick = startQuiz;
{
  console.log("click test");
}

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
  console.log("function test");
  setTime();
  console.log("start quiz test");
  //  -- clear container
  document.getElementById("mainContainer").innerHTML = "";

  var currentQuestion = questions[(quizIndex, quizIndex)];
  console.log(currentQuestion);
  //  -- loop through array of questions / answers
  for (i = 0; i < questions.length; i++) {
    console.log(i);

    //   -- show question

    //  -- create 4 buttons and add answers to them
    //  -- wait for click
    //  -- check for correct answer
    //  -- if right add 10 points to score
    //   -- if wrong subtract 10 seconds from time
    //  -- check to see if either questions have been completed or timer is 0
    //  -- if not repeat
  }
}
//

//  -- function showQuestion(s) {
//      -- alert("show question " + s);

//   -- function showAnswer(s) {
//  --  alert("show answer " + s);

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

      //ENDS GAME
      document.getElementById("time").textContent = "finished";
      console.log("Timer is 0");
    }
  }, 1000);
}
//  -- function for display score

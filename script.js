// Define variables
var questionNumber = 0;
var timer = 30;
var timerInt;

// Grab elements by ID and save them into variables
const startButton = document.getElementById("start-button");
const quizBox = document.getElementById("quizbox-div");
const questionBox = document.getElementById("question-box");
const answerBox = document.getElementById("answer-box");
const timerSpan = document.getElementById("timer-span");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");

// Define questions and answers
var questions = [
    {
        ques: "What is the current version of JavaScript",
        opts: [
            "ES6",
            "ES5",
        ],
        ans: "ES6",
    },
    {
        ques: '"var", "let", and "const" are all the same.',
        opts: [
            "True",
            "False",
        ],
        ans: "False",
    },
    {
        ques: "What does DOM stand for?",
        opts: [
            "Document Object Model",
            "Document Order Model",
        ],
        ans: "Document Object Model",
    },
    {
        ques: "Did you enjoy this short quiz?",
        opts: [
            "Yes",
            "Yes",
        ],
        ans: "Yes",
    },
];

// Define click events
startButton.addEventListener("click", startQuiz);

// Start the quiz and timer
function startQuiz() {
    startTimer();
    currentQuestion = 0;
    startButton.classList.add("hidden");
    quizBox.classList.remove("hidden");
    question();
};

// Timer function
function startTimer() {
    timerInt = setInterval(() => {
      timer--;
      if (timer >= 0) {
        span = timerSpan;
        span.innerHTML = timer;
      } else {
          clearInterval(timer);
          finishQuiz();
      }
    }, 1000);
  }

// Logic to display the questions and answers
function question() {
    questionBox.textContent = questions[currentQuestion].ques;
    var options = questions[currentQuestion].opts;
    answerBox.innerHTML = "";

    for (var i = 0; i < options.length; i++) {
        const choices = options[i];
        var optionButton = document.createElement("button");
        optionButton.textContent = choices;
        optionButton.classList.add("answer-button");
        optionButton.addEventListener("click", check);
        answerBox.appendChild(optionButton);
    }
}

// Check reponses against answers/options
function check(event) {
    var optionSelected = event.target;
    console.log(optionSelected);
    var currentQues = questions[currentQuestion];
    console.log(currentQues);
    var correctAnswer = optionSelected.innerText === currentQues.ans;
    console.log(correctAnswer);

    if (!correctAnswer) {
        timer -= 10;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        question();
    } else {
        finishQuiz();
    }
}

// Wrap up the quiz
function finishQuiz() {
    clearInterval(timerInt);
    quizBox.classList.add("hidden");
    timerSpan.classList.add("hidden");
    scoreBox.classList.remove("hidden");
    finalScores();
}

// Display final score
function finalScores() {
    finalScore.innerHTML = timer;
};
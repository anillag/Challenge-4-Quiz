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

// Define questions and answers
const questions = [
    {
        ques: "Question 1",
        opts: [
            "Option 1 (True)",
            "Option 2 (False)",
        ],
        ans: "Option 1 (True)",
    },
    {
        ques: "Question 2",
        opts: [
            "Option 3 (False)",
            "Option 4 (True)",
        ],
        ans: "Option 4 (True)",
    },
    {
        ques: "Question 3",
        opts: [
            "Option 5 (True)",
            "Option 6 (False)",
        ],
        ans: "Option 5 (True)",
    },
]

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

function question() {
    questionBox.textContent = questions[questionNumber].ques;
    var answers = questions[questionNumber].opts;
    console.log(answers);
    answerBox.innerHTML = "";
    for (var i = 0; i < answers.length; i++) {
        var response = answers[i];
        var answerButton = document.createElement("button");
        answerButton.textContent = response;
        answerButton.classList.add("answer-button");
        answerButton.addEventListener("click", check);
        answerBox.appendChild(answerButton);
    }
}

function check(event) {
    var optionSelected = event.target;
    var currentQues = questions[currentQuestion];
    var correctAnswer = optionSelected.innerText === currentQues.ans;
    console.log("correctAnswer value is " + correctAnswer);

    if (correctAnswer === false) {
        timer -= 10;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        question();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInt);
    console.log("Finishing quiz")
}
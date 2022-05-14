// Grab elements by ID and save them into variables
const startButton = document.getElementById("start-button");

// Define click events
startButton.addEventListener("click", startQuiz);

// Start the quiz and timer
function startQuiz() {
    // alert("Quiz has begun");
    startTimer();
};

// Timer function
function startTimer(){
    var timer = 60;
    setInterval(function() {
      timer--;
      if (timer >= 0) {
        span = document.getElementById("timer-span");
        span.innerHTML = timer;
      }
      if (timer === 0) {
        //   alert('sorry, out of time');
          clearInterval(timer);
      }
    }, 1000);
  }


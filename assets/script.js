var startGame = document.querySelector("#startButton");
var firstAnswer = document.querySelector("#answer1");
var secondAnswer = document.querySelector("#answer2");
var thirdAnswer = document.querySelector("#answer3");
var fourthAnswer = document.querySelector("#answer4");
let timerLeft = 75;

function countdown(){
    var timerInterval = setInterval(function() {
            timerLeft--;
            startGame.textContent = timerLeft + " seconds remaining!";

            if (timerLeft === 0) {
                clearInterval(timerInterval);
                startGame.textContent = "Game Over!";
            }
    
    }, 1000);
}

startGame.addEventListener("click", function() {
        startGame.setAttribute("style", "box-shadow: 0px 0px; top: 4px;");
        countdown();

    });


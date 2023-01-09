var startGame = document.querySelector("#startButton");
var questionBox = document.querySelector("#questions");
var firstAnswer = document.querySelector("#answer1");
var secondAnswer = document.querySelector("#answer2");
var thirdAnswer = document.querySelector("#answer3");
var fourthAnswer = document.querySelector("#answer4");
// var scoreList = document.querySelector("high-scores");
const audioCorrect = new Audio("assets/sfx/correct.wav");
const audioIncorrect = new Audio("assets/sfx/incorrect.wav");
let timerLeft = 50;
let highScore = 0;

document.querySelector("#answers").style.pointerEvents = 'none';

  if (localStorage.getItem("playerdata")){
        var highScoreList = JSON.parse(localStorage.getItem("playerdata"));

  }
  else {
        var highScoreList = [];

  }

function countdown(){
    var timerInterval = setInterval(function() {
        timerLeft--;
        startGame.textContent = timerLeft + " seconds remaining!";
        
        if (timerLeft <= 0 || currentQuestion > lastQuestion) {
            clearInterval(timerInterval);
            startGame.textContent = "Game Over!";
            endGame();
            // playerRankings();
            return;
    
        }
    
    }, 1000);

}

function endGame (){
    if (timerLeft <= 0 || currentQuestion > lastQuestion){
        firstAnswer.textContent = "";
        secondAnswer.textContent = "";
        thirdAnswer.textContent = "";
        fourthAnswer.textContent = "";
        document.querySelector("#answers").style.pointerEvents = 'none';

        var finalScore = JSON.stringify(highScore);
        var inputName = prompt("Please enter your name to track your High Score");
        var playerData = {
                playerName: inputName,
                playerScore: finalScore
            }

        highScoreList.push(playerData);
        console.log(playerData,highScoreList);
        localStorage.setItem("playerdata", JSON.stringify(highScoreList));

    return;
    }

}

startGame.addEventListener("click", function() {
        startGame.setAttribute("style", "box-shadow: 0px 0px; top: 4px;");
        countdown();
        document.querySelector("#answers").style.pointerEvents = 'auto';
        showQuestions();
    });

var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
          ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
    ];



let lastQuestion = questions.length - 1;
let currentQuestion = 0;

function showQuestions(){
    let q = questions[currentQuestion];
    questionBox.textContent = q.title;
    firstAnswer.textContent = q.choices[0];
    secondAnswer.textContent = q.choices[1];
    thirdAnswer.textContent = q.choices[2];
    fourthAnswer.textContent = q.choices[3];

}

function checkAnswer(userAnswer){
    console.log(userAnswer);

    if (userAnswer == questions[currentQuestion].answer) {
            audioCorrect.play();
            highScore = highScore + 10;
            document.querySelector("#answers").style.backgroundColor = "green";         
            currentQuestion++;
                      
    }
    else {
        audioIncorrect.play();
        timerLeft = timerLeft - 10;
        currentQuestion++;
        
    }

    if (currentQuestion > lastQuestion){
        endGame();
        // playerRankings();

    }
    else {
        showQuestions();
    }

function playerRankings(){
    scoreList.textContent = highScoreList;


}

console.log(highScore);
    
}
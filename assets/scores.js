// DOM Element for manipulating high score box
var highScores = document.querySelector("#high-scores");

// Function that if there is local storage data, push data into an array - if no local storage data, create an empty array to hold high score information
// Change score list by descending order based on user score
// Change local storage object into string
// Continue pushing new scores into array and displaying it on high score box in an ordered list
function playerRankings(){

    if (localStorage.getItem("playerdata")){
        var highScoreList = JSON.parse(localStorage.getItem("playerdata"));

        highScoreList.sort(function scoreOrder(a, b){
            if (a.playerScore > b.playerScore){
                return -1;
        
            }
            if (a.playerScore < b.playerScore){
                return 1;
        
            }
            if (a.playerScore == b.playerScore){
                return 0;
            }
        });
    
    }
    else {
        var highScoreList = [];
    
    }

    localStorage.setItem("playerdata", JSON.stringify(highScoreList))
        
    for (var i = 0; i < highScoreList.length; i++) {
        var userRank = highScoreList[i].playerName;
        var userScore = highScoreList[i].playerScore;
        
        var li = document.createElement("li");
        li.textContent = userRank + " " + userScore;
        li.setAttribute("playerdata", i);
    
        highScores.appendChild(li);
      }
}

// Initialize player rankings function on entering page
playerRankings();


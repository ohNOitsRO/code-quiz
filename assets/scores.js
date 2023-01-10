var highScores = document.querySelector("#high-scores");


function playerRankings(){

    if (localStorage.getItem("playerdata")){
        var highScoreList = JSON.parse(localStorage.getItem("playerdata"));

        highScoreList.sort(function scoreOrder(a, b){
            if (a.playerScore < b.playerScore){
                return -1;
        
            }
            if (a.playerScore > b.playerScore){
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

playerRankings();


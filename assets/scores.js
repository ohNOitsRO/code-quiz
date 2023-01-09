var highScores = document.querySelector("#high-scores");

// if (localStorage.getItem("playerdata")){
//     var highScoreList = JSON.parse(localStorage.getItem("playerdata"));

// }
// else {
//     var highScoreList = [];

// }

function playerRankings(){

    if (localStorage.getItem("playerdata")){
        var highScoreList = JSON.parse(localStorage.getItem("playerdata"));
    
    }
    else {
        var highScoreList = [];
    
    }

    localStorage.setItem("playerdata", JSON.stringify(highScoreList))
    // localStorage.getItem("playerdata");
    var highScoreList = JSON.stringify(localStorage.getItem("playerdata"));
    // highScores.textContent = highScoreList;

    
    
    for (var i = 0; i < highScoreList.length; i++) {
        var rank = highScoreList[i];
        
        var li = document.createElement("li");
        li.textContent = rank;
        li.setAttribute("playerdata", i);
    
        highScores.appendChild(li);
      }
}

playerRankings();
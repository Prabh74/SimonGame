// global variables
var level = 0;
var randomSeries = [];
var userSeries = [];
var gameState = false;


// main
$(document).keypress(function(){
    if (!gameState){
            $("h1").text("Level "+level);
            sequence();
            gameState=true;
    }
    
})

$("button").click(function (){
     var userPressedButtonId ="#" + this.id;
    $(userPressedButtonId).fadeOut(50).fadeIn(50);
    userSeries.push(userPressedButtonId);
    check(userSeries.length - 1);
})



// functions
function sequence(){
    level++;
    userSeries = [];
    $("h1").text("Level " + level);
    var randomButtonId = "#btn" + (Math.floor(Math.random()*4) + 1);
    randomSeries.push(randomButtonId);
    $(randomButtonId).fadeOut(100).fadeIn(100);
}

function startOver(){
    level=0;
    randomSeries = [];
    gameState = false;
}

function check(indexTOCheck){
    if(userSeries[indexTOCheck]===randomSeries[indexTOCheck])
    {
        if(userSeries.length===randomSeries.length){
            setTimeout(sequence,1000);
        }
    }
    else{
        $("h1").text("GAME OVER, press key to start again");
        startOver();
    }
}





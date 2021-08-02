var level = 0;
var randomSeries = [];
var userSeries = [];

function sequence(){
    level++;
    userSeries = [];
    $("h1").text("Level " + level);
    var randomButtonId = "#btn" + (Math.floor(Math.random()*4) + 1);
    randomSeries.push(randomButtonId);
    $(randomButtonId).fadeOut(50).fadeIn(50);
}

$(document).keypress(function(){
    if (level === 0)
    {
        sequence();
    }
})

    $("button").click(function (){
        var userPressedButtonId ="#" + this.id;
        $(userPressedButtonId).fadeOut(50).fadeIn(50);
        userSeries.push(userPressedButtonId);
        check();
        if(userSeries.length === randomSeries.length){
            setTimeout(sequence,1000);
        }
    })


function check(){
    for(var i=0; i<userSeries.length;i++)
    {
        if(userSeries[i] !== randomSeries[i])
        {
            $("h1").text("GAME OVER");
            setTimeout(function(){
                level = 0;
                $("h1").text("Press any key to start");
                randomSeries = [];
                userSeries = [];
            }, 2000)
            
        }
    }
}
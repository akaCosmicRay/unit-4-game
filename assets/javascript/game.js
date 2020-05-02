//Gems
let gem = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    white:
    {
        name: "White",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    }
}

//Wins, Losses
let wins = 0;
let loses = 0;

//Tracking the scores
let currentScore = 0;
let targetScore = 0;

//Buttons click, Notes:.onclick did not work but .click does
$("#blue").click(function () {
    addValues(gem.blue);
});

$("#white").click(function () {
    addValues(gem.white);
});

$("#red").click(function () {
    addValues(gem.red);
});

$("#purple").click(function () {
    addValues(gem.purple);
});



//Functions
//Random numbers
let getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//start the game with the scores and numbers
let startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);

    gem.blue.value = getRandom(1, 12);
    gem.white.value = getRandom(1, 12);
    gem.red.value = getRandom(1, 12);
    gem.purple.value = getRandom(1, 12);

    console.log("=================");
    console.log("Target Score: " + targetScore);
    console.log("Blue: "+ gem.blue.value + " White: " + gem.white.value + " Red: " + gem.red.value + " Purple: " + gem.purple.value);
}

startGame();

//Changes the HTML
$("#points").html(currentScore);
$("#randomNumber").html(targetScore);

//Changes values when clicking on gems
let addValues = function(gem) {
    currentScore = currentScore + gem.value;
    $("#points").html(currentScore);
    userWin();
    console.log("Your Score: " + currentScore);
}

let userWin = function () {
    if(currentScore > targetScore){
        alert("You lose!");
        console.log("You lose!");
        loses++;
        $("#loses").html(loses);
        startGame();
        $("#points").html(currentScore);
        $("#randomNumber").html(targetScore);
        
        
    } else if (currentScore == targetScore){
        alert("YAY! You won!");
        console.log("YAY! You won!");
        wins++;
        $("#wins").html(wins);
        startGame();
        $("#points").html(currentScore);
        $("#randomNumber").html(targetScore);
    }

}

//Javscript help from videos by The Boot Camp and Andy Em via YouTube

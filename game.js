
var userClickedPattern = [];

var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click(function() {

var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);

animatePress(userChosenColor);

//console.log(userClickedPattern);
})


function nextSequence() {

  var randomNumber = Math.floor(Math.random()*4);
var randomChoosenColor = buttonColors [randomNumber];
gamePattern.push(randomChoosenColor);
$("#"+randomChoosenColor).fadeOut(100).fadeIn(100);

playSound(randomChoosenColor);

}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+ currentColor).removeClass("pressed")
  },100);

}

$(document).keydown(nextSequence());

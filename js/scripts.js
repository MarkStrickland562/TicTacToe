 //Business Logic for Die Sides


function attachButtonListeners(){
  $("#button1").on("click", "#player1Roll", function(){

  });
};

$(document).ready(function() {
  attachButtonListeners();
  $("form#playGame").submit(function(event) {
    event.preventDefault();

    inputtedPlayer1 = $("input#player1").val();
    inputtedPlayer2 = $("input#player2").val();
    inputtedPlayer1Guess = $("input#player1Guess").val();
    inputtedPlayer2Guess = $("input#player2Guess").val();

    $("#player1Name").empty().text(inputtedPlayer1);
    $("#player2Name").empty().text(inputtedPlayer2);

    $("#player1Score").text("0");
    $("#player2Score").text("0");

  });
});

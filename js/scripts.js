$(document).ready(function() {
    var suits = ["diamonds", "spades","hearts","clubs"];
    var ranks = ["Ace","King","Queen","Jack","10","9","8","7","6","5","4","3","2"];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        $("#deck").append("<li>" + rank + " of " + suit + "</li>");
      });
    });
});

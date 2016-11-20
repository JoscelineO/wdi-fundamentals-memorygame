/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert ("You found a match!")
}
else 
	{alert ("Sorry, try again.")
}

if (cardOne === cardTwo) {
	alert ("You found a match!")
}
else 
	{alert ("Sorry, try again.")
}

if (cardThree === cardFour) {
	alert ("You found a match!")
}
else 
	{alert ("Sorry, try again.")
}

console.log("JS file is connected to HTML! Woo!")*/

var board = document.getElementById('game-board');

function createCards() {

	for (var i=0; i<4 ; i++) {
		var card = document.createElement('div');

		card.className = "card";

		board.appendChild(card);
	}
}

createCards();

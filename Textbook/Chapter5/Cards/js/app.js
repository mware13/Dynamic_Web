// var cardOneSuit = "hearts",
// 	cardOneRank = "two",
// 	cardTwoSuit = "spades",
// 	cardTwoRank = "ace",
// 	cardThreeSuit = "spades",
// 	cardThreeRank = "five",
// 	// ...
// 	cardFiveSuitRank = "seven";


// var cardHandSuits = ["hearts", "spades", "spades", "clubs", "diamonds"],
// 	cardHandRanks = ["two", "ace", "five", "king", "seven"];


// //create a card object with a rank of "two"
// //and a suit of "hearts"
// var cardOne = {"rank":"two", "suit":"hearts"};

// //print the rank of cardOne
// console.log(cardOne.rank);
// //=>two

// //print the suit of cardOne
// console.log(cardOne.suit);
// //=>hearts

// //change the card to the ace of spades
// cardOne.rank = "ace";
// cardOne.suit = "spades";

// console.log(cardOne);
// //=> object {rank: "ace", suit: "spades"}


// //create an empty object
// var card = {};

// //set the rank to ace
// card.rank = "ace";

// console.log(card);
// //=> Object {rank: "ace"}

// //set the suit to hearts
// card.suit = "hearts";

// console.log(card);
// //=> Object {rank: "ace", suit: "hearts"}


// //create an empty array
// var cards = [];

// //push the two of hearts onto the array
// cards.push( {"rank":"two", "suit":"hearts"} );
// cards.push( {"rank":"ace", "suit":"spades"} );
// cards.push( {"rank":"five", "suit":"spades"} );
// cards.push( {"rank":"king", "suit":"clubs"} );
// cards.push( {"rank":"seven", "suit":"diamonds"} );

// //print the first and third card in the hand
// console.log(cards[0]);
// //=> Object {rank: "two", suit: "hearts"}

// console.log(cards[2]);
// //=> Object {rank: "five", suit: "spades"}


// //create an array of cards
// //with a big array literal
// var cards = [
// 	{"rank":"two", "suit":"hearts"},
// 	{"rank":"ace", "suit":"spades"},
// 	{"rank":"five", "suit":"spades"},
// 	{"rank":"king", "suit":"clubs"},
// 	{"rank":"seven", "suit":"diamonds"},
// ];

var main = function() {
	"use strict";

	console.log("Hello world!");

	//call JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
		//print card to console
		console.log(card);
		//create an element to hold the card
		var $cardParagraph = $("<p>");

		//add text to the paragraph element
		$cardParagraph.text(card.rank + " of " + card.suit);

		//append the card paragraph to main
		$("main").append($cardParagraph);
	});

	$.getJSON("cards/hand.json", function (hand) {
		var $list = $("<ul>");

		hand.forEach(function (card) {
			var $card = $("<li>");
			$card.text(card.rank + " of " + card.suit);
			$list.append($card);
		});

		//append the list to main
		$("main").append($list);
	});
};

$(document).ready(main);
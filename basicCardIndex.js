//requiring my basic card constructor, card data & inquirer package
var BasicCard = require("./Basic.js");
var cardData = require("./basic.json");
var inquirer = require("inquirer");


//function that will start the game
function start() {
	var currentCard;
	var initialScore = 0;
	var initialIndex = 0;
	var cardArray = [];

	for (var i = 0; i < cardData.length; i++){
		currentCard = new BasicCard(cardData[i].front, cardData[i].back);
		cardArray.push(currentCard);
		
	}

	playRound(initialIndex, initialScore, cardArray);
}

//function play-around
function playRound(currentIndex, currentScore, cardArray){
	if (currentIndex < cardArray.length){
		askQuestion(currentIndex, currentScore, cardArray);
	}
	else {
		endGame(currentScore);
	}
} 


//function that will prompt the user a question
function askQuestion(currentIndex, currentScore, cardArray){
	var card = cardArray[currentIndex];

	inquirer.prompt([{
		type: "input",
		name: "text",
		message: card.front + "\nAnswer: "
	}]).then(function(answer){
		if (answer.text === card.back) {
			console.log("Correct");
			currentScore ++;
		}
		else {
			console.log("Incorrect, the answer is " + card.back);
		}
		currentIndex ++;
		playRound(currentIndex, currentScore, cardArray);
	})
}


//function that will end the game

function endGame(score) {
	console.log("The game is over thanks for playing, your score is " + score);
}

start();



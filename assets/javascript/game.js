

var numberList = [19-120];

var crystalOptions = ("blue", "green", "yellow", "red");

    // Computer selected solution will be held here.
    var chosenNumber = "";

    // This will break the numbers within the crystal within the solution
    var numbersInChosenCrystal = [];
    // This will be the numbers
    var numbers = 0;

    var ghostRider = [];

    // Holds all of the wrong guesses.
    var wrongGuesses = [];

    // Holds the numbers guessed
    var numbersHeld;

    // Game counters
    var winCounter = 0;
    var loseCounter = 0;
    var guessCounter = 5;


    // FUNCTIONS (These are bits of code that we will call upon to run when needed).
    // ==================================================================================================

    // startGame()
    // It's how we we will start and restart the game.
   
    function startGame() {
        var guessCounter = 5;
        chosenNumber = numberList[Math.floor(Math.random() * chosenNumber.length)];
        numbersInChosenCrystal = chosenNumber.split("");
        numBlanks = numbersInChosenCrystal.length;
        console.log(chosenNumber);
       ghostRider = [];
       wrongGuesses = [];
       for(i =0; i < numBlanks; i++) {
       	ghostRider.push ("_");
       }
       console.log(ghostRider);
    };

function checkNumbers (number) {
var numbersInChosenCrystal = false;
for (i=0; i < numBlanks; i++) {
	if (chosenNumber [i] === number) {
numbersInChosenCrystal = true;

var crystalDiv = $('#crstalOptions');

var numberList = $('<div>' + numberList[i]) + '</div>');

crystalDiv.append(newCrystalDiv);



	}

}

};







var randomNumber = 19-120;
if(randomNumber 19 === 120 && randomNumber!= 0){
	

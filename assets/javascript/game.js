

// $("#start").click(startClickRedCrystal);

	var crystalOptions = ["blueCrystal", "greenCrystal", "yellowCrystal", "redCrystal"];

    // Computer selected solution will be held here.
    var chosenNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
   	console.log("chosenNumber", chosenNumber);

    // This will break the numbers within the crystal within the solution
    //var numbersInChosenCrystal = [];

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

    // crystal variables for counting each number on each cystal

    var redCrystal = 0;
    var blueCrystal = 0;
    var yellowCrystal = 0;
    var greenCrystal = 0;

function selectRedCrystalNumber() {
var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
   console.log("redCrystalNumber", redCrystalNumber);
}

function selectBlueCrystalNumber() {
var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
   console.log("blueCrystalNumber", redCrystalNumber);
}

function selectGreenCrystalNumber() {
var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
   console.log("greenCrystalNumber", redCrystalNumber);
}

function selectYellowCrystalNumber() {
var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
   console.log("yellowCrystalNumber", redCrystalNumber);
}
//TODO: 1 -write a variable with the name "counter", it should be in the global scope

//TODO: 2- Funnction A: We need a function that will add the total of the values inside of any clicked crystals, and
	//TODO:Store the running sum of these numbers inside a variable/counter
	//TODO: Return that sum

//TODO: 3- Funciton B: We need another function here to compare the running total in the counter (returned form the funciton above) to the computer generated chosenNumber online 8 above
	//TODO: We need a conditional statement here - if the running total is equal to the chosenNumber, tell the user that they have won the game, then restart the game (hint: by calling the startGame function)
	//TODO: else if the running total is greater than chosenNumber, tell the user they have lost and restart the game (hint: by calling the startGame function)
	//TODO: else, the game continues as before and the user can click on more crystals

//TODO: HINT: Remember to use console.logs generously to check everything as you go! 

$(document).ready(function(){

    $("#redCrystal").on("click", function() {
        selectRedCrystalNumber();
	});

    $("#blueCrystal").on("click", function() {
        selectBlueCrystalNumber();
     });

    $("#greenCrystal").on("click", function() {
        selectGreenCrystalNumber();
    });

    $("#yellowCrystal").on("click", function() {
        selectYellowCrystalNumber();
    });

	$("#randomButton").on("click",function(){
		alert("test");
	});

});

// var foo = [];
// for (var i = n; n <= j; i++) {
//     foo.push(i);
// }




    // FUNCTIONS (These are bits of code that we will call upon to run when needed).
    // ==================================================================================================

    // startGame()
    // It's how we we will start and restart the game.








//     function startGame() {
//         guessCounter = 5;
//         numbersInChosenCrystal = chosenNumber.split("");
//         numBlanks = numbersInChosenCrystal.length;
//         console.log(chosenNumber);
//        ghostRider = [];
//        wrongGuesses = [];
//        for(i =0; i < numBlanks; i++) {
//        	ghostRider.push ("_");
//        }
//        console.log(ghostRider);
//     };

// 	function checkNumbers (number) {
// 		numbersInChosenCrystal = false;
// 		for (i=0; i < numBlanks; i++) {
// 		if (chosenNumber [i] === number) {
// 			numbersInChosenCrystal = true;
// 			var redCrystal = "";

// 			for (var i =0; i <= 12; i++){
// 				redCrystal =Math.floor(Math.random() + 1);
// 				numbersInChosenCrystal =random + redCrystal;
// 				console.log(redCrystal);
// 			}




// 			var crystalDiv = $('#crstalOptions');

// 			var numberList = $('<div>' + numberList[i]) + '</div>';

// 			crystalDiv.append(newCrystalDiv);
// 		}

// }

// };

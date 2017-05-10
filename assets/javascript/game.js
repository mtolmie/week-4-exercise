var chosenNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
// You need to add a <span> with the ID of number-to-guess so that this will show up - I went ahead and added it in the HTML
$("#number-to-guess").text(chosenNumber);

    var counter = 0;
    var winCounter = 0;
    var lossCounter = 0;

var crystalNum = new Array(4);
var m = 0;
var min = 1;
var max = 12;

while (m < crystalNum.length) {
    var randnum = Math.floor(Math.random() * (max - min + 1) + min);

    var found = false;

    for (var i = 0; i < crystalNum.length; i++) {
        if (crystalNum[i] == randnum) {
            found = true;
            break;
        }
    }

    if (!found) {
        crystalNum[m] = randnum;
        m++;
    }
}

 // counter = 0;
    var winCounter = 0;
    var lossCounter = 0;
 console.log(crystalNum);
 console.log(chosenNumber)

//I added this here so it could be called later.
 function init() {
        chosenNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

       $("#number-to-guess").text(chosenNumber);

       counter = 0;


       var crystalNum = new Array(4);
        var j = 0;
        var min = 1;
        var max = 12;

       while (j < crystalNum.length) {
            var randnum = Math.floor(Math.random() * (max - min + 1) + min);

           var found = false;

           for (var i = 0; i < crystalNum.length; i++) {
                if (crystalNum[i] == randnum) {
                    found = true;
                    break;
                }
            }

           if (!found) {
                crystalNum[j] = randnum;
                j++;
            }
        }
                console.log(crystalNum);


        $("#red-crystal").attr("data-crystalvalue", crystalNum[0])
        $("#green-crystal").attr("data-crystalvalue", crystalNum[1])
        $("#blue-crystal").attr("data-crystalvalue", crystalNum[2])
        $("#black-crystal").attr("data-crystalvalue", crystalNum[3])
}
    // var crystalOptions = ["blueCrystal", "greenCrystal", "yellowCrystal", "redCrystal"];

 //    // Computer selected solution will be held here.
 //    var chosenNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
 //   console.log("chosenNumber", chosenNumber);

 //    // This will break the numbers within the crystal within the solution
 //    var numbersInChosenCrystal = [];
 //    // This will be the numbers
 //    var numbers = 0;

 //    var ghostRider = [];

 //    // Holds all of the wrong guesses.
 //    var wrongGuesses = [];

 //    // Holds the numbers guessed
 //    var numbersHeld;

    // crystal variables for counting each number on each cystal

//     var redCrystal = 0;
//     var blueCrystal = 0;
//     var yellowCrystal = 0;
//     var greenCrystal = 0;

// function selectRedCrystalNumber() {
// var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
//    console.log("redCrystalNumber", redCrystalNumber);
// }

// function selectBlueCrystalNumber() {
// var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
//    console.log("blueCrystalNumber", redCrystalNumber);
// }

// function selectGreenCrystalNumber() {
// var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
//    console.log("greenCrystalNumber", redCrystalNumber);
// }

// function selectYellowCrystalNumber() {
// var redCrystalNumber = Math.floor(Math.random() * ((12-1)+1) + 1);
//    console.log("yellowCrystalNumber", redCrystalNumber);
// }

$("#redCrystal").attr("crystalvalue", crystalNum[0])
$("#blueCrystal").attr("crystalvalue", crystalNum[1])
$("#greenCrystal").attr("crystalvalue", crystalNum[2])
$("#yellowCrystal").attr("crystalvalue", crystalNum[3])



$("#redCrystal").on("click", function() {
    var crystalValue = $(this).attr("crystalvalue");
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
 // I added this from the code below to get the win/loss counters to work    
     if (counter === chosenNumber) {
        winCounter++
        $("#wins").text(winCounter + "");
// I added the init function to reset the numbers and start again    
        init();

    } else if (counter > chosenNumber) {
        lossCounter++
        $("#losses").text(lossCounter);
// I added the init function to reset the numbers and start again    
        init();
    }
 //..........................................................................................    
    $("#current-total").text(counter);

    });


    $("#blueCrystal").on("click", function() {
    var crystalValue = ($(this).attr("crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
 // I added this from the code below to get the win/loss counters to work
     if (counter === chosenNumber) {
        winCounter++
        $("#wins").text(winCounter + "");
// I added the init function to reset the numbers and start again    
        init();

    } else if (counter > chosenNumber) {
        lossCounter++
        $("#losses").text(lossCounter);
// I added the init function to reset the numbers and start again    
        init();
    }
//..........................................................................................     
    $("#current-total").text(counter + "");

    });
// I copied the code from the 2 crystal functions above and changed them to the other 2 needed crystals
    $("#greenCrystal").on("click", function() {
    var crystalValue = $(this).attr("crystalvalue");
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
 // I added this from the code below to get the win/loss counters to work   
     if (counter === chosenNumber) {
        winCounter++
        $("#wins").text(winCounter + "");
// I added the init function to reset the numbers and start again    
        init();

    } else if (counter > chosenNumber) {
        lossCounter++
        $("#losses").text(lossCounter);
// I added the init function to reset the numbers and start again    
        init();
    }
 //..........................................................................................   
    $("#current-total").text(counter);
   
    });


    $("#yellowCrystal").on("click", function() {
    var crystalValue = ($(this).attr("crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
 // I added this from the code below to get the win/loss counters to work
    if (counter === chosenNumber) {
        winCounter++
        $("#wins").text(winCounter + "");
// I added the init function to reset the numbers and start again    
        init();

    } else if (counter > chosenNumber) {
        lossCounter++
        $("#losses").text(lossCounter);
// I added the init function to reset the numbers and start again    
        init();
    }
//.......................................................................................... 
    $("#current-total").text(counter + "");

    });

// $(document).ready(function(){
//     console.log("document.ready");
//     $("#redCrystal").on("click", function() {
//         selectRedCrystalNumber();
// if (counter === chosenNumber) {
//         winCounter++
//         $("#wins").text(winCounter + "");

//     } else if (counter > chosenNumber) {
//         lossCounter++
//         $("#losses").text(lossCounter);
//     }
//     $("#current-total").text(counter);

// });

    

//     $("#blueCrystal").on("click", function() {
//         selectBlueCrystalNumber();

//         if (counter === chosenNumber) {
//         winCounter++
//         $("#wins").text(winCounter);

//     } else if (counter > chosenNumber) {
//         lossCounter++
//         $("#losses").text(lossCounter);
//     }
//     $("#current-total").text(counter);

//      });

   
//     $("#greenCrystal").on("click", function() {
//         selectGreenCrystalNumber();


//         if (counter === chosenNumber) {
//         winCounter++
//         $("#wins").text(winCounter);

//     } else if (counter > chosenNumber) {
//         lossCounter++
//         $("#losses").text(lossCounter);
//     }
//     $("#current-total").text(counter);

//     });
   
//     $("#yellowCrystal").on("click", function() {
//         selectYellowCrystalNumber();

//         if (counter === chosenNumber) {
//         winCounter++
//         $("#wins").text(winCounter);

//     } else if (counter > chosenNumber) {
//         lossCounter++
//         $("#losses").text(lossCounter);
//     }
//     $("#current-total").text(counter);

//     });


//  $("#randomButton").on("click",function(){
//      alert("test");
//  });
// });

//TODO: 1 -write a variable with the name "counter", it should be in the global scope
 
 //TODO: 2- Funnction A:  need a function that will add the total of the values inside of any clicked crystals, and
  //TODO:Store the running sum of these numbers inside a variable/counter
  //TODO: Return that sum
 
 //TODO: 3- Funciton B:  need another function here to compare the running total in the counter (returned form the funciton above) to the computer generated chosenNumber online 8 above
 //TODO: We need a conditional statement here - if the running total is equal to the chosenNumber, tell the user that they have won the game, then restart the game (hint: by calling the startGame function)
  //TODO: else if the running total is greater than chosenNumber, tell the user they have lost and restart the game (hint: by calling the startGame function)
  //TODO: else, the game continues as before and the user can click on more crystals
  
//

















 




   



	
